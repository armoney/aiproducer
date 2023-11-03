import { useEffect, useState } from "react";
import { TextInput, TextAreaInput, EmailInput, ErrorMessage } from "./form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, z } from "zod";

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
    console.log(formValues);
    setLoading(false);
    setSubmitted(true);
  };

  useEffect(() => {
    console.log(errors);
  });
  return (
    <div className="w-80 min-h-80 md:w-96">
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
      {submitted && <div>hi</div>}
    </div>
  );
}
