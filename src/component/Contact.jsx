import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 "
    >
      <form
        method="POST"
        action="https://getform.io/f/4b330690-0e29-4b64-8af1-f62380eb56ca"
        className="flex flex-col max-w-[600px] w-full  "
      >
        <div>
          <p className="text-center text-3xl text-white mb-[14px]">Contact</p>
          <p className="text-center text-2xl text-white mb-[14px]">
            Submit the form below
          </p>
        </div>
        <p className="text-xl text-white">Name</p>
        <input
          className="p-2 mb-[14px] bg-[#61677a]"
          type="name"
          placeholder="Enter your name"
          name="Name"
        />
        <p className="text-xl text-white">Email address</p>
        <input
          className="p-2 mb-[14px] bg-[#61677a]"
          type="email"
          placeholder="Enter your email"
          name="email"
        />
        <p className="text-xl text-white">Leaving a message</p>
        <textarea
          className="p-2 mb-[14px] bg-[#61677a]"
          placeholder="Message"
          rows="10"
          name="textarea"
        ></textarea>
        <button className=" text-white hover:bg-pink-600 px-2 py-3 ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
