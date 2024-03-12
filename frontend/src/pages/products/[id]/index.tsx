import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Products: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>ComSol - Solana Entrance to Commune AI</title>
        <meta
          name="description"
          content="Solana Entrance to Commune AI"
        />
      </Head>
      
      <div>
        {id}
      </div>
    </div>
  );
};

export default Products;
