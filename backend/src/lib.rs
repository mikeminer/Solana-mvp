use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    pubkey::Pubkey,
};

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct MintNftInstruction {
    pub uri: String,
}

entrypoint!(process_instruction);

pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    let instruction = MintNftInstruction::try_from_slice(instruction_data)
        .map_err(|_| solana_program::program_error::ProgramError::InvalidInstructionData)?;

    msg!("Minting NFT with URI: {}", instruction.uri);

    // Implement minting logic here

    Ok(())
}
