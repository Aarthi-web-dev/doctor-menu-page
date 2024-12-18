import React, { useState } from "react";
import 'remixicon/fonts/remixicon.css';
import {Tab,TabGroup,TabList,TabPanel,TabPanels} from "@headlessui/react";
import'./index.css';

const Main = () => {
  const [selectedTab, setSelectedTab] = useState("Expertise");

  const tabContent = {
    Expertise: (
      <p className="mr-12 text-base">
      Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut.
        <div ><ul className="mt=6" >
          <li>Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed  ac ultricies sem nulla.</li>
          <li>Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed  ac ultricies sem nulla.</li>
          <li>Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed  ac ultricies sem nulla.</li>
        </ul></div>
        Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut.
        <div ><ul className="mt=6" >
          <li>Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed  ac ultricies sem nulla.</li>
          <li>Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed  ac ultricies sem nulla.</li>
          <li>Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed  ac ultricies sem nulla.</li>
        </ul></div>

      </p>
      
      
    ),
    License: <p>This is the content for the "One" section.</p>,
    Reviews: <p>This is the content for the "Beadwork" section.</p>,
    Payment: <p>This is the content for the "All" section.</p>,
  };

  const tabHeadings = ["Expertise", "License", "Reviews", "Payment"];
      return (
    <div className="grid grid-cols-2 gap-28 px-5">
       <div className="flex flex-col p-6">
      <div className="flex space-x-24 pb-0 mb-0">
        {tabHeadings.map((heading) => (
          <div
            key={heading}
            onClick={() => setSelectedTab(heading)}
            className={`cursor-pointer text-lg font-lg font-sans pb-0 mb-0 ${
              selectedTab === heading
                ? " underline underline-offset-8 decoration-4 decoration-primary-500 "
                : "null"
            }`}
          >
            {heading}
          </div>
        ))}
      </div>

      <div className="mt-0">
        <div className="text-gray-700 text-lg px-0 ">
          {tabContent[selectedTab]}
        </div>
      </div>
    </div>




      {/* Right Part */}
      <div className="bg-lime-200 text-neutral-600 p-6 ">
        {/* Profile Section */}
        <div className="flex items-center mb-0">
          {/* Circular Image */}
          <div className="w-28 h-28 rounded-full bg-white overflow-hidden">
            <img
              src="/images.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Name and Role */}
          <div className="ml-4">
            <h3 className=" text-lime-600 tracking-widest font-bold font-sans " style={{marginBottom:"0px",lineHeight:"0.2"}}>Alice Wilkins</h3>
            <p className="font-sans ">Psychotherapy, LICSW</p>
          </div>
        </div>

        {/* Availability Section */}
        <div className="flex items-center space-x-2 mb-7 mt-5">
        <div className=" flex items-center mr-5 justify-center">
            {/* <span className="text-green-500 font-bold">✔</span> */}
            <i className="ri-video-line mr-2"></i>
            <span>Virtual Sessions</span>
          </div>
          <div className=" flex items-center justify-center">
            {/* <span className="text-green-500 font-bold">✔</span> */}
            <i className="ri-calendar-line mr-2"></i>
            <span>Next available Monday</span>
          </div>
          {/* <p  >Virtual Sessions</p>
          <p>Next Available Monday</p> */}
        </div>

        {/* Labels (Buttons) */}
        <div className="flex space-x-1 mb-4  ">
          {["Depression", "Stress & Anxiety", "Trauma", "Sleep Problem"].map((label) => (
            <button
              key={label}
              className="w-30 h-8 px-3 py-2 bg-lime-200 border border-black-100 border-0.5 text-neutral-600 rounded-2xl shadow "
            >
              {label}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <p className="mb-28 pr-36 text-lg " >
Alice is a bicultural-oriented licensed mental health therapist. She implements different therapeutic approaches, includingCBT,solution-foused,existential, and mindfulness-based therapies.       </p>

        {/* Final Button */}
        <div className="text-center">
          <button className=" w-11/12 px-20 py-3 border border-green-100 border-0.5 bg-primary-500 text-white rounded-lg shadow ">
            Request the Cancellation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;