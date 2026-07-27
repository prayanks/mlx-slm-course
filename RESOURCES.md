# MLX SLM + Transaction Classification Resources

## Knowledge

### MLX & MLX LM (primary stack)

- [MLX documentation](https://ml-explore.github.io/mlx/)
  Apple’s array framework for Apple silicon (unified memory, NumPy-like API). Use for: what MLX is and install constraints (Apple silicon, macOS ≥ 14, native Python ≥ 3.10).

- [MLX LM (GitHub)](https://github.com/ml-explore/mlx-lm)
  Generate text and fine-tune LLMs on Apple silicon. Use for: install (`pip install mlx-lm`), CLI (`mlx_lm.generate`, `mlx_lm.lora`, `mlx_lm.fuse`, `mlx_lm.convert`), Python `load` / `generate`.

- [MLX LM: Fine-Tuning with LoRA or QLoRA](https://github.com/ml-explore/mlx-lm/blob/main/mlx_lm/LORA.md)
  Official LoRA/QLoRA guide: data formats (`chat`, `completions`, `text`, `tools`), `train.jsonl` / `valid.jsonl` / `test.jsonl`, `--mask-prompt`, memory tips, fuse. **Primary source for every fine-tune lesson.**

- [WWDC25: Explore large language models on Apple silicon with MLX](https://developer.apple.com/videos/play/wwdc2025/298/)
  Apple session on MLX LM: inference, quantization, LoRA, fuse, Swift. Use for: conceptual walkthrough and canonical CLI examples.

- [Hugging Face MLX Community](https://huggingface.co/mlx-community)
  Pre-converted / quantized weights ready for MLX. Use for: picking small instruct bases (e.g. 0.5B–3B 4-bit).

### SFT & LoRA theory (shared with broader LLM craft)

- [LoRA paper (Hu et al., 2021)](https://arxiv.org/abs/2106.09685)
  Low-rank adapters: freeze base, train small matrices. Use for: why LoRA fits Mac RAM.

- [QLoRA paper](https://arxiv.org/abs/2305.14314)
  4-bit base + LoRA. Use when: quantized MLX models + adapters.

- [InstructGPT (Ouyang et al., 2022)](https://arxiv.org/abs/2203.02155)
  Demonstration SFT as stage 1. Use for: classification-as-imitation framing.

- [Hugging Face LLM Course — Supervised Fine-Tuning](https://huggingface.co/learn/llm-course/en/chapter11/1)
  Readable background on chat templates, SFT hygiene, when to fine-tune. Use for: optional concept cross-check. **This course implements everything with mlx-lm on Mac**, not Hugging Face TRL.

### Classification & evaluation

- [scikit-learn: Classification metrics](https://scikit-learn.org/stable/modules/model_evaluation.html#classification-metrics)
  Precision, recall, F1, confusion matrix. Use for: holding generative SLMs to real classifier metrics.

### Indian tax / transaction context (project domain only)

- [Income Tax India: Reporting of high-value transactions (SFT under §285BA)](https://www.incometaxindia.gov.in/w/reporting-of-high-value-transactions)
  Official table of reportable transaction types and thresholds. Use for: awareness of *reporting* categories — **not** the same as our expense/income label schema, but good domain grounding.

- Personal bank SMS / statement samples (your own, redacted)
  Use for: realistic noisy text (UPI, NEFT, merchant names). Never commit real account numbers or full statements to a public repo.

## Wisdom (Communities)

- [r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/)
  Practitioner tips on Mac LoRA, small models, data gotchas. Verify against mlx-lm docs.

- [MLX GitHub issues / discussions](https://github.com/ml-explore/mlx-lm/issues)
  Source of truth for breakage, version quirks, data-format bugs.

- [Hugging Face Forums](https://discuss.huggingface.co/)
  Model cards, chat templates, dataset formatting.

## Gaps

- Canonical open dataset of *Indian bank SMS → tax labels* — we will synthesize + redacted personal samples.
- Official “correct” personal ITR expense taxonomy varies by use case (books vs CA product) — we will define an explicit course schema and stick to it.

## Lab hardware (locked)

- Apple **M2 Pro · 32 GB** unified memory. Default model band: 0.5B–3B instruct (4-bit friendly).
