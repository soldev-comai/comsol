import type { NextPage } from "next";
import Head from "next/head";
import { BasicsView } from "../views";

const Basics: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>ComSol - Solana Entrance to Commune AI</title>
        <meta
          name="description"
          content="Solana Entrance to Commune AI"
        />
      </Head>
      <BasicsView />
    </div>
  );
};

export default Basics;
