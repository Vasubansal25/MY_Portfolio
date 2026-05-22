import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("https://api.web3forms.com/submit", {
        access_key: "e07b8098-08f5-4659-9597-a78449861fd7",
        name: data.name,
        email: data.email,
        message: data.message,
      });

      if (response.data.success) {
        toast.success("Your message has been sent");
        reset();
      } else {
        toast.error("Failed to send message");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-4">Contact me</h1>
      <span>Please fill out the form below to contact me</span>

      <div className="flex flex-col items-center justify-center mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-200 w-full max-w-md px-8 py-6 rounded-xl"
        >
          <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>

          {/* Name */}
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              {...register("name", { required: true })}
              className="shadow rounded-lg border py-2 px-3 focus:outline-none"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              {...register("email", { required: true })}
              className="shadow rounded-lg border py-2 px-3 focus:outline-none"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              {...register("message", { required: true })}
              className="shadow rounded-lg border py-2 px-3 focus:outline-none"
              placeholder="Enter your message"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-black text-white rounded-xl px-4 py-2 hover:bg-slate-700 duration-300 w-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;