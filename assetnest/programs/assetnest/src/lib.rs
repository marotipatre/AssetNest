use anchor_lang::prelude::*;

declare_id!("CQazXyCtxKTQrm85Z9c2FJjRYEVJmzhwwNNToRsBYKCZ");

#[program]
pub mod assetnest {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
