<!-- =========================================================
GLADWEBS • BUILD PATH (Premium + Visual + Step-by-step v2)
Build Stage Focus:
✅ Blueprint strategy plan (clarity → offer → structure)
✅ Same UX: phase map, chips, progress ring, “Next step”, collapsible notes
✅ Same logic hooks: localStorage, phases, progress, resume, completion unlock,
   badge modal, confetti (script + CSS in later parts)
PART 1 = HTML (Structure) — copy/paste ready
========================================================= -->
console.log("✅ build-stage.js loaded");
<section class="gw-buildV" id="gw-build-path" aria-label="Build Path">
  <!-- ===== TOP: Visual header + Phase Map ===== -->
  <header class="gwTop">
    <div class="gwTop__left">
      <div class="gwTop__kicker">
        <span class="gwPill">Stage 2 • Build</span>
        <span class="gwMini">Auto-saves</span>
      </div>

      <h3 class="gwTop__title">
        Your Build Blueprint
        <span class="gwTop__muted">— 3 phases • 25–45 min</span>
      </h3>

      <!-- Visual phase map -->
      <div class="gwMap" role="group" aria-label="Phase map">
        <button class="gwMap__node is-active" type="button" data-phase="blueprint" role="tab" aria-selected="true">
          <span class="gwMap__icon" aria-hidden="true">🧱</span>
          <span class="gwMap__label">Blueprint</span>
        </button>

        <span class="gwMap__line" aria-hidden="true"></span>

        <button class="gwMap__node" type="button" data-phase="offer" role="tab" aria-selected="false">
          <span class="gwMap__icon" aria-hidden="true">📦</span>
          <span class="gwMap__label">Offer</span>
        </button>

        <span class="gwMap__line" aria-hidden="true"></span>

        <button class="gwMap__node" type="button" data-phase="structure" role="tab" aria-selected="false">
          <span class="gwMap__icon" aria-hidden="true">🏗️</span>
          <span class="gwMap__label">Structure</span>
        </button>
      </div>
    </div>

    <!-- ===== Progress Panel (visual) ===== -->
    <div class="gwTop__right" aria-live="polite">
      <div class="gwProgCard">
        <div class="gwRing" aria-hidden="true">
          <svg viewBox="0 0 120 120">
            <circle class="gwRing__bg" cx="60" cy="60" r="46"></circle>
            <circle class="gwRing__fg" cx="60" cy="60" r="46" pathLength="100"></circle>
          </svg>
          <div class="gwRing__text">
            <div class="gwRing__pct" id="gwProgressPct">0%</div>
            <div class="gwRing__small" id="gwCount">0 / 0</div>
          </div>
        </div>

        <div class="gwProgMeta">
          <div class="gwNext" id="gwNext">Next: —</div>

          <button class="gwNextBtn" type="button" id="gwResumeBtn">
            <span class="gwNextBtn__spark" aria-hidden="true"></span>
            Next step →
          </button>

          <div class="gwTiny">Tap “Next step” anytime to keep building.</div>
        </div>
      </div>

      <!-- Progress bar (still clickable) -->
      <div class="gwBar" role="group" aria-label="Build progress">
        <div class="gwBar__track" id="gwProgressBar" role="button" tabindex="0" aria-label="Jump to next step">
          <div class="gwBar__fill" id="gwProgressFill"></div>
          <div class="gwBar__shine" aria-hidden="true"></div>
        </div>
      </div>
    </div>
  </header>

  <!-- ===== “What to do” micro guide (super short) ===== -->
  <div class="gwGuide" aria-label="How to use">
    <div class="gwGuide__chip"><span aria-hidden="true">✅</span> Check items</div>
    <div class="gwGuide__chip"><span aria-hidden="true">👆</span> Tap for details</div>
    <div class="gwGuide__chip"><span aria-hidden="true">💾</span> Saves automatically</div>
  </div>

  <!-- ===== CARDS ===== -->
  <div class="gwCards" id="gwCards">
    <!-- PHASE: BLUEPRINT -->
    <article class="gwPhaseCard" data-phase="blueprint" id="gwPhase-blueprint">
      <div class="gwPhaseHead">
        <div class="gwPhaseHead__left">
          <div class="gwPhaseTag">
            <span class="gwPhaseTag__icon" aria-hidden="true">🧱</span>
            <span class="gwPhaseTag__text">Blueprint</span>
          </div>
          <div class="gwPhaseHint">Turn ideas → a clear plan (one page).</div>
        </div>
        <span class="gwPhaseBadge">Phase 1</span>
      </div>

      <ul class="gwTaskGrid" role="list">
        <li class="gwTask" id="task-personaCard">
          <label class="gwTask__row">
            <input type="checkbox" data-task="personaCard" />
            <span class="gwTask__box" aria-hidden="true"></span>
            <span class="gwTask__main">
              <span class="gwTask__title">Persona Card</span>
              <span class="gwTask__chips">
                <span class="gwChip">🎯</span>
                <span class="gwChip">8m</span>
              </span>
            </span>
            <span class="gwTask__chev" aria-hidden="true">›</span>
          </label>
          <div class="gwTask__detail">
            One audience. 3 pains → 3 outcomes. (No “everyone”.)
          </div>
        </li>

        <li class="gwTask" id="task-oneLiner">
          <label class="gwTask__row">
            <input type="checkbox" data-task="oneLiner" />
            <span class="gwTask__box" aria-hidden="true"></span>
            <span class="gwTask__main">
              <span class="gwTask__title">1-line promise</span>
              <span class="gwTask__chips">
                <span class="gwChip">✨</span>
                <span class="gwChip">5m</span>
              </span>
            </span>
            <span class="gwTask__chev" aria-hidden="true">›</span>
          </label>
          <div class="gwTask__detail">
            “I help [who] get [result] without [pain].”
          </div>
        </li>

        <li class="gwTask" id="task-pathToYes">
          <label class="gwTask__row">
            <input type="checkbox" data-task="pathToYes" />
            <span class="gwTask__box" aria-hidden="true"></span>
            <span class="gwTask__main">
              <span class="gwTask__title">Path-to-Yes map</span>
              <span class="gwTask__chips">
                <span class="gwChip">🧭</span>
                <span class="gwChip">10m</span>
              </span>
            </span>
            <span class="gwTask__chev" aria-hidden="true">›</span>
          </label>
          <div class="gwTask__detail">
            Visitor → trust → CTA. List the 5 steps they need to feel “yes”.
          </div>
        </li>

        <li class="gwTask" id="task-proofPlan">
          <label class="gwTask__row">
            <input type="checkbox" data-task="proofPlan" />
            <span class="gwTask__box" aria-hidden="true"></span>
            <span class="gwTask__main">
              <span class="gwTask__title">Proof plan</span>
              <span class="gwTask__chips">
                <span class="gwChip">🧾</span>
                <span class="gwChip">7m</span>
              </span>
            </span>
            <span class="gwTask__chev" aria-hidden="true">›</span>
          </label>
          <div class="gwTask__detail">
            Pick 3: results, testimonials, logos, screenshots, process, guarantees.
          </div>
        </li>
      </ul>

      <details class="gwNotes" data-notes-wrap="blueprint">
        <summary class="gwNotes__sum">
          <span class="gwNotes__dot" aria-hidden="true"></span>
          Notes (optional)
          <span class="gwNotes__hint">tap to open</span>
        </summary>
        <div class="gwNotes__body">
          <div class="gwNotes__top">
            <span class="gwNotes__label">Quick notes</span>
            <button class="gwNotes__clear" type="button" data-clear-notes="blueprint">Clear</button>
          </div>
          <textarea class="gwNotes__field" data-notes="blueprint" rows="4"
            placeholder="Audience = ___. Promise = ___. Path-to-Yes = ___. Proof = ___."></textarea>
        </div>
      </details>
    </article>

    <!-- PHASE: OFFER -->
    <article class="gwPhaseCard" data-phase="offer" id="gwPhase-offer" hidden>
      <div class="gwPhaseHead">
        <div class="gwPhaseHead__left">
          <div class="gwPhaseTag">
            <span class="gwPhaseTag__icon" aria-hidden="true">📦</span>
            <span class="gwPhaseTag__text">Offer</span>
          </div>
          <div class="gwPhaseHint">Package value → make the “yes” easy.</div>
        </div>
        <span class="gwPhaseBadge">Phase 2</span>
      </div>

      <ul class="gwTaskGrid" role="list">
        <li class="gwTask" id="task-offerStack">
          <label class="gwTask__row">
            <input type="checkbox" data-task="offerStack" />
            <span class="gwTask__box" aria-hidden="true"></span>
            <span class="gwTask__main">
              <span class="gwTask__title">Offer stack</span>
              <span class="gwTask__chips">
                <span class="gwChip">🧩</span>
                <span class="gwChip">10m</span>
              </span>
            </span>
            <span class="gwTask__chev" aria-hidden="true">›</span>
          </label>
          <div class="gwTask__detail">
            Core deliverable + 2 bonuses + “how it works”.
          </div>
        </li>

        <li class="gwTask" id="task-pricingLogic">
          <label class="gwTask__row">
            <input type="checkbox" data-task="pricingLogic" />
            <span class="gwTask__box" aria-hidden="true"></span>
            <span class="gwTask__main">
              <span class="gwTask__title">Pricing logic</span>
              <span class="gwTask__chips">
                <span class="gwChip">💰</span>
                <span class="gwChip">6m</span>
              </span>
            </span>
            <span class="gwTask__chev" aria-hidden="true">›</span>
          </label>
          <div class="gwTask__detail">
            Price anchor → plan options → what’s included (clear boundaries).
          </div>
        </li>

        <li class="gwTask" id="task-riskReversal">
          <label class="gwTask__row">
            <input type="checkbox" data-task="riskReversal" />
            <span class="gwTask__box" aria-hidden="true"></span>
            <span class="gwTask__main">
              <span class="gwTask__title">Risk reversal</span>
              <span class="gwTask__chips">
                <span class="gwChip">🛡️</span>
                <span class="gwChip">5m</span>
              </span>
            </span>
            <span class="gwTask__chev" aria-hidden="true">›</span>
          </label>
          <div class="gwTask__detail">
            Guarantee / promise / “what happens if…” (reduce hesitation).
          </div>
        </li>

        <li class="gwTask" id="task-ctaChoice">
          <label class="gwTask__row">
            <input type="checkbox" data-task="ctaChoice" />
            <span class="gwTask__box" aria-hidden="true"></span>
            <span class="gwTask__main">
              <span class="gwTask__title">Primary CTA</span>
              <span class="gwTask__chips">
                <span class="gwChip">👉</span>
                <span class="gwChip">3m</span>
              </span>
            </span>
            <span class="gwTask__chev" aria-hidden="true">›</span>
          </label>
          <div class="gwTask__detail">
            Choose ONE: Book call • Buy now • Get quote • Free audit • Join waitlist.
          </div>
        </li>
      </ul>

      <details class="gwNotes" data-notes-wrap="offer">
        <summary class="gwNotes__sum">
          <span class="gwNotes__dot" aria-hidden="true"></span>
          Notes (optional)
          <span class="gwNotes__hint">tap to open</span>
        </summary>
        <div class="gwNotes__body">
          <div class="gwNotes__top">
            <span class="gwNotes__label">Quick notes</span>
            <button class="gwNotes__clear" type="button" data-clear-notes="offer">Clear</button>
          </div>
          <textarea class="gwNotes__field" data-notes="offer" rows="4"
            placeholder="Offer = ___. Bonuses = ___. Price logic = ___. CTA = ___."></textarea>
        </div>
      </details>
    </article>

    <!-- PHASE: STRUCTURE -->
    <article class="gwPhaseCard" data-phase="structure" id="gwPhase-structure" hidden>
      <div class="gwPhaseHead">
        <div class="gwPhaseHead__left">
          <div class="gwPhaseTag">
            <span class="gwPhaseTag__icon" aria-hidden="true">🏗️</span>
            <span class="gwPhaseTag__text">Structure</span>
          </div>
          <div class="gwPhaseHint">Turn the plan → a simple site blueprint.</div>
        </div>
        <span class="gwPhaseBadge">Phase 3</span>
      </div>

      <ul class="gwTaskGrid" role="list">
        <li class="gwTask" id="task-sitemap">
          <label class="gwTask__row">
            <input type="checkbox" data-task="sitemap" />
            <span class="gwTask__box" aria-hidden="true"></span>
            <span class="gwTask__main">
              <span class="gwTask__title">1-page sitemap</span>
              <span class="gwTask__chips">
                <span class="gwChip">🗺️</span>
                <span class="gwChip">8m</span>
              </span>
            </span>
            <span class="gwTask__chev" aria-hidden="true">›</span>
          </label>
          <div class="gwTask__detail">
            Home • Offer • Proof • About • Contact (keep it tight).
          </div>
        </li>

        <li class="gwTask" id="task-homeWireframe">
          <label class="gwTask__row">
            <input type="checkbox" data-task="homeWireframe" />
            <span class="gwTask__box" aria-hidden="true"></span>
            <span class="gwTask__main">
              <span class="gwTask__title">Homepage wireframe</span>
              <span class="gwTask__chips">
                <span class="gwChip">📐</span>
                <span class="gwChip">12m</span>
              </span>
            </span>
            <span class="gwTask__chev" aria-hidden="true">›</span>
          </label>
          <div class="gwTask__detail">
            Hero → problem → solution → steps → proof → CTA (sketch is fine).
          </div>
        </li>

        <li class="gwTask" id="task-leadCapture">
          <label class="gwTask__row">
            <input type="checkbox" data-task="leadCapture" />
            <span class="gwTask__box" aria-hidden="true"></span>
            <span class="gwTask__main">
              <span class="gwTask__title">Lead capture</span>
              <span class="gwTask__chips">
                <span class="gwChip">📬</span>
                <span class="gwChip">7m</span>
              </span>
            </span>
            <span class="gwTask__chev" aria-hidden="true">›</span>
          </label>
          <div class="gwTask__detail">
            Form + thank-you + next step (email or booking link).
          </div>
        </li>

        <li class="gwTask" id="task-baseline">
          <label class="gwTask__row">
            <input type="checkbox" data-task="baseline" />
            <span class="gwTask__box" aria-hidden="true"></span>
            <span class="gwTask__main">
              <span class="gwTask__title">Baseline snapshot</span>
              <span class="gwTask__chips">
                <span class="gwChip">🖼️</span>
                <span class="gwChip">2m</span>
              </span>
            </span>
            <span class="gwTask__chev" aria-hidden="true">›</span>
          </label>
          <div class="gwTask__detail">
            Save a “before” screenshot (home + offer page).
          </div>
        </li>
      </ul>

      <details class="gwNotes" data-notes-wrap="structure">
        <summary class="gwNotes__sum">
          <span class="gwNotes__dot" aria-hidden="true"></span>
          Notes (optional)
          <span class="gwNotes__hint">tap to open</span>
        </summary>
        <div class="gwNotes__body">
          <div class="gwNotes__top">
            <span class="gwNotes__label">Quick notes</span>
            <button class="gwNotes__clear" type="button" data-clear-notes="structure">Clear</button>
          </div>
          <textarea class="gwNotes__field" data-notes="structure" rows="4"
            placeholder="Sitemap = ___. Hero = ___. Sections = ___. Lead capture = ___."></textarea>
        </div>
      </details>
    </article>
  </div>

  <!-- ===== COMPLETION ===== -->
  <div class="gwComplete" id="gwComplete" hidden>
    <div class="gwComplete__glow" aria-hidden="true"></div>
    <div class="gwComplete__card">
      <div class="gwComplete__top">
        <div class="gwComplete__title">Build complete</div>
        <div class="gwComplete__mini">Blueprint ready • Badge unlocked</div>
      </div>

      <div class="gwComplete__actions">
        <button class="gwBtn gwBtn--primary" type="button" id="gwOpenBadgeBtn">
          Get your badge →
        </button>

        <a class="gwBtn gwBtn--ghost"
           href="https://gladwebs.com/build#Build-Certificate"
           id="gwCertificateBtn"
           target="_blank"
           rel="noopener">
          Open certificate →
        </a>

        <button class="gwBtn gwBtn--ghost" type="button" id="gwCopySnapshot">
          Copy snapshot
        </button>
      </div>

      <div class="gwComplete__note">Next: Launch (traffic + conversion).</div>
    </div>
  </div>
