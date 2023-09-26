import processImg from "/public/assets/processImg.jpg";
import relocationImg from "/public/assets/relocationImg.jpg";
import trustImg from "/public/assets/trustImg.jpg";
import Image from "next/image";
import React from "react";

export const OurServices = () => {
  return (
    <div id="our-services" className="w-full py-20">
      <div className="max-w-[1240px] mx-auto w-full">
        <div className="px-6">
          <p className="text-xl tracking-widest uppercase text-[#118c4f]">
            Our Services
          </p>
          <h2 className="pt-4 pb-14">Why Sell To Us</h2>
          <div className="grid md:grid-cols-3 gap-8 align-items:center">
            <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
              <div className="grid gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={processImg} alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-center">FAST & EASY PROCESS</h3>
                  <p className="text-center pt-4">
                    After accepting our no-obligation cash offer, we can close
                    in as little as 5 days. No hidden fees. No repairs
                    necessary.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-1 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={relocationImg} alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-center">TEMPORARY RELOCATION</h3>
                  <p className="text-center pt-4">
                    We can provide you temporary housing after you sell your
                    home to help you readjust.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-1 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={trustImg} alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-center">EXPERIENCE & TRUST</h3>
                  <p className="text-center pt-4">
                    We will answer your questions, inspect the condition of your
                    house, and give you a fast cash offer that you can trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
