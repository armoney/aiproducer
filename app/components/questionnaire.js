"use client";
import { useEffect } from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, array, z } from "zod";
import {
  TextInput,
  PhoneInput,
  EmailInput,
  UrlInput,
  NumberInput,
  TextAreaInput,
} from "./form";

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
  mainRole: string().min(1).optional().or(z.literal("")),
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
  const { register, handleSubmit, setError, setValue, control, formState } =
    useForm({
      resolver: zodResolver(schema),
    });
  const { errors } = formState;

  useEffect(() => {
    console.log("errors", errors);
    console.log("formState", formState);
  });
  const handleUrlFormat = (value) => {
    let string = value;
    if (string === "" || string === undefined) return;
    if (!/^http[s]?:\/\//.test(string)) {
      string = "http://" + string;
    }
    return string;
  };

  const attributeOptions = [
    { value: "calm", label: "Calm" },
    { value: "passionate", label: "Passionate" },
    { value: "creative", label: "Creative" },
    { value: "analytical", label: "Analytical" },
  ];

  const submitForm = async (formValues) => {
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
      attributes,
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
      if (data.status === 409) {
        setError(data.name, { type: "manual", message: data.message });
        // TODO: needs to scroll up to the top of page
      }
      console.log("data: " + JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="antialiased text-gray-900 px-6">
      <div className="max-w-xl mx-auto py-12 md:max-w-4xl">
        <h2 className="text-2xl font-bold">Questionnaire</h2>
        <p className="mt-2 text-lg text-gray-500">Answer as much as you can</p>
        <form novalidate onSubmit={handleSubmit(submitForm)}>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="grid grid-cols-1 gap-6">
              {/* <label htmlFor="resume" className="block">
                <span className="text-gray-700">Upload Your Resume</span>
                <input type="file" id="resume" className="mt-1 block w-full" />
              </label> */}
              <TextInput id="name" label="Full Name" {...register("name")} />
              {errors.name?.message && (
                <div style={{ color: "red" }}>{errors.name?.message}</div>
              )}
              <EmailInput id="email" label="Email" {...register("email")} />
              {errors.email?.message && (
                <div style={{ color: "red" }}>{errors.email?.message}</div>
              )}
              <PhoneInput id="phone" label="Phone" {...register("phone")} />
              {errors.phone?.message && (
                <div style={{ color: "red" }}>{errors.phone?.message}</div>
              )}
              <UrlInput
                id="website"
                label="Website Link"
                {...register("website")}
              />
              {errors.website?.message && (
                <div style={{ color: "red" }}>{errors.website?.message}</div>
              )}
              <UrlInput
                id="portfolio"
                label="Online Portfolio Link (if applicable)"
                {...register("portfolio")}
              />
              {errors.portfolio?.message && (
                <div style={{ color: "red" }}>{errors.portfolio?.message}</div>
              )}
              <TextInput
                id="mainRole"
                label="What's the name of the main role you're known for or
                  the position you're applying for?"
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
                      closeMenuOnSelect={false}
                      options={attributeOptions}
                      {...field}
                      id="attributes"
                      isMulti
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
                duties, top 2 accomplishemnts at each job including any
                measureable analytics demonstrating growth/success."
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
              <div className="block">
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Questionnaire;
