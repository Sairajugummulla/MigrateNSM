# MigrateNSM


### notMigration.mjs
  - Script to obtain and verify the snapshot data.
  - The value of each holders NSM wallet in BNB was obtained by simulating a trade on each wallet with the pancakeswap router.
  - The amount recorded as 'amountOutBNB' is the exact value the pancakeSwap router gave when simulating the trade under the following conditions:
    - Holder is excluded from paying the 8% NSM transaction fee.
    - 0% slippage.
    - 0 gas cost on transaction.
    - Sold 100% of their tokens on the snapshot block.
    - Holder's transaction was the blocks only NSM transaction
  - The list was spot checked to ensure accuracy.

 ### NOTICE: Migration Selling Restrictions
    All NotSafeMoon migration participants and all private presale participants
    are subject to selling restrictions for the first 10 days after the token launch.
    All tokens may be claimed immediately so all holders will be able to collect their
    full share of their reward payments but selling is limited to 10% of your total
    claimed Flavors Tokens per day.
    Example:
      - If you claimed 1,000,000 tokens from the migration or private presale, 
        you may sell up to 100,000 of those tokens at any point during the
        first 24 hours after the pancakeswap launch.
      - Each 24 hours that passes adds another 100,000 tokens to to total sellable allowance
    Example:
      - If you claimed 1,000,000 flavors tokens and decided to sell on day 7, you may 
        sell up to 700,000 tokens at that time.
        
    After 10 days all selling restrictioins are removed from all accounts.



### MigrateNSM.sol
  - The solidity smart contract deployed to facilitate the migration.
  
  
