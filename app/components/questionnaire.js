"use client";
import { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, array, z } from "zod";
import clsx from "clsx";
import {
  TextInput,
  PhoneInput,
  EmailInput,
  UrlInput,
  NumberInput,
  TextAreaInput,
  ErrorMessage,
} from "./form";
import Spinner from "./spinner";
import { useRouter } from "next/navigation";

const animatedComponents = makeAnimated();
const attributeSchema = z.object({
  value: z.string(),
  label: z.string(),
});
const schema = z.object({
  name: string().min(2, { message: "Please enter your full name" }),
  email: string().email().min(5, { message: "Please enter your email" }),
  phone: string().max(13).optional(),
  website: string()
    .url({ message: "URL should include https://" })
    .optional()
    .or(z.literal("")),
  portfolio: string()
    .url({ message: "URL should include https://" })
    .optional()
    .or(z.literal("")),
  mainRole: string().min(1, { message: "Role name is required" }),
  yearsWorked: string().optional().or(z.literal("")),
  serviceOrProduct: string().optional().or(z.literal("")),
  industryName: string().optional().or(z.literal("")),
  accomplishments: string().optional().or(z.literal("")),
  attributes: array(attributeSchema).optional().or(z.literal("")),
  softSkills: string().optional().or(z.literal("")),
  techSkills: string().optional().or(z.literal("")),
  workExperience: string().optional().or(z.literal("")),
  principles: string().optional().or(z.literal("")),
  music: string().optional().or(z.literal("")),
  otherMedia: string().optional().or(z.literal("")),
  hobbies: string().optional().or(z.literal("")),
});

