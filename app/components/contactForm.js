import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Spinner from "./spinner";
import Script from "next/script";
import { TextInput, TextAreaInput, EmailInput, ErrorMessage } from "./form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, z } from "zod";
import { RocketLaunchIcon, SparklesIcon } from "@heroicons/react/20/solid";

const schema = z.object({
  name: string().min(2, { message: "Please enter your full name" }),
  email: string().email().min(5, { message: "Please enter your email" }),
  message: string().min(5, { message: "Please describe your idea" }),
});

export default function ContactForm({ formName }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
  });
  const { errors } = formState;
  const submitForm = async (formValues) => {
    setLoading(true);

    const templateParams = {
      form_name: formName,
      name: formValues.name,
      message: formValues.message,
      email: formValues.email,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams
      )
      .then(
        function (response) {
          setSubmitted(true);
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    setLoading(false);
  };

  useEffect(() => {
    console.log(errors);
  });
  return (
    <div className="w-80 min-h-80 md:w-96">
      <Script
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        onLoad={() => {
          emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
        }}
      ></Script>
      {!submitted && (
        <form name={formName} id={formName} onSubmit={handleSubmit(submitForm)}>
          <div className="mt-8 grid grid-cols-1 gap-6 items-start">
            <div className="grid grid-cols-1 gap-6">
              <TextInput
                id="name"
                label="Full Name"
                errorMessage={errors.name?.message}
                {...register("name")}
              />
              <EmailInput
                id="email"
                label="Email"
                errorMessage={errors.email?.message}
                {...register("email")}
              />
              <TextAreaInput
                id="message"
                label="Tell us what you're looking for!"
                height={48}
                errorMessage={errors.message?.message}
                {...register("message")}
              />
            </div>
            <div className="block mt-5 mb-5">
              <button
                type="submit"
                id="submit"
                className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-400 text-white font-bold py-2 px-4 rounded w-full"
              >
                Submit
                {loading && (
                  <div className="ml-4">
                    <Spinner />
                  </div>
                )}
              </button>
              {!!Object.keys(errors).length && (
                <ErrorMessage message={"See errors above"} />
              )}
            </div>
          </div>
        </form>
      )}
      {submitted && (
        <div className="p-4">
          <div className="flex justify-center">
            <RocketLaunchIcon className="h-24 w-24 text-primary-500" />
            <SparklesIcon className="h-24 w-24 text-primary-500" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mt-12 text-center text-5xl font-bold tracking-tight">
              Thank you!
            </h2>
            <p className="my-4 text-base leading-7 font-light text-gray-500">
              We recieved your message and are working hard to respond to you
              soon.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
