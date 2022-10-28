import { Box, Container } from "@mui/material";
import { BaseForm } from "~/components/Form/BaseForm";
import { sampleFormData } from "~/constants/form";
import { DetailDescriptionBlock } from "./DetailDescriptionBlock";

export const TripDetail = () => {
  const tripDetailData = sampleFormData[0].detail;
  const formOfTripOverviewData = tripDetailData?.activity.form;

  const tripOverviewDesc = tripDetailData?.trip_overview.description;
  const activityDesc = tripDetailData?.activity.description;
  return (
    <Box p={4} sx={{ backgroundColor: "black", position: "relative" }}>
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
