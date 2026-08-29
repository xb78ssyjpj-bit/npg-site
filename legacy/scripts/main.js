/* NPG — shared interaction layer.
   Motion is opt-in: content renders visible, and JS only takes over the
   reveal when IntersectionObserver exists and motion is not reduced. */

(function masthead() {
  const bar = document.querySelector(".masthead");
  if (!bar) return;
  const sync = () => bar.setAttribute("data-scrolled", String(window.scrollY > 8));
  sync();
  window.addEventListener("scroll", sync, { passive: true });
})();

(function navToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (!toggle || !nav) return;

  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  };

  toggle.addEventListener("click", () =>
    setOpen(toggle.getAttribute("aria-expanded") !== "true")
  );

  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => setOpen(false))
  );

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });

  // Leaving the mobile breakpoint must not strand the page in a locked state.
  const mq = window.matchMedia("(min-width: 861px)");
  mq.addEventListener("change", (e) => e.matches && setOpen(false));
})();

(function reveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced || !("IntersectionObserver" in window)) return;

  document.documentElement.setAttribute("data-reveal", "on");

  const showAll = () => items.forEach((el) => el.classList.add("is-in"));
  // Failsafe: if the observer never fires, nothing stays hidden.
  const failsafe = setTimeout(showAll, 1600);

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = Number(el.dataset.revealDelay || 0);
        setTimeout(() => el.classList.add("is-in"), delay);
        io.unobserve(el);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  items.forEach((el) => io.observe(el));
  window.addEventListener("pagehide", () => clearTimeout(failsafe), { once: true });
})();

(function enquiryForm() {
  const form = document.querySelector("#enquiry");
  if (!form) return;

  const status = form.querySelector(".form__status");
  const target = form.dataset.mailto;

  const setError = (field, message) => {
    const wrap = field.closest(".field");
    if (!wrap) return;
    const note = wrap.querySelector(".error");
    wrap.classList.toggle("has-error", Boolean(message));
    field.setAttribute("aria-invalid", message ? "true" : "false");
    if (note && message) note.textContent = message;
  };

  const validateField = (field) => {
    const value = field.value.trim();
    if (!field.hasAttribute("required")) return true;
    if (!value) {
      setError(field, field.dataset.required || "This field is required.");
      return false;
    }
    if (field.type === "email" && !field.checkValidity()) {
      setError(field, "Enter a valid email address.");
      return false;
    }
    setError(field, "");
    return true;
  };

  form.querySelectorAll("input, select, textarea").forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
    field.addEventListener("input", () => {
      if (field.closest(".field").classList.contains("has-error")) validateField(field);
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fields = [...form.querySelectorAll("[required]")];
    const ok = fields.map(validateField).every(Boolean);

    if (!ok) {
      status.dataset.state = "error";
      status.textContent = "Some details are missing — check the highlighted fields.";
      const firstBad = form.querySelector(".has-error input, .has-error select, .has-error textarea");
      if (firstBad) firstBad.focus();
      return;
    }

    const data = new FormData(form);
    const subject = encodeURIComponent(
      `Enquiry — ${data.get("service")} — ${data.get("name")}`
    );
    const body = encodeURIComponent(
      [
        `Name:    ${data.get("name")}`,
        `Email:   ${data.get("email")}`,
        `Phone:   ${data.get("phone") || "—"}`,
        `Service: ${data.get("service")}`,
        "",
        data.get("message"),
      ].join("\n")
    );

    status.dataset.state = "success";
    status.textContent =
      "Your email client is opening with this brief filled in — send it from there and it reaches us.";

    window.location.href = `mailto:${target}?subject=${subject}&body=${body}`;
  });
})();
