# Teaching notes

- **Course identity:** Fine-tune on MLX to classify Indian transaction text into labels. Not an “SLM course.” Small open models are *bases we fine-tune*, not the product name.
- Mission mode: ship understanding + a working LoRA path for txn→label; labels are the project, fine-tuning is the skill.
- **Fully independent.** Teach supervised fine-tuning, demos, loss, eval from first principles.
- Hardware locked: **M2 Pro, 32 GB.** Default bases: ~0.5B–3B instruct (4-bit). 7B QLoRA later if needed.
- MLX runs on the Mac only. Course files may be edited on a Linux VPS.
- Prefer crisp high-signal material; short lessons; one tangible win.
- Visual system: **Apple marketing-inspired** — system SF fonts, `#f5f5f7` / black, Apple Blue `#0071e3` only, glass topnav, pill CTAs. `assets/lesson.css`.
- Path: **generative fine-tune** (chat/completion → label string) first; later optional encoder/rules comparison.
- Do **not** present course tax labels as legal advice.
- **Git:** public repo currently `prayanks/mlx-slm-course` (rebrand content pushed); **rename to `mlx-txn-finetune` pending** GitHub API approval. Local path: `~/mlx-txn-finetune`. After rename: Pages `https://prayanks.github.io/mlx-txn-finetune/`. Until then Pages stays at `https://prayanks.github.io/mlx-slm-course/`.
- Brand strings in HTML: “Txn fine-tune” / “MLX fine-tune” — never “SLM Course” as the title.
