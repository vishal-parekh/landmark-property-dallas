import salePendingImg from "/public/assets/salePendingImg.png";
import Image from "next/image";
import React from "react";

export const About = () => {
  return (
    <div id="about" className="w-full py-20">
      <div className="max-w-[1240px] px-2 w-full m-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="px-6">
            <p className="uppercase text-xl tracking-widest text-[#118c4f]">
              About Landmark Property Group
            </p>
            <h2 className="py-4">We can:</h2>
            <ul>
              <ol className="list-disc list-inside">
                <li className="text-xl">Buy your home for a fair price</li>
                <li className="text-xl">Help you with a forclosure</li>
                <li className="text-xl">Help pay your down payment</li>
              </ol>
            </ul>
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image src={salePendingImg} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};
