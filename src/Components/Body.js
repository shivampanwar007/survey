import React, { useRef } from "react";

export default function Body() {
  const options = [
    "Single-Select",
    "Multi-Select",
    "Rating",
    "Open-end",
    "Drag and drop",
    "Image and video",
    "Custom Set up",
  ];

  const itemsData = {
    "Single-Select": [
      {
        title: "Radio single select",
        description: "Radio single select allows to choose one option .",
        imgSrc: "./radio.gif",
      },
      {
        title: "Button single select",
        description: "Allows selection of one option from a group.",
        imgSrc: "./draggg.gif",
      },
      {
        title: "Radio single select grid",
        description: "Dropdown to choose one option from a list.",
        imgSrc: "./button.gif",
      },
      {
        title: " Button single select grid",
        description: "Simple Yes or No selection button.",
        imgSrc: "./draggg.gif",
      },
      {
        title: " This or That",
        description: "Simple Yes or No selection button.",
        imgSrc: "./draggg.gif",
      },
      {
        title: "Drop down",
        description: "Simple Yes or No selection button.",
        imgSrc: "./draggg.gif",
      },
    ],
    "Multi-Select": [
      {
        title: " Checkbox multi-select",
        description: "Allows multiple options to be selected.",
        imgSrc: "./drag.gif",
      },
      {
        title: " Button multi-select ",
        description: "Switch-style multi-select options.",
        imgSrc: "./draggg.gif",
      },
      {
        title: "Checkbox multi-select grid",
        description: "Select multiple tags from a list.",
        imgSrc: "./raddd.gif",
      },
      {
        title: " Button multi-select grid",
        description: "Select multiple tags from a list.",
        imgSrc:
          "https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
    ],
    Rating: [
      {
        title: "Star Rating",
        description: "Rate an item using stars.",
        imgSrc:
          "https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Emoji Rating",
        description: "Rate using emojis to express emotions.",
        imgSrc:
          "https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Numeric Rating",
        description: "Rate by assigning a number to the item.",
        imgSrc:
          "https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
    ],
    "Open-end": [
      {
        title: "Text Field",
        description: "Enter a single-line response.",
        imgSrc:
          "https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Paragraph Field",
        description: "Enter a longer, multi-line response.",
        imgSrc:
          "https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Upload Field",
        description: "Upload a file to answer the question.",
        imgSrc:
          "https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
    ],
    "Drag and drop": [
      {
        title: "Rank Items",
        description: "Drag and drop items to rank them.",
        imgSrc:
          "https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Sort Items",
        description: "Drag items to reorder them in a list.",
        imgSrc:
          "https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Assign Items",
        description: "Drag items into categories or groups.",
        imgSrc:
          "https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
    ],
    "Image and video": [
      {
        title: "Image Upload",
        description: "Upload and preview images.",
        imgSrc:"https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Video Upload",
        description: "Upload and preview videos.",
        imgSrc:
          "https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Interactive Media",
        description: "Add interactive images and videos.",
        imgSrc:
          "https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
    ],
    "Custom Set up": [
      {
        title: "Radio",
        description: "Trigger based on selection.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241237",
        imgSrc:"https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Radio",
        description: "Open-end trigger based on selection.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241238",
        imgSrc:"https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Multicheck",
        description: "Trigger subgroups dynamically on selection.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241239",
        imgSrc:"https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: " Radio Grid",
        description:
          " Question trigger based on selction of 'Not very likely' & 'Not at all likely'.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241240",
        imgSrc:"https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Numeric box",
        description: "Question trigger based on response.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241241",
        imgSrc:"https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Numeric box",
        description: "Question trigger based on response.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241242",
        imgSrc:"https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Open end",
        description: "Question trigger based on response of 'First Box’.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241243",
        imgSrc:"https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Custom textbox",
        description: "Enter the phone number with extension.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241245",
        imgSrc:"https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: " Image",
        description: "Question based on 'Time interval'.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241244",
        imgSrc:"https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
  
      {
        title: "Image Magnifier",
        description: "It will zoom on image when hover.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241248",
        imgSrc:"https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Image pop-up on click",
        description: "Image get zoom on clicking it .",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241249",
        imgSrc:"https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Image on hover",
        description: "Image will show when hover on text .",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241250",
        imgSrc:"https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
     
      {
        title: " Slider",
        description: " Custom Slider setup with exclusive option.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241247",
        imgSrc:"https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Merged Question",
        description:
          " Number question grid with exclusive checkbox for each option.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241251",
        imgSrc:"https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Merged Question",
        description:
          " Number question grid with exclusive checkbox for each option 2.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241252",
        imgSrc:"https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Merged Question",
        description:
          " Show option selected from the dropdown list in one column ",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241259",
        imgSrc:"https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Drag and drop",
        description: " image drag and drop with enlarge image property",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241254",
        imgSrc:"https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Drop down",
        description:
          "Example question to fix columns on topmost side of the page when scrolling",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241258",
        imgSrc:"https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "AutoSum",
        description:
          " Calculating percentage distribution in an autosum/number grid",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241260",
        imgSrc:"https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Number question",
        description: "exclusive checkbox and autosum enabled for each column",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241253",
        imgSrc:"https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Drop down and number",
        description:
          "Calculating percentage distribution in an drop down merged with number question",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241261",
        imgSrc:"https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
    ],
  };
  
  // Create a ref for each option
  const sectionRefs = useRef({});

  // Scroll to a specific section
  const handleScrollTo = (option) => {
    sectionRefs.current[option]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="xl:px-[70px] lg:px-[50px] md:px-[30px] px-[24px] font-serif space-y-8">
      {/* Options Section */}
      <div className="flex justify-evenly flex-wrap gap-10 ">
        {options.map((option, index) => (
          <p
            key={index}
            className="bg-[#F7F3F3] font-medium text-2xl px-4 py-2 rounded-3xl shadow-lg cursor-pointer hover:scale-105 hover:shadow-[0_5px_15px_rgba(0,0,0,1)] transition-transform duration-300"
            onClick={() => handleScrollTo(option)} // Scroll on click
          >
            {option}
          </p>
        ))}
      </div>

      {/* Items Section */}
      {options.map((option, index) => (
        <div
          key={index}
          ref={(el) => (sectionRefs.current[option] = el)} // Assign ref for each section
          className="bg-white shadow-xl p-4  rounded-2xl"
        >
          <p className="text-[24px] font-semibold ">{option}</p>
          <div className="flex flex-wrap  md:gap-8 gap-2">
            {itemsData[option].map((item, idx) => (
              <div key={idx} className="py-4">
                <p className="text-[24px] font-medium">{item.title}</p>
                <p className="sm:w-[260px] sm:h-[80px] py-2">
                  {item.description}
                </p>
                <div
  className="card sm:w-[280px] sm:h-[170px] rounded-3xl bg-gradient-to-b from-[#6871f0] to-[rgb(9,102,241)] p-[3px] hover:scale-105 hover:shadow-[0_5px_15px_rgba(9,102,241)] transition-transform duration-300"
>
  <a href={item.linkk} target="_blank" rel="noopener noreferrer">
    {item.imgSrc.endsWith(".mp4") ? (
      <video
        className="w-full h-full object-contain rounded-[20px]"
        src={item.imgSrc}
        controls
        loop
        autoPlay
        muted
      />
    ) : (
      <img
        className="w-full h-full object-fit rounded-[20px]"
        src={item.imgSrc}
        alt={item.title}
      />
    )}
  </a>
</div>

              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
