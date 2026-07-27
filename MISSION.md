# Mission: Build SLMs on MLX (tax transaction classifier as the project)

## Why
You want deep, builder-level fluency with **small language models on Apple Silicon via MLX** — not only how to call an API, but how adapters, data, and evaluation turn a tiny open model into a specialist. Indian bank/card **transaction text → tax-relevant labels** (shopping, interest, dividends, …) is the concrete project that forces every skill: taxonomy, messy real text, supervised fine-tuning data, LoRA, metrics, and Mac-local iteration.

## Success looks like
- Explain what an SLM is, where MLX sits, and why fine-tuning beats pretraining-from-scratch for this task
- Explain supervised fine-tuning (SFT) as imitation of labeled demos — taught inside this course, no external course assumed
- Run inference and LoRA fine-tunes with `mlx-lm` on a Mac (Apple silicon)
- Design a label schema and JSONL chat/completion dataset for transaction classification
- Train a small model (or adapter) that emits stable labels and measure it honestly
- Know when a generative SLM is overkill vs a classical classifier / rules — and still have shipped the SLM path for learning

## Constraints
- **Hardware (locked):** Apple **M2 Pro, 32 GB** unified memory, macOS ≥ 14, native Python ≥ 3.10. Labs target this machine. Prefer ~0.5B–3B instruct models (4-bit OK); 7B QLoRA is optional later, not lesson 1.
- **Self-contained:** this course does not depend on any other course. Introduce SFT, LoRA, chat templates, and eval from first principles when needed.
- Prefer **LoRA/QLoRA**, not full pretraining
- Hands-on, short lessons; crisp high-signal editorial style
- Tax labels are a **learning project**, not legal/tax advice or a production filing product
- Course HTML + code live in a **private GitHub repo**; commit after each lesson lands

## Out of scope
- Training a transformer from random weights on web-scale data
- CUDA / multi-GPU cloud training stacks (except comparison notes)
- Full ITR software, AIS reconciliation products, or CA-grade tax opinion
- RL / preference optimization (later, if needed)
