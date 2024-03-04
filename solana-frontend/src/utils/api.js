import { Connection, Keypair, SYSVAR_RENT_PUBKEY } from "@solana/web3.js";
import { Program, Provider, web3 } from "@project-serum/anchor";
import * as anchor from "@project-serum/anchor";
import { programAddress, connectionsOptions, programAccount } from "./config";
import pkg from "bs58";
const { decode } = pkg;

const getConnectionProvider = async (wallet, network) => {
    const connection = new Connection(
        network,
        connectionsOptions.preflightCommitment
    );

    const provider = new Provider(
        connection,
        wallet,
        connectionsOptions.preflightCommitment
    );
    return provider;
}

const getProgram = async (wallet, network) => {
    const provider = await getConnectionProvider(wallet, network);
    const idl = await Program.fetchIdl(programAddress, provider);
    return new Program(idl, programAddress, provider);
}

const getData = async (wallet, network) => {
    const program = await getProgram(wallet, network);
    
    const data = await program.account
}

const createToken = async (wallet, network) => {
    const program = await getProgram(wallet, network);
    const tokenAccountKeypair = web3.Keypair.generate();
    const tokenAssociated = web3.Keypair.generate();
    const SECRET_KEY = new Uint8Array([9,97,188,0,113,132,197,19,156,138,175,60,58,127,44,190,83,23,227,16,54,44,137,148,152,27,17,32,178,246,212,87,148,124,129,186,79,97,243,65,201,227,133,21,241,39,243,48,80,223,171,1,129,13,162,183,48,9,176,247,107,91,110,62]);
    const signer = web3.Keypair.fromSecretKey(SECRET_KEY);

    const key = "3wRWfS3eGR7zPYGKKiPfYeV47BY6k51zkyEekYgPGyU2zzn7uJUGEmcgZPaqY2S9iob1G3DPbhQALBD3HzWUMKPe";
    const walletAccount = web3.Keypair.fromSecretKey(decode(key));

    const ctx = {
        mintToken: programAddress,
        signer: wallet.publicKey,
        tokenAccount: web3.BPF_LOADER_DEPRECATED_PROGRAM_ID,
        systemProgram: web3.SystemProgram.programId,
        tokenProgram: programAddress,
        associateTokenProgram: tokenAssociated.publicKey,
        rent: SYSVAR_RENT_PUBKEY
    };

    // const tx = await program.methods.createToken(new anchor.BN(9), new anchor.BN(100))
    //     .accounts(ctx)
    //     .signers([walletAccount])
    //     .rpc();
    const tx = await program.rpc.createToken(new anchor.BN(9), new anchor.BN(100), {
        accounts: ctx,
        signers: [signer, walletAccount]
    });

    console.log(tx);
    
}

export {
    createToken
}