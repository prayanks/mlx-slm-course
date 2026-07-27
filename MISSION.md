# Mission: Fine-tune an open model on MLX to classify Indian transaction text

## Why
You want a **local Mac workflow** that takes messy bank/card transaction lines (SMS, statements) and assigns **stable tax-relevant labels** (shopping, interest, dividends, …). The technique is **supervised fine-tuning** (usually LoRA) with Apple’s **MLX / mlx-lm** stack — not pretraining a model from scratch, and not “build an SLM” as a separate magic category.

## Success looks like
- Explain fine-tuning vs pretraining vs prompting in plain language
- Define a closed label schema for personal books / ITR-prep style categories
- Build a JSONL demo dataset: transaction text → label
- Run inference and **LoRA fine-tunes** with `mlx-lm` on an M2 Pro (32 GB)
- Measure the result like a classifier (accuracy, F1, confusion) on held-out lines
- Know when a generative fine-tune is overkill vs rules or a classical classifier

## Constraints
- **Hardware (locked):** Apple **M2 Pro, 32 GB** unified memory, macOS ≥ 14, native Python ≥ 3.10
- Prefer **small open instruct bases** (~0.5B–3B, often 4-bit) + **LoRA/QLoRA**
- Course is **self-contained** — teach SFT/LoRA/data/eval here; no other course required
- Tax labels are a **learning project**, not legal advice or a production filing product
- Public GitHub + Pages; never commit unredacted account numbers or full statements
- Honest naming: this is a **fine-tuning course** with a classification project

## Out of scope
- Pretraining transformers from random weights
- Claiming we are “building an SLM” as something other than fine-tuning a small open model
- CUDA multi-GPU production training
- Full ITR software / CA-grade tax opinion
- RL / preference optimization (later, if ever)
