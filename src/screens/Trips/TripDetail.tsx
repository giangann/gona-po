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
  const formOfTripOverviewData = tripDetailData?.activity.form;

  const tripOverviewDesc = tripDetailData?.trip_overview.description;
  const activityDesc = tripDetailData?.activity.description;

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const heightBrowser = window.innerHeight;

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
        <DetailDescriptionBlock
          title={tripOverviewDesc?.title}
          content={tripOverviewDesc?.content}
          image={tripOverviewDesc?.image}
        />
        <DetailDescriptionBlock
          title={activityDesc?.title}
          content={activityDesc?.content}
          image={activityDesc?.image}
        />
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
              width: { xs: 300, sm: 400 },
            }}
          >
            <BaseForm
              title={formOfTripOverviewData?.title || "Title"}
              action={formOfTripOverviewData?.action}
              content={formOfTripOverviewData?.content as any}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
