# MLX SLM Course

Self-contained course: **small language models on Apple silicon with MLX**, using Indian transaction text → tax-relevant labels as the project.

## Lab hardware

- **Apple M2 Pro · 32 GB** unified memory
- macOS ≥ 14, native Python ≥ 3.10
- Stack: [MLX](https://ml-explore.github.io/mlx/) + [`mlx-lm`](https://github.com/ml-explore/mlx-lm)

## Open the course

Open `index.html` in a browser (or serve the repo root with any static file server).

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

- **Private repo** by default.
- Never commit real account numbers, full unredacted statements, or tax filings.
- Sample/transaction data used in labs must be synthetic or scrubbed.

## Workflow (for the teacher agent)

After generating or updating a lesson/reference in a session: commit and push to `main`.
