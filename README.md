# MLX SLM Course

Self-contained course: **small language models on Apple silicon with MLX**, using Indian transaction text → tax-relevant labels as the project.

## Lab hardware

- **Apple M2 Pro · 32 GB** unified memory
- macOS ≥ 14, native Python ≥ 3.10
- Stack: [MLX](https://ml-explore.github.io/mlx/) + [`mlx-lm`](https://github.com/ml-explore/mlx-lm)

## Open the course

- **GitHub Pages:** https://prayanks.github.io/mlx-slm-course/
- Lesson 0001: https://prayanks.github.io/mlx-slm-course/lessons/0001-the-map-slm-mlx-tax-labels.html
- Or open `index.html` locally

| Path | What |
|------|------|
| `lessons/` | Numbered HTML lessons |
| `reference/` | Print-friendly cheat sheets |
| `MISSION.md` | Why we're learning this |
| `RESOURCES.md` | Curated sources |
| `progress.md` | Lesson map |
| `learning-records/` | Decision-grade notes |

## Independence

This course teaches supervised fine-tuning, LoRA, data format, and eval **from first principles**. It does not depend on any other course.

## Privacy

- Repo is **public** (required for free-plan GitHub Pages).
- Never commit real account numbers, full unredacted statements, or tax filings.
- Sample/transaction data used in labs must be synthetic or scrubbed.

## Workflow (for the teacher agent)

After generating or updating a lesson/reference in a session: commit and push to `main`. Pages rebuilds from `main` root.
