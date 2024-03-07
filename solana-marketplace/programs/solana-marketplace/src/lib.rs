use anchor_lang::prelude::*;

pub mod bid;
pub mod mint;
pub mod sell;

use bid::*;
use mint::*;
use sell::*;

declare_id!("HBFZLcLGTSoJoS9FFZSqn3PiVokWDA3n4h7MZyogWcKf");

#[program]
pub mod solana_marketplace {
    use super::*;

    pub fn mint(
        ctx: Context<Mint>,
        metadata_title: String,
        metadata_symbol: String,
        metadata_url: String,
    ) -> Result<()> {
        mint::mint(
            ctx,
            metadata_title,
            metadata_symbol,
            metadata_url
        )
    }

    pub fn bid(
        ctx: Context<Bid>,
        bid_lamports: u64,
    ) -> Result<()> {
        bid::bid(
            ctx,
            bid_lamports
        )
    }

    pub fn sell(
        ctx: Context<Sell>,
        sale_lamports: u64
    ) -> Result<()> {
        sell::sell(
            ctx,
            sale_lamports
        )
    }
}