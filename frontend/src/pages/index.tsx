import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>ComSol - Solana Entrance to Commune AI</title>
        <meta
          name="description"
          content="Solana Entrance to Commune AI"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
