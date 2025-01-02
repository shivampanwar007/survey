import React, { useRef } from "react";

export default function Body() {
  const options = [
    "Single-Select",
    "Multi-Select",
    "Rating",
    "Open-end",
    "Drag and drop",
    "Image and video",
    "Text Highlighter, Card sort, HeatMap and Shopping Cart",
    "Custom Set up",
  ];

  const itemsData = {
    "Single-Select": [
      {
        title: "Simple Radio",
        description: "Choose a single option from a list.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241268",
        imgSrc: "Radiomulticheckrating18.gif",
      },
      {
        title: "Single Select Button",
        description: "Select one option using buttons.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241274",
        imgSrc: "Radiomulticheckrating12.gif",
      },
      {
        title: "Single Select Grid",
        description: "Select one option per row in a grid.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241273",
        imgSrc: "Radiomulticheckrating20.gif",
      },
      {
        title: "Single Select Button Grid",
        description: "Choose a single option in a grid format.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241275",
        imgSrc: "Radiomulticheckrating13.gif",
      },

      {
        title: "This or That",
        description: "Choose between two options.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241281",
        imgSrc: "Radiomulticheckrating31.gif",
      },
      {
        title: "Dropdown",
        description: "Choose an option from a dropdown menu.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241280",
        imgSrc: "Radiomulticheckrating30.gif",
      },
    ],
    "Multi-Select": [
      {
        title: "Multiple Checkbox",
        description: "Choose multiple options on one page.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241267",
        imgSrc: "Radiomulticheckrating14.gif",
      },
      {
        title: "Multi Select Grid",
        description: "Choose multiple options in a grid.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241277",
        imgSrc: "Radiomulticheckrating21.gif",
      },
      {
        title: "Multi Select",
        description: "Choose multiple options.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241276",
        imgSrc: "Radiomulticheckrating22.gif",
      },
      {
        title: "Multi Select Button",
        description: "Select multiple options using buttons.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241278",
        imgSrc: "Radiomulticheckrating23.gif",
      },
      {
        title: "Multi Select Grid Button",
        description: "Select multiple options in a grid format.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241279",
        imgSrc: "./Radiomulticheckrating4.gif",
      },
    ],
    Rating: [
      {
        title: "Single Select Rating",
        description: "Rate on a 0-10 scale.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241299",
        imgSrc: "Radiomulticheckrating6.gif ",
      },
      {
        title: "Single Select Rating",
        description: "Rate on a 1-5 scale.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241296",
        imgSrc: "Radiomulticheckrating7.gif ",
      },
      {
        title: "Smiley Rating",
        description: "Rate using smiley faces.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241298",
        imgSrc: "./Radiomulticheckrating8.gif",
      },
      {
        title: "Like-Dislike Rating",
        description: "Rate using thumbs up or down.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241297",
        imgSrc: "Radiomulticheckrating9.gif",
      },
      {
        title: "Drag Rating Scale",
        description: "Rate by dragging items on a scale.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241284",
        imgSrc: "Radiomulticheckrating26.gif",
      },
      {
        title: "Slider Rating",
        description: "Rate items by adjusting sliders.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241286",
        imgSrc: "Radiomulticheckrating28.gif",
      },
      {
        title: "Slider",
        description: "Select a value using a slider.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241287",
        imgSrc: "Radiomulticheckrating29.gif",
      },

      {
        title: "Button Rating",
        description: "Rate using a button scale.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241282",
        imgSrc: "Radiomulticheckrating32.gif",
      },
      {
        title: "Star Rating",
        description: "Rate using stars.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241283",
        imgSrc: "Radiomulticheckrating33.gif",
      },
    ],
    "Open-end": [
      {
        title: "Numeric box",
        description: "Question trigger based on response.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241241",
        imgSrc: "./CustomSetup5.gif",
      },
      {
        title: "Numeric box",
        description: "Question trigger based on response.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241242",
        imgSrc: "./CustomSetup6.gif",
      },
      {
        title: "Open end",
        description: "Question trigger based on response of 'First Box’.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241243",
        imgSrc: "./CustomSetup7.gif",
      },
      {
        title: "Custom textbox",
        description: "Enter the phone number with extension.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241245",
        imgSrc: "./CustomSetup8.gif",
      },
    ],

    "Drag and drop": [
      {
        title: "Drag and Drop",
        description: "Drag items to desired locations.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241288",
        imgSrc: "Radiomulticheckrating24.gif",
      },
      {
        title: "Drag and drop",
        description: " image drag and drop with enlarge image property",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241254",
        imgSrc:
          "https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
    ],
    "Image and video": [
      {
        title: " Image",
        description: "Question based on 'Time interval'.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241244",
        imgSrc: "./CustomSetup9.gif",
      },

      {
        title: "Image Magnifier",
        description: "It will zoom on image when hover.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241248",
        imgSrc: "./CustomSetup10.gif",
      },
      {
        title: "Image pop-up on click",
        description: "Image get zoom on clicking it .",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241249",
        imgSrc: "./CustomSetup11.gif",
      },
      {
        title: "Image on hover",
        description: "Image will show when hover on text .",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241250",
        imgSrc: "./CustomSetup12.gif",
      },
      {
        title: "Video Player",
        description: "Watch a video and respond.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241291",
        imgSrc:
          "https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Audio Player",
        description: "Listen to audio and answer the question.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241293",
        imgSrc:
          "https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
    ],

    "Text Highlighter, Card sort, HeatMap and Shopping Cart": [
      {
        title: "Single Select",
        description:
          "Select one option with logo and description layout (1-10 scale).",
        linkk:
          "https://thsurveys.decipherinc.com/survey/selfserve/53b/241264?_dj#",
        imgSrc: "./Radiomulticheckrating1.gif",
      },
      {
        title: "Single Select",
        description:
          "Select one option with logo and description layout (1-5 scale).",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241265",
        imgSrc: "./Radiomulticheckrating2.gif",
      },

      {
        title: "Card Sort Multi-Select",
        description: "Sort multiple items into categories.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241290",
        imgSrc: " Radiomulticheckrating5.gif",
      },

      {
        title: "Shopping Cart",
        description: "Select and manage items in a cart.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241292",
        imgSrc: "Radiomulticheckrating10.gif",
      },

      // {
      //   title: "Image Slide Show",
      //   description: "View a slideshow and answer questions.",
      //   linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241271",
      //   imgSrc: "Radiomulticheckrating15.gif",
      // },
      // {
      //   title: "Page Tuner",
      //   description: "Turn pages and respond to questions.",
      //   linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241270",
      //   imgSrc: "Radiomulticheckrating16.gif",
      // },
      {
        title: "Checkbox with Open End",
        description: "Select options and add comments.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241266",
        imgSrc: "Radiomulticheckrating17.gif",
      },

      {
        title: "Textbox Intro",
        description: "Enter introductory text.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241269",
        imgSrc: "Radiomulticheckrating19.gif",
      },

      {
        title: "Card Sort Single Select",
        description: "Sort items into categories with single selection.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241289",
        imgSrc: "Radiomulticheckrating25.gif",
      },

      {
        title: "Card Rating",
        description: "Rate items by selecting cards.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241285",
        imgSrc: "Radiomulticheckrating27.gif",
      },
    ],
    "Custom Set up": [
      {
        title: "Radio",
        description: "Trigger based on selection.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241237",
        imgSrc: "./CustomSetup1.gif",
      },
      {
        title: "Radio",
        description: "Open-end trigger based on selection.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241238",
        imgSrc: "./CustomSetup2.gif",
      },
      {
        title: "Multicheck",
        description: "Trigger subgroups dynamically on selection.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241239",
        imgSrc: "./CustomSetup3.gif",
      },
      {
        title: " Radio Grid",
        description:
          " Question trigger based on selction of 'Not very likely' & 'Not at all likely'.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241240",
        imgSrc: "./CustomSetup4.gif",
      },

      {
        title: " Slider",
        description: " Custom Slider setup with exclusive option.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241247",
        imgSrc:
          "https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Merged Question",
        description:
          " Number question grid with exclusive checkbox for each option.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241251",
        imgSrc:
          "https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Merged Question",
        description:
          " Number question grid with exclusive checkbox for each option 2.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241252",
        imgSrc:
          "https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Merged Question",
        description:
          " Show option selected from the dropdown list in one column ",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241259",
        imgSrc:
          "https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },

      {
        title: "Drop down",
        description:
          "Example question to fix columns on topmost side of the page when scrolling",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241258",
        imgSrc:
          "https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "AutoSum",
        description:
          " Calculating percentage distribution in an autosum/number grid",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241260",
        imgSrc:
          "https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Number question",
        description: "exclusive checkbox and autosum enabled for each column",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241253",
        imgSrc:
          "https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
      },
      {
        title: "Drop down and number",
        description:
          "Calculating percentage distribution in an drop down merged with number question",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241261",
        imgSrc:
          "https://cms.imgworlds.com/assets/473cfc50-242c-46f8-80be-68b867e28919.jpg?key=home-gallery",
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
            className="bg-[#F7F3F3] font-medium text-[13px] px-2 py-2 rounded-3xl shadow-lg cursor-pointer hover:scale-105 hover:shadow-[0_5px_15px_rgba(0,0,0,1)] transition-transform duration-300"
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
          className="bg-white  p-4  rounded-2xl"
          style={{ boxShadow: '0 0px 15px rgba(0, 0, 0, 0.50)' }}
        >
          <p className="text-[24px] font-semibold ">{option}</p>
          <div className="flex flex-wrap  md:gap-8 gap-2">
            {itemsData[option].map((item, idx) => (
              <div key={idx} className="py-4">
                <p className="text-[24px] font-medium">{item.title}</p>
                <p className="sm:w-[260px] sm:h-[80px] py-2">
                  {item.description}
                </p>
                <div className="card sm:w-[280px] sm:h-[170px] rounded-3xl bg-gradient-to-b from-[#6871f0] to-[rgb(9,102,241)] p-[3px] hover:scale-105 hover:shadow-[0_5px_15px_rgba(9,102,241)] transition-transform duration-300">
                  <a
                    href={item.linkk}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
