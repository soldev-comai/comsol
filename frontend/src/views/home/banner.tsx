import { FC } from "react";

export const Banner: FC = ({}) => {
    return (
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mb-4">
          ComSol Marketplace
        </h1>
        <h4 className="md:w-full text-2x1 md:text-4xl text-center text-slate-300 my-2">
          <p>All-In-One marketpace on Solana</p>
          <p className="text-slate-500 text-2x1 leading-relaxed">
            Built for everyone, Owned by nobody
          </p>
        </h4>
        <div className="flex flex-col mt-2">
          <div className="flex flex-row justify-center">
            <div className="relative group items-center">
              <div className="m-1 absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500 blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt rounded-full"/>
              
              <button className="text-white hover:text-black px-8 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 rounded-full">
                <span> Explore </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
};
