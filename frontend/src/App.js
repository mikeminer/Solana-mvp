import React, { useState } from 'react';
import { Connection, PublicKey, Transaction, clusterApiUrl } from '@solana/web3.js';
import { WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';

const wallets = [
    new PhantomWalletAdapter(),
];

const App = () => {
    const [minted, setMinted] = useState(false);
    const [uri, setUri] = useState('');

    const mintNft = async () => {
        // Connect to Solana
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
        const wallet = wallets[0];

        // Create transaction
        const transaction = new Transaction().add(
            // Instruction to mint NFT
        );

        // Send transaction
        const signature = await wallet.sendTransaction(transaction, connection);
        await connection.confirmTransaction(signature, 'processed');

        setMinted(true);
    };

    return (
        <ConnectionProvider endpoint={clusterApiUrl('devnet')}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <div>
                        <h1>Mint your NFT</h1>
                        <input
                            type="text"
                            placeholder="Enter URI"
                            value={uri}
                            onChange={(e) => setUri(e.target.value)}
                        />
                        <button onClick={mintNft}>Mint NFT</button>
                        <WalletMultiButton />
                        {minted && <p>NFT Minted Successfully!</p>}
                    </div>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default App;
