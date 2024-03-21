import { Box, Container, Hidden } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { TripInfoBottomDrawer } from "~/components/Drawer/TripInfoBottomDrawer";
import { BaseForm } from "~/components/Form/BaseForm";
import { allTripsData } from "~/constants/form";
import { DetailDescriptionBlock } from "./DetailDescriptionBlock";

export const TripDetail = () => {
  const params = useParams();

  const tripData = allTripsData.filter((item) => item.slug === params.slug);
  const tripDetailData: { [key: string]: any } = tripData[0].detail;
  const defaultKey = Object.keys(tripDetailData)[0]; // trip_overview
  const [formOfTripOverviewData, setFormOfTripOverviewData] = useState(
    tripDetailData[defaultKey].form
  );

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const heightBrowser = window.innerHeight;

  const handleGoBack = () => {
  };

  const handleChangeFormData = (key: string) => {
    setFormOfTripOverviewData(tripDetailData[key].form);
  };

  useEffect(() => {
    const handleAnimation = async () => {
      window.scrollTo({ top: 0, behavior: "auto" });
      await timeout(1000);
      window.scrollTo({ top: heightBrowser, behavior: "smooth" });
    };
    handleAnimation();
  }, []);

  //
  // get the sticky element
  // const triggerSticky = () => {
  //   const stickyElm = document.getElementById("sticky-box");

  //   const observer = new IntersectionObserver(
  //     ([e]) => e.target.classList.toggle("isSticky", e.intersectionRatio < 1),
  //     { threshold: [1] }
  //   );

  //   console.log("type of sticky");
  //   observer.observe(stickyElm);
  // };

  //
  return (
    <Box
      id="scroll"
      sx={{
        backgroundColor: "black",
        position: "relative",
        zIndex: 2,
        paddingBottom: { xs: "100px", sm: 0 },
      }}
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

      <Hidden smDown>
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
                right: { xs: "5vw", sm: "15vw" },
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
      </Hidden>

      <Hidden smUp>
        <Box
          className="outer"
          sx={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
            zIndex: 5,
          }}
        >
          <Box
            id="sticky-box"
            sx={{
              position: "sticky",
              top: "50vh",
              height: "50vh",
              width: "100%",
              boxSizing: "border-box",
              // backgroundColor: "pink",
              // opacity: 0.5,
            }}
          >
            <Box
              className="layerBox"
              sx={{
                position: "absolute",
                bottom: 0,
                backgroundColor: "black",
                // height: 90,
                width: "100%",
                boxSizing: "border-box",
                borderTop: "2px solid white",
              }}
            >
              <TripInfoBottomDrawer
                title={formOfTripOverviewData.title || "Title"}
                action={formOfTripOverviewData.action}
                content={formOfTripOverviewData.full_content}
                subTitle={formOfTripOverviewData.short_info}
              />
            </Box>
          </Box>
          {/* <Box
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
                right: { xs: "5vw", sm: "15vw" },
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
          </Box> */}
        </Box>
      </Hidden>
    </Box>
  );
};
