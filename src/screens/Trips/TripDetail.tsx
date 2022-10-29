import { Box, Container } from "@mui/material";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { useParams } from "react-router";
import { BaseForm } from "~/components/Form/BaseForm";
import { sampleFormData } from "~/constants/form";
import { bannerAtom } from "~/libs/atom/slideAtom";
import { DetailDescriptionBlock } from "./DetailDescriptionBlock";

export const TripDetail = () => {
  const params = useParams();

  const tripData = sampleFormData.filter((item) => item.slug === params.slug);
  const tripDetailData = tripData[0].detail;
  const formOfTripOverviewData = tripDetailData?.activity.form;

  const tripOverviewDesc = tripDetailData?.trip_overview.description;
  const activityDesc = tripDetailData?.activity.description;

  const [banner, setBanner] = useAtom(bannerAtom);

  useEffect(() => {
    setBanner({
      title: tripData[0].description,
      image: tripData[0].image,
    });
  }, []);

  console.log("params", params);
  return (
    <Box sx={{ backgroundColor: "black", position: "relative", zIndex: 2 }}>
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
        <Box
          sx={{ position: "absolute", top: 0, width: "100vw", height: "100%" }}
        >
          <Box
            className="layerBox"
            sx={{ position: "sticky", top: 0, height: "100vh", width: "100vw" }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "45vh",
                right: "calc(400px + 2vw)",
                width: 400,
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
      </Container>
    </Box>
  );
};
