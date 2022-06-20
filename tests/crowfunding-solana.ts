import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { CrowfundingSolana } from "../target/types/crowfunding_solana";

describe("crowfunding-solana", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.CrowfundingSolana as Program<CrowfundingSolana>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