</section>

<!-- ✅ BADGE MODAL (Build) -->
<div class="gw-badgeModal" id="gwBadgeModal" aria-hidden="true">
  <div class="gw-badgeModal__backdrop" data-gw-close></div>

  <div class="gw-badgeModal__panel" role="dialog" aria-modal="true" aria-labelledby="gwBadgeTitle">
    <button class="gw-badgeModal__close" type="button" aria-label="Close" data-gw-close>✕</button>

    <div class="gw-badgeModal__arc" aria-hidden="true"></div>

    <div class="gw-badgeModal__head">
      <p class="gw-badgeModal__kicker">Stage complete</p>
      <h3 class="gw-badgeModal__title" id="gwBadgeTitle">You earned the Build badge.</h3>
      <p class="gw-badgeModal__sub">Blueprint done. Now you can build pages with confidence.</p>
    </div>

    <div class="gw-badgeModal__media">
      <img
        id="gwBadgeImg"
        src="https://cdn.prod.website-files.com/67156ddebd88954062d7d85f/REPLACE_BUILD_BADGE.png"
        alt="Gladwebs Build Badge"
        loading="lazy"
      />
    </div>

    <div class="gw-badgeModal__actions">
      <button class="gw-badgeModal__primary" type="button" id="gwDownloadBadgeBtn">
        ⬇️ Download badge
      </button>

      <a class="gw-badgeModal__secondary"
         href="https://gladwebs.com/build#Build-Certificate"
         target="_blank"
         rel="noopener">
        Open certificate →
      </a>
    </div>

    <p class="gw-badgeModal__note">No posting required.</p>
  </div>
