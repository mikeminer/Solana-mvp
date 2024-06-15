# Solana NFT Project

## Descrizione

Questo progetto è un Minimum Viable Product (MVP) per il minting di NFT su Solana. Gli utenti possono collegarsi con il wallet, fare il minting di un NFT e collegare ad esso un contenuto multimediale. Chi acquista l'NFT può accedere ai contenuti multimediali protetti.

## Struttura del Progetto

- `backend/`: Contiene il programma Rust per Solana.
- `frontend/`: Contiene l'applicazione React per l'interfaccia utente.
- `scripts/`: Contiene script per il deployment e altre operazioni.
- `README.md`: Documentazione del progetto.
- `LICENSE`: Licenza del progetto.

## Prerequisiti

- Rust
- Solana CLI
- Node.js
- Yarn o npm

## Istruzioni per l'Installazione

### Backend

1. Installa le dipendenze di Rust.
   ```sh
   cd backend
   cargo build-bpf