const Questionnaire = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, setError, setValue, control, formState } =
    useForm({
      resolver: zodResolver(schema),
    });
  const { errors } = formState;

  useEffect(() => {
    console.log("errors", errors);
    console.log("formState", formState);
  });

  const attributeOptions = [
    { value: "calm", label: "Calm" },
    { value: "passionate", label: "Passionate" },
    { value: "creative", label: "Creative" },
    { value: "analytical", label: "Analytical" },
  ];

  const submitForm = async (formValues) => {
    const getJobProfileId = function (jobProfiles) {
      return jobProfiles.filter((job) => job.mainRole === formValues.mainRole);
    };

    setLoading(true);
    const user = (({ name, email, phone }) => ({ name, email, phone }))(
      formValues
    );
    const job = (({
      website,
      portfolio,
      mainRole,
      yearsWorked,
      serviceOrProduct,
      industryName,
      accomplishments,
      softSkills,
      techSkills,
      workExperience,
      principles,
      music,
      otherMedia,
      hobbies,
    }) => ({
      website,
      portfolio,
      mainRole,
      yearsWorked,
      serviceOrProduct,
      industryName,
      accomplishments,
      softSkills,
      techSkills,
      workExperience,
      principles,
      music,
      otherMedia,
      hobbies,
    }))(formValues);
    const attributes =
      formValues.attributes?.map((x) => x.value).join(",") || "";
    try {
      const body = {
        ...user,
        jobProfiles: {
          create: {
            attributes,
            ...job,
          },
        },
      };
      const res = await fetch(`/api/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      console.log("data: " + JSON.stringify(data));
      if (data.status === 409) {
        setError(data.name, { type: "manual", message: data.message });
        // TODO: needs to scroll up to the top of page
      } else if (data.id) {
        const job = getJobProfileId(data.jobProfiles);
        router.push(`/checkout?jpid=${job[0].id}`);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="antialiased text-gray-900 px-6">
      <div className="max-w-xl mx-auto py-12 md:max-w-4xl">
        <h2 className="text-2xl font-bold">Questionnaire</h2>
        <p className="mt-2 text-lg text-gray-500">Answer as much as you can</p>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="grid grid-cols-1 gap-6">
              {/* <label htmlFor="resume" className="block">
                <span className="text-gray-700">Upload Your Resume</span>
                <input type="file" id="resume" className="mt-1 block w-full" />
              </label> */}
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
              <PhoneInput
                id="phone"
                label="Phone"
                errorMessage={errors.phone?.message}
                {...register("phone")}
              />
              <UrlInput
                id="website"
                label="Website Link"
                errorMessage={errors.website?.message}
                {...register("website")}
              />
              <UrlInput
                id="portfolio"
                label="Online Portfolio Link (if applicable)"
                errorMessage={errors.portfolio?.message}
                {...register("portfolio")}
              />
              <TextInput
                id="mainRole"
                label="What's the name of the main role you're known for or
                  the position you're applying for?"
                errorMessage={errors.mainRole?.message}
                {...register("mainRole")}
              />
              <NumberInput
                id="yearsWorked"
                label="How many years have you worked in this field?"
                {...register("yearsWorked")}
              />
              <TextInput
                id="serviceOrProduct"
                label="What kind of service/product do you provide?"
                {...register("serviceOrProduct")}
              />
              <TextInput
                id="industryName"
                label="What industry do you work in?"
                {...register("industryName")}
              />
              <TextAreaInput
                id="accomplishments"
                label="Summarize your top 3 holistic accomplishments or impacts
                across your entire career."
                height={48}
                {...register("accomplishments")}
              />
            </div>

            <div className="grid grid-cols-1 gap-6">
              <label htmlFor={"attributes"} className="block">
                <span className="text-gray-700">
                  Select the attributes that best describe you
                </span>
                <Controller
                  control={control}
                  name="attributes"
                  render={({ field }) => (
                    <Select
                      classNames={{
                        control: ({ isFocused }) =>
                          clsx(
                            "mt-1 border rounded-md shadow-sm",
                            isFocused
                              ? "border-indigo-300 ring ring-indigo-200 ring-opacity-50"
                              : "border-gray-300 hover:border-gray-400"
                          ),
                        placeholder: () => "text-gray-500 pl-1 py-0.5",
                        selectInput: () => "pl-1 py-0.5",
                        valueContainer: () => "p-2 gap-1",
                        multiValue: () =>
                          "bg-gray-100 rounded items-center py-0.5 pl-2 pr-1 gap-1.5",
                        multiValueLabel: () => "leading-6 py-0.5",
                        multiValueRemove: () =>
                          "border border-gray-200 bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md",
                        indicatorsContainer: () => "p-1 gap-1",
                        clearIndicator: () =>
                          "text-gray-500 p-1 rounded-md hover:bg-red-50 hover:text-red-800",
                        indicatorSeparator: () => "bg-gray-300",
                        menu: () =>
                          "p-1 mt-2 border border-gray-200 bg-white rounded-lg",
                        dropdownIndicator: () =>
                          "p-1 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black",
                        groupHeadingStyles: () =>
                          "ml-3 mt-2 mb-1 text-gray-500 text-sm",
                        option: ({ isFocused, isSelected }) =>
                          clsx(
                            "hover:cursor-pointer px-3 py-2 rounded",
                            isFocused && "bg-gray-100 active:bg-gray-200",
                            isSelected &&
                              "after:content-['✔'] after:ml-2 after:text-green-500 text-gray-500"
                          ),
                      }}
                      closeMenuOnSelect={false}
                      options={attributeOptions}
                      {...field}
                      id="attributes"
                      components={animatedComponents}
                      isMulti
                      unstyled
                    />
                  )}
                />
              </label>
              <TextInput
                id="softSkills"
                label='What are your top 3 "soft skills"?'
                {...register("softSkills")}
              />
              <TextInput
                id="techSkills"
                label='What are your top 3 "technical skills"?'
                {...register("techSkills")}
              />
              <TextAreaInput
                id="workExperience"
                label="List your top 3 most relevant work experiences and top 2
                accomplishments at each. This should include: the name of each
                company, your title there, dates employed, overview of job
                duties, top 2 accomplishments at each job including any
                measurable analytics demonstrating growth/success."
                height={64}
                {...register("workExperience")}
              />
              <TextInput
                id="principles"
                label="What are your top 3 driving principles/values at work?"
                {...register("principles")}
              />
              <TextInput
                id="music"
                label="Who are your top 3 favorite musicians?"
                {...register("music")}
              />
              <TextInput
                id="otherMedia"
                label="What are your top 3 favorite movies or TV shows?"
                {...register("otherMedia")}
              />
              <TextInput
                id="hobbies"
                label="What are your top 3 interests or hobbies outside of work?"
                {...register("hobbies")}
              />
              {/* <label htmlFor="images" className="block">
                <span className="text-gray-700">
                  Upload 6-10 images representing your experiences.
                </span>
                <input
                  type="file"
                  id="images"
                  multiple
                  accept="image/*"
                  className="mt-1 block w-full"
                />
              </label> */}
              <div className="block mt-5 mb-5">
                <button
                  type="submit"
                  id="submit"
                  className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded w-full"
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Questionnaire;
