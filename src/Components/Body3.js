import React, { useRef, useState } from "react";

export default function Body3() {
  const options = [
    "Text Highlighter and HeatMap",
    "Shopping Cart",
    // "Card sort",
    "Conjoint",
    "Custom Set up",
    "Image and video",
    "Drag and drop",
    "Single-Select",
    "Multi-Select",
    "Rating",
    "Open-end",
  ];

  const itemsData = {
    "Single-Select": [
      {
        title: "Simple Radio",
        description: "Choose a single option from a list.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241268",
        imgSrc: "./singleselect/SimpleRadio.gif",
      },
      
      {
        title: "Single Select Button",
        description: "Select one option using buttons.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241274",
        imgSrc: "./singleselect/SingleselectButton.gif",
      },
      {
        title: "Single Select Grid",
        description: "Select one option per row in a grid.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241273",
        imgSrc: "./singleselect/Singleselectgrid.gif",
      },
      {
        title: "Single Select Button Grid",
        description: "Choose a single option in a grid format.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241275",
        imgSrc: "./singleselect/Singleselectbuttongrid.gif",
      },
      {
        title: "This or That",
        description: "Choose between two options.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241281",
        imgSrc: "./singleselect/ThisorThat.gif",
      },
      {
        title: "Dropdown",
        description: "Choose an option from a dropdown menu.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241280",
        imgSrc: "./singleselect/Dropdown.gif",
      },
    ],
    "Shopping Cart":[
      {
        title: "Shopping Cart",
        description: "Select and manage items in a cart.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241292",
        imgSrc: "./first/ShoppingCart.gif",
      },
      {
        title: "Shopping cart conjoint",
        description: "Select and manage items in a cart.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/240511?debug=respview",
        imgSrc: "./singleselect/SimpleRadio.gi",
      },
    ],

    "Conjoint":[
      {
        title: "Maxdiff Survey",
        description: ".",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/240508?id=test&debug=respview",
        imgSrc: "./first/ShoppingCart.gi",
      },
      {
        title: "Complex B2B DCM",
        description: ".",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/240507?debug=respview",
        imgSrc: "./singleselect/SimpleRadio.gi",
      },
      {
        title: "DCM normal",
        description: ".",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/240509?debug=respview",
        imgSrc: "./singleselect/SimpleRadio.gi",
      },
    ],

    "Multi-Select": [
      {
        title: "Multi Select Grid",
        description: "Choose multiple options in a grid.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241277",
        imgSrc: "./multiselect/MultiselectGrid.gif",
      },
      {
        title: "Multi Select",
        description: "Choose multiple options.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241276",
        imgSrc: "./multiselect/Multiselect.gif",
      },
      {
        title: "Multi Select Button",
        description: "Select multiple options using buttons.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241278",
        imgSrc: "./multiselect/MultiselectButton.gif",
      },
      {
        title: "Multi Select Grid Button",
        description: "Select multiple options in a grid format.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241279",
        imgSrc: "./multiselect/MultiselectGridButton.gif",
      },
    ],
    Rating: [
      {
        title: "Single Select Rating",
        description: "Rate on a 0-10 scale.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241299",
        imgSrc: "./rating/SingleSelectRating.gif ",
      },
      {
        title: "Single Select Rating",
        description: "Rate on a 1-5 scale.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241296",
        imgSrc: "./rating/SingleSelectRating2.gif ",
      },
      {
        title: "Smiley Rating",
        description: "Rate using smiley faces.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241298",
        imgSrc: "./rating/SmileyRating.gif",
      },
      {
        title: "Like-Dislike Rating",
        description: "Rate using thumbs up or down.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241297",
        imgSrc: "./rating/LikeDislikeRating.gif",
      },
      {
        title: "Drag Rating Scale",
        description: "Rate by dragging items on a scale.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241284",
        imgSrc: "./rating/Dragratingscale.gif",
      },
      {
        title: "Slider Rating",
        description: "Rate items by adjusting sliders.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241286",
        imgSrc: "./rating/SliderRatingScale.gif",
      },
      {
        title: "Number slider",
        description: "Select a value using a slider.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241287",
        imgSrc: "./rating/NumberSlider.gif",
      },

      {
        title: "Button Rating",
        description: "Rate using a button scale.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241282",
        imgSrc: "./rating/Buttonrating.gif",
      },
      {
        title: "Star Rating",
        description: "Rate using stars.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241283",
        imgSrc: "./rating/StarRating.gif",
      },
    ],
    "Open-end": [
      {
        title: " Numeric Box Grid",
        description: "Question trigger based on response.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241241",
        imgSrc: "./openend/Numericbox.gif",
      },
      {
        title: "Numeric box",
        description: "Question trigger based on response.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241242",
        imgSrc: "./openend/NumberboxGrid.gif",
      },
      {
        title: "Open end",
        description: "Question trigger based on response of 'First Box’.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241243",
        imgSrc: "./openend/Customtextbox.gif",
      },
      {
        title: "Custom textbox",
        description: "Enter the phone number with extension.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241245",
        imgSrc: "./openend/Openend.gif",
      },
    ],

    "Drag and drop": [
      {
        title: "Drag and Drop",
        description: "Drag items to desired locations.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241288",
        imgSrc: "./dragdrop/Draganddrop.gif",
      },
      {
        title: " Drag and Drop Images",
        description: " image drag and drop with enlarge image property",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241254",
        imgSrc: "./dragdrop/DragandDropImage.gif",
      },
      {
        title: " Drag and Drop Images",
        description: " image drag and drop with enlarge image property",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/240510?debug=respview",
        imgSrc: "./dragdrop/DragandDropImage.gi",
      },
    ],
    "Image and video": [
      {
        title: " Image",
        description: "Question based on 'Time interval'.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241244",
        imgSrc: "./imagevideo/CustomSetup9.gif",
      },

      {
        title: "Image Magnifier",
        description: "It will zoom on image when hover.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241248",
        imgSrc: "./imagevideo/ImageMagnifier.gif",
      },
      {
        title: "Image pop-up on click",
        description: "Image get zoom on clicking it .",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241249",
        imgSrc: "./imagevideo/Imagepopuponclick.gif",
      },
      {
        title: "Image on hover",
        description: "Image will show when hover on text .",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241250",
        imgSrc: "./imagevideo/ImageonHover.gif",
      },
      {
        title: "Video Player",
        description: "Watch a video and respond.",
        linkk: " https://thsurveys.decipherinc.com/survey/selfserve/53b/241291",
        imgSrc: "./imagevideo/VideoPlayer.gif",
      },
      {
        title: "Video rating",
        description: "Watch a video and rate.",
        linkk: " https://thsurveys.decipherinc.com/survey/selfserve/53b/240830",
        imgSrc: "./imagevideo/Videorating.gif",
      },
    ],

    "Text Highlighter and HeatMap": [
     
      {
        title: "Text Highlighter",
        description: "Highlighter the text which you like by hovering over it .",
        linkk:
          "https://thsurveys.decipherinc.com/survey/selfserve/53b/250100#?",
        imgSrc: "./first/texthighter.gif",
      },
  

      {
        title: "Card Sort Multi-Select",
        description: "Sort multiple items into categories.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241290",
        imgSrc: "./first/CardSortMultiSelect.gif",
      },

      
      {
        title: "Image HeatMap",
        description: "Participants highlight areas of interest on an image.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/250101",
        imgSrc: "./first/ImageHeatMap.gif",
      },

      {
        title: "Card Sort Single Select",
        description: "Sort items into categories with single selection.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241289",
        imgSrc: "./first/CardSortSingleselect.gif",
      },

      {
        title: "Card Rating",
        description: "Rate items by selecting cards.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241285",
        imgSrc: "./first/CardRating.gif",
      },
    ],
    "Custom Set up": [
      {
        title: "Radio",
        description: "Trigger based on selection.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241237",
        imgSrc: "./custom/Radio-1.gif",
      },
      {
        title: "Radio",
        description: "Open-end trigger based on selection.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241238",
        imgSrc: "./custom/Radio-2.gif",
      },
      {
        title: "Multicheck",
        description: "Trigger subgroups dynamically on selection.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241239",
        imgSrc: "./custom/Multicheck.gif",
      },
      {
        title: " Radio Grid",
        description:
          " Question trigger based on selction of 'Not very likely' & 'Not at all likely'.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241240",
        imgSrc: "./custom/RadioGrid.gif",
      },
      {
        title: "Single Select",
        description:
          "Select one option with logo and description layout (1-10 scale).",
        linkk:
          "https://thsurveys.decipherinc.com/survey/selfserve/53b/241264?_dj#",
        imgSrc: "./custom/Custom-SetupSingleselect.gif",
      },
      {
        title: "Single Select",
        description:
          "Select one option with logo and description layout (1-5 scale).",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241265",
        imgSrc: "./custom/Custom-SetupSingleselect1-5.gif",
      },

      {
        title: " Slider with exclusive None",
        description: " Custom Slider setup with exclusive option.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241247",
        imgSrc: "./custom/Sliderwithexclusivenone.gif",
      },
      {
        title: "Merged Question",
        description:
          " Number question grid with exclusive checkbox for each option.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241251",
        imgSrc: "./custom/Mergedquestion-1.gif",
      },
      {
        title: "Merged Question",
        description:
          " Number question grid with exclusive checkbox for each option 2.",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241252",
        imgSrc: "./custom/Mergedquestion-2.gif",
      },
      {
        title: "Merged Question",
        description:
          " Show option selected from the dropdown list in one column ",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241259",
        imgSrc: "./custom/Mergedquestion-3.gif",
      },

      {
        title: "Drop down",
        description:
          "question to fix col on topmost side of the page when scrolling",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241258",
        imgSrc: "./custom/Dropdowncustom.gif",
      },
      {
        title: "AutoSum",
        description:
          " Calculating percentage distribution in an autosum/number grid",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241260",
        imgSrc: "./custom/Autosum.gif",
      },
      {
        title: "Number question",
        description: "exclusive checkbox and autosum enabled for each column",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241253",
        imgSrc: "./custom/Numberquestion.gif",
      },
      {
        title: "Drop down and number",
        description:
          "Cal % distribution in an drop down merged with number question",
        linkk: "https://thsurveys.decipherinc.com/survey/selfserve/53b/241261",
        imgSrc: "./custom/Dropwdownandnumber.gif",
      },
    ],
  };

  const [expandedSection, setExpandedSection] = useState(options[0]); // Default to the first section

  const toggleSection = (option) => {
    setExpandedSection((prev) => (prev === option ? null : option));
  };
  return (
    <div className="xl:px-[70px] lg:px-[50px] md:px-[30px] px-[24px] font-serif space-y-8">
      <div className="text-[32px] font-medium  ">
        Question Database
        </div>
      {options.map((option, index) => (
        <div key={index} className="space-y-4">
          {/* Heading Section */}
          <div
            className="w-full bg-white text-black px-4 py-2 rounded-xl shadow-lg cursor-pointer flex justify-between items-center"
            onClick={() => toggleSection(option)}
            style={{ boxShadow: "0 0px 15px rgba(46, 72, 255, 0.50)" }}
          >
            <p className="font-medium text-[16px]">{option}</p>
            <span className="text-[20px]">
              {expandedSection === option ? "▲" : "▼"}
            </span>
          </div>

          {/* Items Section */}
          {expandedSection === option && (
            <div
              className="bg-white p-4 rounded-2xl transition-all duration-300"
              style={{ boxShadow: "0 0px 15px rgba(46, 72, 255, 0.50)" }}
            >
              <div className="flex flex-wrap justify-between md:justify-normal md:gap-8 gap-2">
                {itemsData[option]?.map((item, idx) => (
                  <div key={idx} className="">
                    <p className="text-[20px] font-medium">{item.title}</p>
                    <p className="sm:w-[200px] sm:h-[50px] text-[12px] py-2">
                      {item.description}
                    </p>
                    <div className="card sm:w-[200px] sm:h-[110px] h-[250px] rounded-3xl bg-gradient-to-b from-[#6871f0] to-[rgb(9,102,241)] p-[3px] hover:scale-105 hover:shadow-[0_5px_15px_rgba(9,102,241)] transition-transform duration-300">
                    <a
  href="#"
  onClick={(e) => {
    e.preventDefault(); // Prevent default link behavior
    window.open(
      item.linkk,
      "_blank",
      "width=1000,height=800,scrollbars=yes,resizable=yes"
    );
  }}
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
          )}
        </div>
      ))}
    </div>
  );
}
