"use client";
import React, { useState } from "react";
import {
  TextInput,
  PhoneInput,
  EmailInput,
  UrlInput,
  NumberInput,
  TextAreaInput,
  CheckboxInput,
} from "./form";

const Questionnaire = () => {
  const [userState, setUserState] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [jobProfileState, setJobProfileState] = useState({
    website: "",
    portfolio: "",
    mainRole: "",
    yearsWorked: 0,
    serviceOrProduct: "",
    industryName: "",
    accomplishments: "",
    attributes: "",
    techSkills: "",
    softSkills: "",
    workExperience: "",
    principles: "",
    music: "",
    otherMedia: "",
    hobbies: "",
  });
  const [attributesState, setAttributesState] = useState({});

  const handleUserChange = (e) => {
    setUserState((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleProfileChange = (e) => {
    setJobProfileState((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleAttributeChange = (e) => {
    setAttributesState((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.checked,
    }));
  };

  function filterAttributes(attributes) {
    let attrs = Object.keys(attributes)
      .filter((key) => attributes[key])
      .join(", ");

    return attrs;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        ...userState,
        jobProfiles: {
          create: {
            ...jobProfileState,
            attributes: filterAttributes(attributesState),
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="antialiased text-gray-900 px-6">
      <div className="max-w-xl mx-auto py-12 md:max-w-4xl">
        <h2 className="text-2xl font-bold">Questionnaire</h2>
        <p className="mt-2 text-lg text-gray-500">Answer as much as you can</p>
        <form>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="grid grid-cols-1 gap-6">
              <label htmlFor="resume" className="block">
                <span className="text-gray-700">Upload Your Resume</span>
                <input type="file" id="resume" className="mt-1 block w-full" />
              </label>
              <TextInput
                onChange={handleUserChange}
                id="name"
                name="name"
                label="Full Name"
              />
              <PhoneInput
                onChange={handleUserChange}
                id="phone"
                name="phone"
                label="Phone"
              />
              <EmailInput
                onChange={handleUserChange}
                id="email"
                name="email"
                label="Email"
              />
              <UrlInput
                onChange={handleProfileChange}
                id="website"
                name="website"
                label="Website Link"
              />
              <UrlInput
                onChange={handleProfileChange}
                id="portfolio"
                name="portfolio"
                label="Online Portfolio Link (if applicable)"
              />
              <TextInput
                onChange={handleProfileChange}
                id="mainRole"
                name="mainRole"
                label="What's the name of the main role you're known for or
                  the position you're applying for?"
              />
              <NumberInput
                onChange={handleProfileChange}
                id="yearsWorked"
                name="yearsWored"
                label="How many years have you worked in this field?"
              />
              <TextInput
                onChange={handleProfileChange}
                id="serviceOrProduct"
                name="serviceOrProduct"
                label="What kind of service/product do you provide?"
              />
              <TextInput
                onChange={handleProfileChange}
                id="industryName"
                name="industryName"
                label="What industry do you work in?"
              />
              <TextAreaInput
                onChange={handleProfileChange}
                id="accomplishments"
                name="accomplishments"
                label="Summarize your top 3 holistic accomplishments or impacts
                across your entire career."
                height={48}
              />
            </div>

            <div className="grid grid-cols-1 gap-6">
              <fieldset className="block">
                <legend className="text-gray-700">
                  Check the boxes that describe your best attributes
                </legend>
                <div className="mt-2">
                  <div>
                    <CheckboxInput
                      onChange={handleAttributeChange}
                      id="calm"
                      name="attributes"
                      label="Calm"
                    />
                  </div>
                  <div>
                    <CheckboxInput
                      onChange={handleAttributeChange}
                      id="passionate"
                      name="attributes"
                      label="Passionate"
                    />
                  </div>
                  <div>
                    <CheckboxInput
                      onChange={handleAttributeChange}
                      id="creative"
                      name="attributes"
                      label="Creative"
                    />
                  </div>
                  <div>
                    <CheckboxInput
                      onChange={handleAttributeChange}
                      id="analytical"
                      name="attributes"
                      label="Analytical"
                    />
                  </div>
                </div>
              </fieldset>
              <TextInput
                onChange={handleProfileChange}
                id="softSkills"
                name="softSkills"
                label='What are your top 3 "soft skills"?'
              />
              <TextInput
                onChange={handleProfileChange}
                id="techSkills"
                name="techSkills"
                label='What are your top 3 "technical skills"?'
              />
              <TextAreaInput
                onChange={handleProfileChange}
                id="workExperience"
                name="workExperience"
                label="List your top 3 most relevant work experiences and top 2
                accomplishments at each. This should include: the name of each
                company, your title there, dates employed, overview of job
                duties, top 2 accomplishemnts at each job including any
                measureable analytics demonstrating growth/success."
                height={64}
              />
              <TextInput
                onChange={handleProfileChange}
                id="techSkills"
                name="techSkills"
                label='What are your top 3 "technical skills"?'
              />
              <TextInput
                onChange={handleProfileChange}
                id="principles"
                name="principles"
                label="What are your top 3 driving principles/values at work?"
              />
              <TextInput
                onChange={handleProfileChange}
                id="music"
                name="music"
                label="Who are your top 3 favorite musicians?"
              />
              <TextInput
                onChange={handleProfileChange}
                id="otherMedia"
                name="otherMedia"
                label="What are your top 3 favorite movies or TV shows?"
              />
              <TextInput
                onChange={handleProfileChange}
                id="hobbies"
                name="hobbies"
                label="What are your top 3 interests or hobbies outside of work?"
              />
              <label htmlFor="images" className="block">
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
              </label>
              <div className="block">
                <button
                  onClick={handleSubmit}
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
