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



### MigrateNSM.sol
  - The solidity smart contract deployed to facilitate the migration.
  
  
