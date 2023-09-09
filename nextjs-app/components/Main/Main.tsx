import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

if (typeof window !== "undefined") {
  injectStyle();
}

interface FormValues {
  senderName: string;
  senderPhoneNumber: number;
  senderEmail: string;
  senderHomeAddress: string;
}

export const Main = () => {
  const [values, setValues] = useState<FormValues>();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values!, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({
          senderName: values?.senderName,
          senderPhoneNumber: values?.senderPhoneNumber,
          senderEmail: values?.senderEmail,
          senderHomeAddress: values?.senderHomeAddress,
        }),
      });
      toast.success("Submission successful!");
    } catch (error) {}
  };
  return (
    <div id="contact" className="w-full  m-auto">
      <div className="max-w-[1240px] px-2 pt-40 w-full m-auto">
        <div className="grid md:grid-cols-10 gap-12">
          {/* left */}
          <div className="flex items-center md:col-span-5">
            <div className="white-space:nowrap">
              <p className="uppercase text-sm tracking-widest text-gray-600">
                We buy houses fast, easy, and hassle-free.
              </p>
              <h1 className="text-gray-700">
                No Hassles.
                <span>
                  <br />
                  No Obligations.
                </span>
                <span className="text-[#118c4f]">
                  <br />
                  Fair Offer Guarantee.
                </span>
              </h1>
              <p className="py-4 text-gray-600 sm:max-w-[70%]">
                Sell us your house! No matter what type of home you have; house,
                condo, or duplex. Landmark Property would like to make a
                no-obligation, cash offer to purchase your house “as is.”
              </p>
            </div>
          </div>
          {/* right */}
          <div className="md:col-span-4 shadow-xl shadow-gray-400 lg:p-4">
            <div className="p-4">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="flex flex-col">
                  <ToastContainer />
                  <label className="uppercase text-sm py-2">Name</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    id="senderName"
                    name="senderName"
                    placeholder="Enter name here..."
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Phone Number</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    id="senderPhoneNumber"
                    name="senderPhoneNumber"
                    placeholder="Enter phone number here..."
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    id="senderEmail"
                    name="senderEmail"
                    placeholder="Enter email here..."
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">
                    Full Home Address
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 border-gray-300"
                    type="text"
                    id="senderHomeAddress"
                    name="senderHomeAddress"
                    placeholder="Enter full home address here..."
                    required
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] w-full p-4 text-gray-100 mt-4"
                >
                  Get A Cash Offer Now!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
