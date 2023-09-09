import SalePendingImg from "/public/assets/salePending.png";
import Image from "next/image";
import React from "react";

export const About = () => {
  return (
    <div id="about" className="w-full  m-auto">
      <div className="max-w-[1240px] px-2 pt-40 w-full m-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="pl-12 p-4">
            <p className="uppercase text-xl tracking-widest text-[#5651e5]">
              About Landmark Property Group
            </p>
            <h2 className="py-4">We can:</h2>
            <ul>
              <ol className="list-disc list-inside">
                <li>Buy your home for a fair price</li>
                <li>Help you with a forclosure</li>
                <li>Help pay your down payment</li>
              </ol>
            </ul>
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image src={SalePendingImg} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};