</div>
<!-- =========================================================
GLADWEBS • BUILD PATH (Premium + Visual + Step-by-step v2)
PART 2 = CSS (Styling) — copy/paste ready
Notes:
- Uses same visual language as your Adapt v2 (glass + glow + chips)
- Swap accent colors if you want Build to feel more “amber/gold”
========================================================= -->

<style>
  :root{
    /* Build accents (slightly more “builder” / blueprint) */
    --gw-red:#ff4d4d;
    --gw-red2:#ff6b6b;
    --gw-amber:#ffb020;
    --gw-amber2:#ffd166;

    --gw-text:#fff;
    --gw-muted:rgba(255,255,255,.74);
    --gw-muted2:rgba(255,255,255,.60);
    --gw-stroke:rgba(255,255,255,.10);
    --gw-card:rgba(255,255,255,.035);
    --gw-card2:rgba(255,255,255,.05);

    --gw-shadow: 0 18px 70px rgba(0,0,0,.28);
  }

  .gw-buildV{
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
    color:var(--gw-text);
    max-width: 980px;
    margin: 0 auto;
    padding: 18px 14px 14px;
  }

  /* ===== TOP ===== */
  .gw-buildV .gwTop{
    display:grid;
    grid-template-columns: 1.35fr 1fr;
    gap: 14px;
    align-items:start;
    margin-bottom: 12px;
  }

  .gw-buildV .gwTop__kicker{
    display:flex;
    gap:10px;
    align-items:center;
    flex-wrap:wrap;
    margin-bottom: 8px;
  }

  .gw-buildV .gwPill{
    display:inline-flex;
    align-items:center;
    gap:8px;
    padding: 8px 12px;
    border-radius: 999px;
    border: 1px solid rgba(255,176,32,.55);
    background: rgba(255,176,32,.12);
    font-weight: 950;
    box-shadow: 0 0 26px rgba(255,176,32,.16);
  }
  .gw-buildV .gwMini{
    font-weight: 900;
    color: rgba(255,255,255,.70);
  }

  .gw-buildV .gwTop__title{
    margin: 0 0 10px;
    font-size: clamp(1.15rem, 3.2vw, 1.55rem);
    letter-spacing: -0.02em;
    line-height: 1.18;
    text-wrap: balance;
    color: white;
  }
  .gw-buildV .gwTop__muted{
    color: rgba(255,255,255,.65);
    font-weight: 800;
    margin-left: 6px;
    font-size: .92em;
  }

  /* Phase map (visual) */
  .gw-buildV .gwMap{
    display:flex;
    align-items:center;
    gap:10px;
    flex-wrap:wrap;
  }
  .gw-buildV .gwMap__node{
    display:inline-flex;
    align-items:center;
    gap:10px;
    padding: 10px 12px;
    border-radius: 16px;
    border: 1px solid rgba(255,255,255,.12);
    background: rgba(255,255,255,.04);
    color: rgba(255,255,255,.86);
    cursor:pointer;
    font-weight: 950;
    transition: transform .16s ease, border-color .16s ease, background .16s ease, box-shadow .16s ease;
  }
  .gw-buildV .gwMap__node:hover{
    transform: translateY(-1px);
    border-color: rgba(255,176,32,.26);
    background: rgba(255,255,255,.06);
    box-shadow: 0 10px 30px rgba(0,0,0,.22);
  }
  .gw-buildV .gwMap__node.is-active{
    border-color: rgba(255,176,32,.70);
    background: rgba(255,176,32,.14);
    box-shadow: 0 0 26px rgba(255,176,32,.14);
    color: #fff;
  }
  .gw-buildV .gwMap__icon{
    width: 34px;
    height: 34px;
    border-radius: 12px;
    display:grid;
    place-items:center;
    background: rgba(0,0,0,.18);
    border: 1px solid rgba(255,255,255,.10);
  }
  .gw-buildV .gwMap__line{
    width: 26px;
    height: 2px;
    border-radius: 99px;
    background: linear-gradient(90deg, rgba(255,176,32,.62), rgba(255,77,77,.32));
    opacity:.9;
  }

  /* ===== PROGRESS CARD ===== */
  .gw-buildV .gwProgCard{
    display:grid;
    grid-template-columns: 140px 1fr;
    gap: 12px;
    align-items:center;
    padding: 12px;
    border-radius: 18px;
    border: 1px solid var(--gw-stroke);
    background: rgba(255,255,255,.03);
    backdrop-filter: blur(12px);
    box-shadow: var(--gw-shadow);
  }

  .gw-buildV .gwRing{
    position: relative;
    width: 140px;
    height: 140px;
    display:grid;
    place-items:center;
  }
  .gw-buildV .gwRing svg{
    width: 140px;
    height: 140px;
    transform: rotate(-90deg);
  }
  .gw-buildV .gwRing__bg{
    fill: none;
    stroke: rgba(255,255,255,.10);
    stroke-width: 12;
  }
  .gw-buildV .gwRing__fg{
    fill: none;
    stroke: rgba(255,176,32,.95);
    stroke-width: 12;
    stroke-linecap: round;
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    transition: stroke-dashoffset .35s ease;
    filter: drop-shadow(0 0 10px rgba(255,176,32,.22));
  }
  .gw-buildV .gwRing__text{
    position:absolute;
    display:grid;
    place-items:center;
    text-align:center;
    pointer-events:none;
  }
  .gw-buildV .gwRing__pct{
    font-weight: 1100;
    font-size: 1.3rem;
    letter-spacing: -0.02em;
  }
  .gw-buildV .gwRing__small{
    margin-top: 4px;
    color: rgba(255,255,255,.70);
    font-weight: 850;
    font-size: .92rem;
  }

  .gw-buildV .gwProgMeta{ min-width: 0; }
  .gw-buildV .gwNext{
    font-weight: 950;
    color: rgba(255,255,255,.86);
    margin-bottom: 10px;
    line-height: 1.2;
    max-width: 36ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .gw-buildV .gwNextBtn{
    width: 100%;
    position: relative;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:10px;
    padding: 0.95rem 1rem;
    border-radius: 999px;
    border: 2px solid rgba(255,255,255,.22);
    background:
      radial-gradient(120% 120% at 30% 20%, rgba(255,255,255,.26), transparent 55%),
      linear-gradient(90deg, rgba(255,176,32,1), rgba(255,209,102,1));
    color: #0b0404;
    font-weight: 1050;
    cursor:pointer;
    box-shadow: 0 36px 140px rgba(255,176,32,.22);
    transition: transform .18s ease, filter .18s ease, box-shadow .18s ease;
    overflow:hidden;
    -webkit-tap-highlight-color: transparent;
  }
  .gw-buildV .gwNextBtn__spark{
    position:absolute;
    inset:-50% -10%;
    background: radial-gradient(closest-side, rgba(255,255,255,.34), transparent 70%);
    opacity:.70;
    filter: blur(14px);
    transform: translateY(10px);
    pointer-events:none;
  }
  .gw-buildV .gwNextBtn:hover{
    transform: translateY(-2px);
    filter: brightness(1.06);
    box-shadow: 0 55px 190px rgba(255,176,32,.22);
  }

  .gw-buildV .gwTiny{
    margin-top: 8px;
    color: rgba(255,255,255,.62);
    font-weight: 800;
    font-size: .92rem;
  }

  /* ===== BAR ===== */
  .gw-buildV .gwBar{ margin-top: 10px; }
  .gw-buildV .gwBar__track{
    position:relative;
    height: 14px;
    border-radius: 999px;
    background: rgba(255,255,255,.06);
    border: 1px solid rgba(255,255,255,.10);
    overflow:hidden;
    cursor:pointer;
    outline:none;
    transition: box-shadow .18s ease, transform .18s ease, border-color .18s ease;
  }
  .gw-buildV .gwBar__track:hover{
    transform: translateY(-1px);
    border-color: rgba(255,176,32,.30);
    box-shadow: 0 10px 30px rgba(255,176,32,.10);
  }
  .gw-buildV .gwBar__track:focus-visible{ box-shadow: 0 0 0 4px rgba(255,176,32,.18); }
  .gw-buildV .gwBar__fill{
    position:absolute;
    inset:0 auto 0 0;
    width:0%;
    background: linear-gradient(90deg, rgba(255,176,32,.88), rgba(255,209,102,.95), rgba(255,77,77,.55));
    box-shadow: 0 0 18px rgba(255,176,32,.18);
    transition: width .35s ease;
  }
  .gw-buildV .gwBar__shine{
    position:absolute;
    inset:0;
    background: linear-gradient(120deg, transparent, rgba(255,255,255,.14), transparent);
    transform: translateX(-120%);
    animation: gwShine 3.4s ease-in-out infinite;
    pointer-events:none;
  }
  @keyframes gwShine{
    0%{ transform: translateX(-120%); opacity:.0; }
    20%{ opacity:.65; }
    45%{ opacity:.0; }
    100%{ transform: translateX(120%); opacity:.0; }
  }

  /* ===== GUIDE CHIPS ===== */
  .gw-buildV .gwGuide{
    display:flex;
    gap:10px;
    flex-wrap:wrap;
    margin: 12px 0 12px;
  }
  .gw-buildV .gwGuide__chip{
    display:inline-flex;
    gap:8px;
    align-items:center;
    padding: 8px 10px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,.12);
    background: rgba(255,255,255,.04);
    font-weight: 900;
    color: rgba(255,255,255,.78);
  }

  /* ===== PHASE CARDS ===== */
  .gw-buildV .gwCards{ display:grid; gap: 12px; }

  .gw-buildV .gwPhaseCard{
    border-radius: 18px;
    border: 1px solid var(--gw-stroke);
    background: var(--gw-card);
    backdrop-filter: blur(12px);
    box-shadow: var(--gw-shadow);
    padding: 14px;
  }

  .gw-buildV .gwPhaseHead{
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    gap: 10px;
    margin-bottom: 12px;
  }
  .gw-buildV .gwPhaseTag{
    display:inline-flex;
    align-items:center;
    gap:10px;
    padding: 8px 10px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,.12);
    background: rgba(255,255,255,.04);
    font-weight: 1000;
  }
  .gw-buildV .gwPhaseTag__icon{
    width: 30px;
    height: 30px;
    border-radius: 12px;
    display:grid;
    place-items:center;
    background: rgba(0,0,0,.18);
    border: 1px solid rgba(255,255,255,.10);
  }
  .gw-buildV .gwPhaseHint{
    margin-top: 8px;
    color: rgba(255,255,255,.70);
    font-weight: 800;
  }
  .gw-buildV .gwPhaseBadge{
    font-size: 12px;
    font-weight: 1000;
    padding: 7px 10px;
    border-radius: 999px;
    color: rgba(255,255,255,.92);
    border: 1px solid rgba(255,176,32,.35);
    background: rgba(255,176,32,.08);
    white-space:nowrap;
  }

  /* ===== TASKS (Visual, compact) ===== */
  .gw-buildV .gwTaskGrid{
    margin:0;
    padding:0;
    list-style:none;
    display:grid;
    gap: 10px;
  }

  .gw-buildV .gwTask{
    border-radius: 16px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.03);
    overflow:hidden;
    transition: transform .16s ease, border-color .16s ease, background .16s ease, box-shadow .16s ease;
  }
  .gw-buildV .gwTask:hover{
    transform: translateY(-1px);
    border-color: rgba(255,176,32,.22);
    background: rgba(255,255,255,.04);
    box-shadow: 0 12px 40px rgba(0,0,0,.22);
  }

  .gw-buildV .gwTask__row{
    display:flex;
    align-items:center;
    gap: 10px;
    padding: 12px 12px;
    cursor:pointer;
    user-select:none;
  }

  .gw-buildV .gwTask input{
    position:absolute;
    opacity:0;
    pointer-events:none;
  }

  .gw-buildV .gwTask__box{
    width: 22px;
    height: 22px;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,.18);
    background: rgba(0,0,0,.18);
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.06);
    flex: 0 0 auto;
    position: relative;
    transition: border-color .16s ease, background .16s ease, box-shadow .16s ease;
  }

  .gw-buildV .gwTask__main{
    flex: 1 1 auto;
    min-width: 0;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap: 10px;
  }

  .gw-buildV .gwTask__title{
    font-weight: 950;
    color: rgba(255,255,255,.92);
    letter-spacing: -0.01em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .gw-buildV .gwTask__chips{
    display:inline-flex;
    gap:8px;
    align-items:center;
    flex: 0 0 auto;
  }

  .gw-buildV .gwChip{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    padding: 6px 9px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,.12);
    background: rgba(255,255,255,.04);
    color: rgba(255,255,255,.76);
    font-weight: 950;
    font-size: 12px;
    white-space: nowrap;
  }

  .gw-buildV .gwTask__chev{
    flex: 0 0 auto;
    color: rgba(255,255,255,.55);
    font-weight: 1100;
    transform: translateX(0);
    transition: transform .16s ease;
  }
  .gw-buildV .gwTask:hover .gwTask__chev{ transform: translateX(2px); }

  .gw-buildV .gwTask__detail{
    display:none;
    padding: 0 12px 12px;
    color: rgba(255,255,255,.72);
    font-weight: 750;
    line-height: 1.35;
  }
  .gw-buildV .gwTask.is-open .gwTask__detail{ display:block; }

  /* Done state */
  .gw-buildV .gwTask.is-done{
    border-color: rgba(255,176,32,.20);
    background: rgba(255,176,32,.07);
  }
  .gw-buildV .gwTask.is-done .gwTask__title{
    color: rgba(255,255,255,.72);
    text-decoration: line-through;
    text-decoration-thickness: 1px;
    text-decoration-color: rgba(255,255,255,.26);
  }
  .gw-buildV .gwTask.is-done .gwTask__box{
    border-color: rgba(255,176,32,.70);
    background: rgba(255,176,32,.20);
    box-shadow: 0 0 0 3px rgba(255,176,32,.10);
  }
  .gw-buildV .gwTask.is-done .gwTask__box::after{
    content:"";
    position:absolute;
    left:7px; top:4px;
    width:6px; height:10px;
    border: 2px solid rgba(255,255,255,.95);
    border-top:0; border-left:0;
    transform: rotate(45deg);
  }

  /* Notes (collapsed) */
  .gw-buildV .gwNotes{
    margin-top: 12px;
    border-top: 1px solid rgba(255,255,255,.08);
    padding-top: 10px;
  }
  .gw-buildV .gwNotes__sum{
    list-style:none;
    cursor:pointer;
    display:flex;
    align-items:center;
    gap:10px;
    font-weight: 950;
    color: rgba(255,255,255,.82);
    padding: 8px 10px;
    border-radius: 14px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.03);
  }
  .gw-buildV .gwNotes__sum::-webkit-details-marker{ display:none; }
  .gw-buildV .gwNotes__dot{
    width:10px; height:10px; border-radius:999px;
    background: rgba(255,176,32,.92);
    box-shadow: 0 0 18px rgba(255,176,32,.45);
  }
  .gw-buildV .gwNotes__hint{
    margin-left:auto;
    color: rgba(255,255,255,.55);
    font-weight: 850;
    font-size: .92rem;
  }
  .gw-buildV .gwNotes__body{ padding: 10px 2px 2px; }
  .gw-buildV .gwNotes__top{
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:10px;
    margin-bottom: 8px;
  }
  .gw-buildV .gwNotes__label{
    font-weight: 950;
    color: rgba(255,255,255,.72);
  }
  .gw-buildV .gwNotes__clear{
    background: transparent;
    border: 1px solid rgba(255,255,255,.14);
    color: rgba(255,255,255,.70);
    border-radius: 999px;
    padding: 6px 10px;
    cursor:pointer;
    font-weight: 900;
    transition: transform .16s ease, border-color .16s ease, background .16s ease;
  }
  .gw-buildV .gwNotes__clear:hover{
    transform: translateY(-1px);
    border-color: rgba(255,176,32,.30);
    background: rgba(255,255,255,.04);
  }
  .gw-buildV .gwNotes__field{
    width:100%;
    border-radius: 14px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(0,0,0,.18);
    color: rgba(255,255,255,.86);
    padding: 12px;
    resize: vertical;
    line-height: 1.4;
    outline:none;
  }
  .gw-buildV .gwNotes__field:focus{
    border-color: rgba(255,176,32,.45);
    box-shadow: 0 0 0 4px rgba(255,176,32,.12);
  }

  /* Completion */
  .gw-buildV .gwComplete{ margin-top: 12px; position:relative; }
  .gw-buildV .gwComplete__glow{
    position:absolute;
    inset:-10px -10px auto -10px;
    height: 220px;
    border-radius: 18px;
    background:
      radial-gradient(60% 60% at 48% 30%, rgba(255,176,32,.30), transparent 70%),
      radial-gradient(40% 40% at 72% 70%, rgba(255,77,77,.16), transparent 70%);
    filter: blur(10px);
    opacity: .9;
    pointer-events:none;
    animation: gwBreath 2.6s ease-in-out infinite;
  }
  @keyframes gwBreath{
    0%,100%{ transform: translateY(0); opacity:.78; }
    50%{ transform: translateY(-4px); opacity:.95; }
  }
  .gw-buildV .gwComplete__card{
    position:relative;
    z-index: 1;
    border-radius: 18px;
    border: 1px solid rgba(255,176,32,.25);
    background: rgba(255,255,255,.035);
    backdrop-filter: blur(12px);
    box-shadow: var(--gw-shadow);
    padding: 14px;
  }
  .gw-buildV .gwComplete__top{
    display:flex;
    justify-content:space-between;
    gap:10px;
    flex-wrap:wrap;
    align-items:baseline;
    margin-bottom: 12px;
  }
  .gw-buildV .gwComplete__title{
    font-weight: 1100;
    letter-spacing: -0.02em;
    font-size: 1.15rem;
  }
  .gw-buildV .gwComplete__mini{
    color: rgba(255,255,255,.70);
    font-weight: 850;
  }
  .gw-buildV .gwComplete__actions{
    display:flex;
    gap: 10px;
    flex-wrap:wrap;
    align-items:center;
  }
  .gw-buildV .gwBtn{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    padding: 0.90rem 1.1rem;
    border-radius: 999px;
    font-weight: 1000;
    cursor:pointer;
    text-decoration:none;
    border: 1px solid rgba(255,255,255,.14);
    background: rgba(255,255,255,.06);
    color: rgba(255,255,255,.88);
    transition: transform .18s ease, border-color .18s ease, background .18s ease, box-shadow .18s ease;
  }
  .gw-buildV .gwBtn:hover{
    transform: translateY(-2px);
    border-color: rgba(255,176,32,.25);
    background: rgba(255,255,255,.08);
    box-shadow: 0 16px 50px rgba(0,0,0,.22);
  }
  .gw-buildV .gwBtn--primary{
    border-width: 2px;
    border-color: rgba(255,255,255,.22);
    background:
      radial-gradient(120% 120% at 30% 20%, rgba(255,255,255,.22), transparent 55%),
      linear-gradient(90deg, rgba(255,176,32,1), rgba(255,209,102,1));
    color: #0b0404;
    box-shadow: 0 36px 140px rgba(255,176,32,.22);
  }
  .gw-buildV .gwBtn--primary:hover{ box-shadow: 0 55px 190px rgba(255,176,32,.22); }

  .gw-buildV .gwComplete__note{
    margin-top: 10px;
    color: rgba(255,255,255,.62);
    font-weight: 850;
  }

  .gw-buildV .gw-pulse{ animation: gwPulse 1.25s ease-in-out 1; }
  @keyframes gwPulse{
    0%{ box-shadow: 0 0 0 0 rgba(255,176,32,.0); }
    40%{ box-shadow: 0 0 0 6px rgba(255,176,32,.16); }
    100%{ box-shadow: 0 0 0 0 rgba(255,176,32,.0); }
  }

  /* ====== BADGE MODAL (Build) ====== */
  .gw-buildV + .gw-badgeModal{ position: fixed; inset: 0; z-index: 2147483000; display:none; }
  .gw-buildV + .gw-badgeModal.is-open{ display:block; }

  .gw-badgeModal__backdrop{
    position:absolute; inset:0;
    background: rgba(0,0,0,.62);
    backdrop-filter: blur(10px);
  }
  .gw-badgeModal__panel{
    position:absolute;
    left: 50%; top: 50%;
    transform: translate(-50%, -50%);
    width: min(560px, calc(100vw - 28px));
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,.12);
    background: linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.03));
    box-shadow: 0 24px 80px rgba(0,0,0,.55);
    overflow: hidden;
    padding: 18px 18px 16px;
    color: #fff;
    animation: gwModalIn .22s ease-out;
  }
  @keyframes gwModalIn{
    from{ opacity:0; transform: translate(-50%, -46%) scale(.98); }
    to{ opacity:1; transform: translate(-50%, -50%) scale(1); }
  }
  .gw-badgeModal__close{
    position:absolute; right: 12px; top: 12px;
    width: 38px; height: 38px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,.14);
    background: rgba(255,255,255,.06);
    color: rgba(255,255,255,.85);
    cursor:pointer;
    font-weight: 900;
    z-index: 9999999;
  }
  .gw-badgeModal__close:hover{
    border-color: rgba(255,176,32,.30);
    background: rgba(255,255,255,.08);
  }
  .gw-badgeModal__arc{
    position:absolute;
    inset: -60px -40px auto -40px;
    height: 220px;
    background:
      radial-gradient(60% 60% at 50% 35%, rgba(255,176,32,.42), transparent 70%),
      radial-gradient(45% 45% at 70% 70%, rgba(255,77,77,.18), transparent 70%);
    filter: blur(12px);
    opacity: .95;
    pointer-events:none;
  }
  .gw-badgeModal__head{ position:relative; z-index:1; margin-bottom: 12px; text-align:center; }
  .gw-badgeModal__kicker{
    margin: 0 0 6px;
    font-size: 0.78rem;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: rgba(255,255,255,.68);
  }
  .gw-badgeModal__title{
    margin: 0 0 6px;
    font-size: 1.25rem;
    font-weight: 1100;
    letter-spacing: -0.01em;
    color: white;
  }
  .gw-badgeModal__sub{
    margin: 0;
    color: rgba(255,255,255,.74);
    line-height: 1.5;
    font-size: 0.95rem;
  }
  .gw-badgeModal__media{ position:relative; z-index:1; display:flex; justify-content:center; margin: 12px 0 12px; }
  .gw-badgeModal__media img{
    width: min(280px, 72vw);
    height: auto;
    border-radius: 18px;
    box-shadow: 0 18px 60px rgba(255,176,32,.16), 0 10px 28px rgba(0,0,0,.40);
    animation: gwFloat 2.8s ease-in-out infinite;
  }
  @keyframes gwFloat{ 0%,100%{ transform: translateY(0); } 50%{ transform: translateY(-4px); } }

  .gw-badgeModal__actions{
    position:relative; z-index:1;
    display:flex; gap: 10px; flex-wrap:wrap;
    justify-content:center; margin-top: 6px;
  }
  .gw-badgeModal__primary{
    padding: 0.95rem 1.3rem;
    border-radius: 999px;
    border: 1px solid rgba(255,176,32,.70);
    background: rgba(255,176,32,.14);
    color: rgba(255,255,255,.95);
    font-weight: 1100;
    cursor:pointer;
    box-shadow: 0 0 22px rgba(255,176,32,.16);
    transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
  }
  .gw-badgeModal__primary:hover{
    transform: translateY(-2px);
    background: rgba(255,176,32,.20);
    box-shadow: 0 0 32px rgba(255,176,32,.22);
  }
  .gw-badgeModal__secondary{
    padding: 0.95rem 1.3rem;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,.14);
    background: rgba(255,255,255,.06);
    color: rgba(255,255,255,.88);
    font-weight: 1000;
    text-decoration:none;
    transition: transform .18s ease, border-color .18s ease, background .18s ease;
  }
  .gw-badgeModal__secondary:hover{
    transform: translateY(-2px);
    border-color: rgba(255,176,32,.28);
    background: rgba(255,255,255,.08);
  }
  .gw-badgeModal__note{
    position:relative; z-index:1;
    text-align:center;
    margin: 12px 0 0;
    color: rgba(255,255,255,.62);
    font-size: 0.92rem;
    font-weight: 850;
  }

  /* ===== MOBILE ===== */
  @media (max-width: 900px){
    .gw-buildV .gwTop{ grid-template-columns: 1fr; }
    .gw-buildV .gwProgCard{ grid-template-columns: 120px 1fr; }
    .gw-buildV .gwRing{ width:120px; height:120px; }
    .gw-buildV .gwRing svg{ width:120px; height:120px; }
  }
  @media (max-width: 520px){
    .gw-buildV{ padding: 16px 12px 12px; }
    .gw-buildV .gwProgCard{ grid-template-columns: 1fr; text-align:center; }
    .gw-buildV .gwRing{ margin: 0 auto; }
    .gw-buildV .gwNext{ max-width: 100%; }
    .gw-buildV .gwTask__title{ max-width: 18ch; }
    .gw-buildV .gwMap__line{ display:none; }
    .gw-buildV .gwMap{ gap: 8px; }
    .gw-buildV .gwMap__node{ flex: 1 1 auto; justify-content:center; }
  }

  @media (prefers-reduced-motion: reduce){
    .gw-buildV .gwBar__shine,
    .gw-buildV .gwComplete__glow,
    .gw-badgeModal__media img{ animation:none !important; }

    .gw-buildV .gwNextBtn,
    .gw-buildV .gwBtn,
    .gw-buildV .gwMap__node,
    .gw-buildV .gwTask{ transition:none !important; }
  }
