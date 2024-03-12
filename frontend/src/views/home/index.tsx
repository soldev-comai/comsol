// Next, React
import { FC, useEffect, useState } from "react";
import Link from "next/link";

// Wallet
import { useWallet, useConnection } from "@solana/wallet-adapter-react";

// Store
import useUserSOLBalanceStore from "../../stores/useUserSOLBalanceStore";
import { Banner } from "./banner";
import ProductCard from "components/ProductCard";
import { products } from "utils/dummy-data";

export const HomeView: FC = ({}) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance);
  const { getUserSOLBalance } = useUserSOLBalanceStore();

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58());
      getUserSOLBalance(wallet.publicKey, connection);
    }
  }, [wallet.publicKey, connection, getUserSOLBalance]);

  return (
    <div className="w-full">
      <div className="md:hero mx-auto p-4 mt-16 md:mt-auto flex justify-center items-center">
        <Banner />
      </div>
      
      <div className="py-12 px-4">
        <ul className="flex flex-col justify-center items-center gap-x-6">
          <li>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {
                products.map((product) => {
                  return (
                    <ProductCard key={product.id} className="h-full" {...product} />
                  )
                })
              }
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
