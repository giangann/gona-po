import { Box, Container } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { BaseForm } from "~/components/Form/BaseForm";
import { sampleFormData } from "~/constants/form";
import { DetailDescriptionBlock } from "./DetailDescriptionBlock";

export const TripDetail = () => {
  const params = useParams();

  const tripData = sampleFormData.filter((item) => item.slug === params.slug);
  const tripDetailData = tripData[0].detail;
  const defaultKey = Object.keys(tripDetailData)[0];
  const [formOfTripOverviewData, setFormOfTripOverviewData] = useState(
    tripDetailData[defaultKey].form
  );
  // const formOfTripOverviewData = tripDetailData?.activity.form;

  console.log(Object.keys(tripDetailData));
  console.log(tripDetailData["activity"]);

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const heightBrowser = window.innerHeight;

  const handleGoBack = () => {
    console.log("go back");
  };

  const handleChangeFormData = (key: string) => {
    setFormOfTripOverviewData(tripDetailData[key].form);
  };

  useEffect(() => {
    const handleAnimation = async () => {
      window.scrollTo(0, 0);
      await timeout(1500);
      window.scrollTo(0, heightBrowser);
    };
    handleAnimation();
  }, []);

  return (
    <Box
      id="scroll"
      sx={{ backgroundColor: "black", position: "relative", zIndex: 2 }}
    >
      <Container>
        {Object.keys(tripDetailData).map((item, index) => (
          <DetailDescriptionBlock
            key={index}
            ref_string={item}
            title={tripDetailData[item as any]?.description.title}
            content={tripDetailData[item as any]?.description.content}
            image={tripDetailData[item as any]?.description.image}
            handleChangeFormData={handleChangeFormData}
          />
        ))}
      </Container>
      <Box
        className="outer"
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        <Box
          className="layerBox"
          sx={{
            position: "sticky",
            top: 0,
            height: "100vh",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: "2vh",
              right: "5vw",
            }}
          >
            <BaseForm
              title={formOfTripOverviewData?.title || "Title"}
              action={formOfTripOverviewData?.action}
              content={formOfTripOverviewData?.content as any}
              fullContent={formOfTripOverviewData?.full_content as any}
              handleGoBack={handleGoBack}
              isAcceptExpand={true}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
