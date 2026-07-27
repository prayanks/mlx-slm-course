# Teaching notes

- Mission mode: **learn SLMs + MLX deeply**; Indian tax transaction labels are the **project vehicle**, not the end product.
- **Fully independent course.** Do not assume any other course (including any SFT course). Teach supervised fine-tuning, demos, loss, and eval here when the lesson needs them.
- Hardware locked: **M2 Pro, 32 GB unified memory.** Default lab models: small instruct SLMs (~0.5B–3B, often 4-bit from mlx-community). 7B QLoRA is feasible later with batch size 1 / fewer layers — not the first lab.
- MLX runs on the Mac only. Course files may be edited on a Linux VPS; never claim MLX trains on the VPS.
- Prefer crisp high-signal material; short lessons; one tangible win.
- Visual system: Source Serif 4 + Source Sans 3 + IBM Plex Mono, burnt-umber accent, light+dark via prefers-color-scheme. Shared CSS in `assets/lesson.css`.
- Path choice for classification: start with **generative SLM + LoRA** (chat/completion → label string) for learning MLX LM; later optional encoder/classifier comparison so user knows when SLM is overkill.
- Do **not** present course tax labels as legal advice.
- First lesson priority: map (pretrain vs fine-tune vs classify-as-generation) before install or train.
- **Git workflow:** private repo https://github.com/prayanks/mlx-slm-course — after generating or materially updating a lesson/reference, commit and push to `main` in the same turn. Remote is HTTPS without embedded token (`git remote -v` should stay clean).
