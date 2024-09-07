import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import { FormValues } from "types/form";

if (typeof window !== "undefined") {
  injectStyle();
}

export const LandingHero = () => {
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
      const data = await response.json();

      /* eslint-disable no-console */
      if (!data.error) {
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
    <div id="landing-hero" className="w-full pt-40 pb-20 bg-[url('../public/assets/aerialSubdivision.jpg')] bg-cover">
      <div className="max-w-[1240px] px-2 w-full m-auto">
        <div className="grid md:grid-cols-10 gap-12">
          {/* left */}
          <div className="flex items-center px-10 md:col-span-5">
            <div className="white-space:nowrap">
              <p className="uppercase text-lg tracking-widest text-white font-bold">
                We buy houses fast, easy, and hassle-free.
              </p>
              <h1 className="text-white">
                No Fees.
                <span>
                  <br />
                  No Obligations.
                </span>
                <span className="text-[#11ae5f]">
                  <br />
                  Fair Offer Guarantee.
                </span>
              </h1>
              <p className="py-4 text-white text-lg sm:max-w-[70%]">
                Sell us your house! No matter what type of home you have; house,
                condo, or duplex. Landmark Property will make a
                fair cash offer to purchase your house as is.
              </p>
            </div>
          </div>
          {/* right */}
          <div className="md:col-span-4 lg:p-4">
            <div className="p-4">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="flex flex-col">
                  <ToastContainer />
                  <label className="uppercase text-md py-2 text-white">Name</label>
                  <input
                    className="border-1 rounded-md p-3 flex"
                    type="text"
                    id="senderName"
                    name="senderName"
                    placeholder="Enter name here..."
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-md py-2 text-white">Phone Number</label>
                  <input
                    className="border-1 rounded-md p-3 flex"
                    type="text"
                    id="senderPhoneNumber"
                    name="senderPhoneNumber"
                    placeholder="Enter phone number here..."
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-md py-2 text-white">Email</label>
                  <input
                    className="border-1 rounded-md p-3 flex"
                    type="text"
                    id="senderEmail"
                    name="senderEmail"
                    placeholder="Enter email here..."
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-md py-2 text-white">
                    Full Home Address
                  </label>
                  <input
                    className="border-1 rounded-md p-3 flex"
                    type="text"
                    id="senderHomeAddress"
                    name="senderHomeAddress"
                    placeholder="Enter full home address here..."
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="flex justify-center">
                  <button className="p-4 mt-4">Get A Cash Offer Now!</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
