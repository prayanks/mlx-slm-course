# Hardware locked: M2 Pro, 32 GB unified memory

User confirmed target machine is Apple **M2 Pro with 32 GB** RAM. Use this for model-size guidance: comfortable default is 0.5B–3B instruct (4-bit) for generate + LoRA labs; 7B QLoRA is optional later with memory knobs (batch size 1, fewer LoRA layers, grad checkpoint). Do not re-ask chip/RAM each session unless user changes machines.
