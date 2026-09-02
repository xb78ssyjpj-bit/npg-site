/* ==========================================================================
   Nuages Production Group — The Cyanotype Schematic
   1. The cloud field  — animated fBm value noise, quarter-res, 30fps capped
   2. The signal path  — tablist with roving focus, lit trunk, travelling pulse
   3. The gap          — pointer/keyboard driven comparison reveal
   ========================================================================== */

(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ----------------------------------------------------------------------
     1. The cloud field
     ---------------------------------------------------------------------- */

  (function cloudField() {
    var canvas = document.getElementById("field");
    if (!canvas) return;
    var ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Render at a fraction of viewport size and let the browser scale it up.
    // The softness is the point, and it keeps the per-frame cost near zero.
    var SCALE = 9;
    var buf = document.createElement("canvas");
    var bctx = buf.getContext("2d");
    var image = null;
    var w = 0, h = 0;

    // Deterministic value noise -----------------------------------------

    var perm = new Uint8Array(512);
    (function seedPermutation() {
      var p = new Uint8Array(256), i;
      for (i = 0; i < 256; i++) p[i] = i;
      // Fixed-seed LCG shuffle so the field is identical on every load.
      var seed = 1973;
      for (i = 255; i > 0; i--) {
        seed = (seed * 1103515245 + 12345) & 0x7fffffff;
        var j = seed % (i + 1);
        var t = p[i]; p[i] = p[j]; p[j] = t;
      }
      for (i = 0; i < 512; i++) perm[i] = p[i & 255];
    })();

    function fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }

    function hash(x, y, z) {
      return perm[(perm[(perm[x & 255] + y) & 255] + z) & 255] / 255;
    }

    function valueNoise(x, y, z) {
      var xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
      var xf = x - xi, yf = y - yi, zf = z - zi;
      var u = fade(xf), v = fade(yf), wgt = fade(zf);

      var c000 = hash(xi,     yi,     zi);
      var c100 = hash(xi + 1, yi,     zi);
      var c010 = hash(xi,     yi + 1, zi);
      var c110 = hash(xi + 1, yi + 1, zi);
      var c001 = hash(xi,     yi,     zi + 1);
      var c101 = hash(xi + 1, yi,     zi + 1);
      var c011 = hash(xi,     yi + 1, zi + 1);
      var c111 = hash(xi + 1, yi + 1, zi + 1);

      var x00 = c000 + (c100 - c000) * u;
      var x10 = c010 + (c110 - c010) * u;
      var x01 = c001 + (c101 - c001) * u;
      var x11 = c011 + (c111 - c011) * u;

      var y0 = x00 + (x10 - x00) * v;
      var y1 = x01 + (x11 - x01) * v;

      return y0 + (y1 - y0) * wgt;
    }

    function fbm(x, y, z) {
      var total = 0, amp = 0.5, freq = 1, norm = 0;
      for (var o = 0; o < 3; o++) {
        total += valueNoise(x * freq, y * freq, z * freq) * amp;
        norm += amp;
        amp *= 0.5;
        freq *= 2.05;
      }
      return total / norm;
    }

    // Palette stops the field interpolates between.
    // The top stop is deliberately capped: --paper-dim body copy must clear
    // 4.5:1 against the brightest patch the field can produce, so the sense of
    // azure light comes from the wire glows, not from the ground going bright.
    var STOPS = [
      { t: 0.00, r: 0x03, g: 0x08, b: 0x0F },
      { t: 0.42, r: 0x06, g: 0x13, b: 0x20 },
      { t: 0.70, r: 0x0A, g: 0x29, b: 0x42 },
      { t: 0.88, r: 0x0C, g: 0x30, b: 0x4D },
      { t: 1.00, r: 0x0F, g: 0x3A, b: 0x5C }
    ];

    function ramp(t, out) {
      var i = 0;
      while (i < STOPS.length - 2 && t > STOPS[i + 1].t) i++;
      var a = STOPS[i], b = STOPS[i + 1];
      var k = (t - a.t) / (b.t - a.t);
      if (k < 0) k = 0; else if (k > 1) k = 1;
      out[0] = a.r + (b.r - a.r) * k;
      out[1] = a.g + (b.g - a.g) * k;
      out[2] = a.b + (b.b - a.b) * k;
    }

    function resize() {
      w = Math.max(1, Math.ceil(window.innerWidth / SCALE));
      h = Math.max(1, Math.ceil(window.innerHeight / SCALE));
      buf.width = w;
      buf.height = h;
      image = bctx.createImageData(w, h);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    var rgb = [0, 0, 0];

    function render(time) {
      var data = image.data;
      var z = time * 0.058;
      var aspect = w / h;
      var i = 0;

      for (var y = 0; y < h; y++) {
        var ny = y / h;
        for (var x = 0; x < w; x++) {
          var nxu = x / w;
          var nx = nxu * aspect;

          // Domain warping: feeding noise through itself twice is what turns a
          // smooth gradient into something that billows like actual cloud.
          var q = fbm(nx * 1.6, ny * 1.6, z);
          var r = fbm(nx * 1.9 + 2.4 * q + 0.7, ny * 1.9 + 1.8 * q - 0.4, z * 0.83);
          var n = fbm(nx * 2.3 + 2.9 * r, ny * 2.3 + 2.1 * r, z * 1.07);

          // Dim toward the page edges so the field frames the content, but keep
          // structure everywhere — a dead flat corner reads as a broken gradient.
          var ex = Math.abs(nxu * 2 - 1);
          var ey = Math.abs(ny * 2 - 1);
          var edge = 1 - ex * ex * 0.42 - ey * ey * 0.30;
          if (edge < 0) edge = 0;

          var v = (n - 0.34) * 2.25 + 0.30;
          v = v * (0.42 + 0.58 * edge);
          if (v < 0) v = 0; else if (v > 1) v = 1;

          ramp(v, rgb);
          data[i++] = rgb[0];
          data[i++] = rgb[1];
          data[i++] = rgb[2];
          data[i++] = 255;
        }
      }

      bctx.putImageData(image, 0, 0);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(buf, 0, 0, canvas.width, canvas.height);
    }

    var raf = null;
    var last = 0;
    var t0 = 0;
    var FRAME = 1000 / 30;

    function loop(now) {
      raf = requestAnimationFrame(loop);
      if (now - last < FRAME) return;
      last = now;
      if (!t0) t0 = now;
      render((now - t0) / 1000);
    }

    function start() {
      if (raf !== null || reduced.matches) return;
      raf = requestAnimationFrame(loop);
    }

    function stop() {
      if (raf === null) return;
      cancelAnimationFrame(raf);
      raf = null;
    }

    var resizeTimer = null;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        resize();
        render(reduced.matches ? 0 : (performance.now() - t0) / 1000);
      }, 150);
    });

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop(); else start();
    });

    function applyMotionPreference() {
      stop();
      resize();
      if (reduced.matches) {
        render(0);            // one static frame
      } else {
        t0 = 0;
        start();
      }
    }

    if (reduced.addEventListener) reduced.addEventListener("change", applyMotionPreference);
    applyMotionPreference();
  })();

  /* ----------------------------------------------------------------------
     2. The gap
     ---------------------------------------------------------------------- */

  (function compare() {
    var stage = document.getElementById("compare");
    if (!stage) return;

    var before = document.getElementById("compareBefore");
    var handle = document.getElementById("compareHandle");
    var range = document.getElementById("compareRange");
    var npg = document.getElementById("videoNpg");
    var phone = document.getElementById("videoPhone");

    /* ---- the split ---- */

    function apply(value) {
      before.style.clipPath = "inset(0 " + (100 - value) + "% 0 0)";
      handle.style.left = value + "%";
    }

    range.addEventListener("input", function () { apply(Number(range.value)); });

    var dragging = false;

    function positionFromEvent(event) {
      var box = stage.querySelector(".compare__stage").getBoundingClientRect();
      return Math.max(0, Math.min(100, (event.clientX - box.left) / box.width * 100));
    }

    stage.addEventListener("pointerdown", function (event) {
      dragging = true;
      if (event.target.setPointerCapture) event.target.setPointerCapture(event.pointerId);
      var value = positionFromEvent(event);
      range.value = value;
      apply(value);
    });

    stage.addEventListener("pointermove", function (event) {
      if (!dragging) return;
      var value = positionFromEvent(event);
      range.value = value;
      apply(value);
    });

    window.addEventListener("pointerup", function () { dragging = false; });

    apply(50);

    /* ---- the two clips ---- */

    if (!npg || !phone) return;

    // Two elements decoding the same 12 seconds will drift apart, and drift is
    // exactly what breaks the illusion of one continuous shot. The clean side is
    // the clock; the phone side is nudged back whenever it slips.
    function sync() {
      if (npg.readyState < 2 || phone.readyState < 2) return;
      if (Math.abs(phone.currentTime - npg.currentTime) > 0.08) {
        phone.currentTime = npg.currentTime;
      }
    }
    npg.addEventListener("timeupdate", sync);
    npg.addEventListener("seeked", sync);

    function play() {
      if (reduced.matches) return;         // posters stay, nothing moves
      var a = npg.play();
      var b = phone.play();
      if (a && a.catch) a.catch(function () {});
      if (b && b.catch) b.catch(function () {});
    }

    // Only spend bandwidth once the hero is actually on screen.
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { play(); } else { npg.pause(); phone.pause(); }
        });
      }, { threshold: 0.15 }).observe(stage);
    } else {
      play();
    }

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { npg.pause(); phone.pause(); } else { play(); }
    });

    if (reduced.addEventListener) {
      reduced.addEventListener("change", function () {
        if (reduced.matches) { npg.pause(); phone.pause(); } else { play(); }
      });
    }
  })();

})();

