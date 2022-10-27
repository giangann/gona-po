import ReactFullpage from "@fullpage/react-fullpage";
import { Box } from "@mui/material";
import { useState } from "react";
import { ImageSlideItem } from "~/components/ImageSlideItem";
import { imageSlideHomePage } from "~/constants/images";
import "../index.css";

export const SlideFullPage = () => {
  const originalColors = [
    "#ff5f45",
    "#0798ec",
    "#fc6c7c",
    "#435b71",
    "orange",
    "blue",
    "purple",
    "yellow",
  ];
  const SEL = "custom-section";
  const SECTION_SEL = `.${SEL}`;
  const anchors = ["firstPage", "secondPage", "thirdPage"];

  const [sectionsColor, setSectionsColor] = useState([...originalColors]);
  const [fullpages, setFullpages] = useState([
    {
      text: "Section 1",
    },
    {
      text: "Section 2",
    },
    {
      text: "Section 3",
    },
  ]);

  //   onLeave(origin, destination, direction) {
  //     console.log('onLeave', { origin, destination, direction });
  //     // arguments are mapped in order of fullpage.js callback arguments do something
  //     // with the event
  //   }

  const handleChangeColors = () => {
    const newColors =
      sectionsColor[0] === "yellow"
        ? [...originalColors]
        : ["yellow", "blue", "white"];
    setSectionsColor(newColors);
  };

  return (
    <Box>
      <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        //   navigat
        sectionsColor={["#7fff00", "#00ffff", "#29ab87"]}
        onLeave={(origin, destination, direction) => {
          console.log("onLeave event", { origin, destination, direction });
        }}
        render={({ state, fullpageApi }) => {
          console.log("render prop change", state, fullpageApi);

          return (
            <div>
              {imageSlideHomePage.map((item, index) => (
                <div className="section">
                  <ImageSlideItem key={index} image={item} />
                </div>
              ))}
            </div>
            // <div>
            //   <div className="section">
            //     <h3>Section 1</h3>
            //   </div>
            //   <div className="section">
            //     <h3>Section 2</h3>
            //   </div>
            //   <div className="section">
            //     <h3>Section 3</h3>
            //   </div>
            // </div>
          );
        }}
      />
    </Box>
  );
};
