
### Script di Deploy (`deploy.sh`)

Ecco un esempio di script di deploy per automatizzare la distribuzione del programma Solana:

```bash
#!/bin/bash

# Compila il programma
echo "Compiling the Solana program..."
cargo build-bpf --manifest-path=backend/Cargo.toml --bpf-out-dir=backend/target/deploy

# Distribuisci il programma
echo "Deploying the Solana program..."
solana program deploy backend/target/deploy/solana_nft_minting.so

echo "Deployment complete."