/* ==========================================================================
   Motion — patterns from Motion Primitives (text reveal, in view, spotlight)
   and Watermelon UI (shimmer), rebuilt in plain JS. Nothing here is required
   to read the page: the `data-motion` flag is set in the head only when
   scripting is on and motion is wanted, so this module either enhances a
   fully-visible page or does not run at all.
   ========================================================================== */

(function motion() {
  "use strict";

  var root = document.documentElement;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

  // Flipping the OS preference mid-session drops every effect immediately.
  if (reduced.addEventListener) {
    reduced.addEventListener("change", function () {
      if (reduced.matches) delete root.dataset.motion;
      else root.dataset.motion = "";
    });
  }

  if (!("motion" in root.dataset)) return;

  /* ---- Text effect: split the hero line into words ---- */

  var display = document.querySelector(".hero .display");
  if (display) {
    var words = display.textContent.trim().split(/\s+/);
    display.textContent = "";
    words.forEach(function (word, i) {
      var span = document.createElement("span");
      span.className = "word";
      span.style.setProperty("--i", i);
      span.textContent = word;
      display.appendChild(span);
      if (i < words.length - 1) display.appendChild(document.createTextNode(" "));
    });
  }

  /* ---- In view ---- */

  var targets = Array.prototype.slice.call(
    document.querySelectorAll(".rise, .beam, .hero .display"));

  // Stagger within a group rather than across the page, so a row of five reads
  // as one gesture instead of a queue.
  targets.forEach(function (el) {
    if (!el.classList.contains("rise") || !el.parentElement) return;
    var peers = Array.prototype.filter.call(el.parentElement.children, function (n) {
      return n.classList && n.classList.contains("rise");
    });
    el.style.setProperty("--i", peers.indexOf(el));
  });

  function reveal(el) {
    el.classList.add("is-in");
    el.addEventListener("transitionend", function done() {
      el.classList.add("is-settled");
      el.removeEventListener("transitionend", done);
    });
  }

  if (!("IntersectionObserver" in window)) {
    targets.forEach(reveal);
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      reveal(entry.target);
      io.unobserve(entry.target);          // arrivals happen once, not on every pass
    });
  }, { rootMargin: "0px 0px -12% 0px", threshold: 0.15 });

  targets.forEach(function (el) { io.observe(el); });

  // Safety net. Hidden-by-default content is only ever acceptable if something
  // guarantees it comes back — an observer that never fires (a scroll-container
  // ancestor, an engine quirk) must not cost the reader the copy.
  setTimeout(function () {
    targets.forEach(function (el) {
      if (!el.classList.contains("is-in")) { reveal(el); io.unobserve(el); }
    });
  }, 2500);

  /* ---- Spotlight: a lamp you aim across the footage ---- */

  var hero = document.querySelector(".hero");
  var spot = document.querySelector(".hero__spot");

  if (hero && spot && window.matchMedia("(hover: hover)").matches) {
    var pending = false;
    var px = 0, py = 0;

    hero.addEventListener("pointermove", function (event) {
      if (event.pointerType !== "mouse") return;
      var box = hero.getBoundingClientRect();
      px = ((event.clientX - box.left) / box.width) * 100;
      py = ((event.clientY - box.top) / box.height) * 100;
      if (pending) return;
      pending = true;
      requestAnimationFrame(function () {
        pending = false;
        spot.style.setProperty("--spot-x", px + "%");
        spot.style.setProperty("--spot-y", py + "%");
      });
    }, { passive: true });
  }
})();
