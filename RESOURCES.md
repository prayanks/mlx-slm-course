# Fine-tune on MLX: transaction labels — Resources

## Knowledge

### MLX & fine-tuning tooling

- [MLX documentation](https://ml-explore.github.io/mlx/)
  Array framework for Apple silicon. Use for: install constraints (Apple silicon, macOS ≥ 14, native Python ≥ 3.10).

- [MLX LM (GitHub)](https://github.com/ml-explore/mlx-lm)
  Generate and **fine-tune** language models on Apple silicon. Use for: `pip install mlx-lm`, `mlx_lm.generate`, `mlx_lm.lora`, `mlx_lm.fuse`, `mlx_lm.convert`.

- [MLX LM: Fine-Tuning with LoRA or QLoRA](https://github.com/ml-explore/mlx-lm/blob/main/mlx_lm/LORA.md)
  Official guide: data formats (`chat`, `completions`, `text`), `train.jsonl` / `valid.jsonl` / `test.jsonl`, `--mask-prompt`, memory tips, fuse. **Primary source for every fine-tune lesson.**

- [WWDC25: Explore large language models on Apple silicon with MLX](https://developer.apple.com/videos/play/wwdc2025/298/)
  Inference, quantization, LoRA fine-tune, fuse. Use for: conceptual walkthrough.

- [Hugging Face MLX Community](https://huggingface.co/mlx-community)
  Pre-converted / quantized weights. Use for: small instruct bases (0.5B–3B 4-bit) to fine-tune.

### Fine-tuning theory

- [LoRA paper (Hu et al., 2021)](https://arxiv.org/abs/2106.09685)
  Low-rank adapters. Use for: why LoRA fits Mac RAM.

- [QLoRA paper](https://arxiv.org/abs/2305.14314)
  4-bit base + LoRA. Use when: quantized MLX models + adapters.

- [InstructGPT (Ouyang et al., 2022)](https://arxiv.org/abs/2203.02155)
  Demonstration SFT as stage 1. Use for: fine-tuning as imitating labeled outputs.

- [Hugging Face LLM Course — Supervised Fine-Tuning](https://huggingface.co/learn/llm-course/en/chapter11/1)
  Optional background on SFT hygiene. **Implementation in this course is mlx-lm on Mac**, not TRL.

### Classification & evaluation

- [scikit-learn: Classification metrics](https://scikit-learn.org/stable/modules/model_evaluation.html#classification-metrics)
  Precision, recall, F1, confusion matrix. Use for: evaluating label predictions after fine-tune.

### Indian tax / transaction context (project domain only)

- [Income Tax India: Reporting of high-value transactions](https://www.incometaxindia.gov.in/w/reporting-of-high-value-transactions)
  Official reporting categories — **not** our expense/income label schema; domain grounding only.

- Personal bank SMS / statement samples (your own, redacted)
  Realistic noisy text. Never commit real account numbers to the public repo.

## Wisdom (Communities)

- [r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/)
  Mac LoRA tips; verify against mlx-lm docs.

- [MLX LM issues](https://github.com/ml-explore/mlx-lm/issues)
  Breakage, data-format quirks.

- [Hugging Face Forums](https://discuss.huggingface.co/)
  Chat templates, dataset formatting.

## Gaps

- No canonical open dataset of Indian bank SMS → tax labels — synthesize + redacted personal samples.
- Personal ITR expense taxonomy varies — lock an explicit course schema and stick to it.

## Lab hardware (locked)

- Apple **M2 Pro · 32 GB**. Default fine-tune bases: 0.5B–3B instruct (4-bit friendly).
