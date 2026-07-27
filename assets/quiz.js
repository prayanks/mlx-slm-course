/**
 * Minimal quiz widget.
 * Markup:
 * <div class="quiz" data-correct="1" data-explain="...">
 *   <div class="quiz-q">Question</div>
 *   <div class="quiz-options">
 *     <button type="button" data-i="0">A</button>
 *     ...
 *   </div>
 *   <div class="quiz-feedback" hidden></div>
 * </div>
 *
 * All option labels should be similar length (no answer leakage).
 */
(function () {
  function initQuiz(root) {
    if (root.dataset.ready) return;
    root.dataset.ready = "1";
    const correct = Number(root.dataset.correct);
    const explain = root.dataset.explain || "";
    const feedback = root.querySelector(".quiz-feedback");
    const buttons = [...root.querySelectorAll(".quiz-options button")];

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const i = Number(btn.dataset.i);
        buttons.forEach((b) => {
          b.disabled = true;
          const bi = Number(b.dataset.i);
          if (bi === correct) b.classList.add("correct");
          else if (bi === i) b.classList.add("wrong");
        });
        if (feedback) {
          feedback.hidden = false;
          if (i === correct) {
            feedback.className = "quiz-feedback ok";
            feedback.textContent = "Correct. " + explain;
          } else {
            feedback.className = "quiz-feedback no";
            feedback.textContent = "Not quite. " + explain;
          }
        }
      });
    });
  }

  function boot() {
    document.querySelectorAll(".quiz").forEach(initQuiz);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
