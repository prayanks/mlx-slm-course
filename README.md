# Fine-tune on MLX: transaction labels

Self-contained course: **supervised fine-tuning** (LoRA) of open models on Apple silicon with **MLX**, so transaction text maps to **tax-relevant labels**.

> Not an “SLM course.” We fine-tune small open instruct bases. The skill is fine-tuning; the project is classification.

## Lab hardware

- **Apple M2 Pro · 32 GB** unified memory
- macOS ≥ 14, native Python ≥ 3.10
- Stack: [MLX](https://ml-explore.github.io/mlx/) + [`mlx-lm`](https://github.com/ml-explore/mlx-lm)

## Open the course

- **GitHub Pages:** https://prayanks.github.io/mlx-txn-finetune/
- Lesson 0001: https://prayanks.github.io/mlx-txn-finetune/lessons/0001-what-is-finetuning-for-txn-labels.html
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

This course teaches fine-tuning, LoRA, data format, and classifier-style eval **from first principles**.

## Privacy

- Repo is **public** (GitHub Pages).
- Never commit real account numbers, full unredacted statements, or tax filings.
- Lab data must be synthetic or scrubbed.

## Workflow (for the teacher agent)

After generating or updating a lesson/reference: commit and push to `main`. Pages rebuilds from `main` root.
