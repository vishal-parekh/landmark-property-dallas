import ContactImg from "/public/assets/contact.png";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import { FormValues } from "types/form";

if (typeof window !== "undefined") {
  injectStyle();
}

export const Contact = () => {
  const [values, setValues] = useState<FormValues>();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values!, [event.target.name]: event.target.value });
  };
  const toastError = () => toast.error("Submission Failed");
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({
          senderName: values?.senderName,
          senderPhoneNumber: values?.senderPhoneNumber,
          senderEmail: values?.senderEmail,
          senderHomeAddress: values?.senderHomeAddress,
        }),
      });
      /* eslint-disable no-console */
      if (response.ok) {
        toast.success("Submission successful!");
      } else {
        console.error(
          `Failed to send email. Error - ${response.status}: ${response.statusText}`,
        );
        toastError();
      }
    } catch (error) {
      console.error(`Error (likely due to network issue): ${error}`);
      toastError();
    }
    /* eslint-enable no-console */
  };
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-4 gap-8">
          {/* left */}
          <div className="col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div className="flex items-center justify-center pb-6">
                <Image src={ContactImg} height={250} width={250} alt="/" />
              </div>
              <div>
                <h2 className="py-2 flex items-center justify-center">
                  Nayan Parekh
                </h2>
                <p className="py-2 flex items-center justify-center">
                  Real Estate Agent
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <a>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlinePhone />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-2 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
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
                  ></input>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Get A Cash Offer Now!
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#5651e5]"
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
