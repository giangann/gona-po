import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import {
  BoxCenter,
  DescriptionTitleText,
  FormButton,
  MobileInfoTitleBottomDrawer,
  ThickTypo,
  ThinTypo,
  WhiteOutlinedButton,
} from "~/styles/styled/styled";
import { RegisterTrip } from "../Form/RegisterTrip";
import { IcBaselineArrowUpward, IcSharpArrowDownward } from "../Icons";
import { MobileCustomBottomDrawer } from "./MobileCustomBottomDrawer";
type TripInfoBottomDrawerProps = {
  title: string;
  subTitle: string;
  content: { [key: string]: string };
  action?: string;
};
export const TripInfoBottomDrawer = (props: TripInfoBottomDrawerProps) => {
  const { title, subTitle, content, action } = props;
  const [isExpand, setIsExpand] = useState(false);
  const [openRegisterForm, setOpenRegisterForm] = useState(false);
  const ref = useRef(null);
  const [drawerHeight, setDrawerHeight] = useState(70);

  const keysArr = Object.keys(content);
  const valueArr = Object.values(content);

  const toogleExpand = () => {
    setIsExpand(!isExpand);
  };
  const handleSubmit = () => {
    console.log("submit");
    setOpenRegisterForm(true);
  };

  useEffect(() => {
    // @ts-ignore
    setDrawerHeight(ref.current.clientHeight);
  }, [title]);
  return (
    <Box
      sx={{
        // width: "100%",
        height: isExpand ? "100vh" : drawerHeight,
        position: "relative",
        transition: "all 0.6s",
        paddingX: 2,
        paddingY: 1,
        boxSizing: isExpand ? "border-box" : "unset",
      }}
    >
      <Box sx={{ overflow: "auto" }}>
        <Box ref={ref}>
          <MobileInfoTitleBottomDrawer sx={{ mb: 1 }}>
            {title}
          </MobileInfoTitleBottomDrawer>
          <MobileInfoTitleBottomDrawer
            sx={{ textDecoration: "none", letterSpacing: 1 }}
          >
            {subTitle}
          </MobileInfoTitleBottomDrawer>
        </Box>

        <IconButton
          onClick={toogleExpand}
          sx={{ position: "absolute", right: 10, top: 0 }}
        >
          {isExpand ? (
            <IcSharpArrowDownward fontSize={24} />
          ) : (
            <IcBaselineArrowUpward fontSize={24} />
          )}
        </IconButton>

        {isExpand ? (
          <Box sx={{ height: "90vh" }}>
            {keysArr.map((item, index) => (
              <Box mt={3}>
                <ThinTypo>{item}</ThinTypo>
                <ThickTypo sx={{ fontSize: 14, letterSpacing: 1 }}>
                  {valueArr[index]}
                </ThickTypo>
              </Box>
            ))}
          </Box>
        ) : undefined}
      </Box>

      {isExpand ? (
        <Box
          p={1}
          py={2}
          sx={{
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "center",
            boxShadow: "0px -22px 39px 7px rgba(0,0,0,1)",
            position: "absolute",
            bottom: 0,
            left: 0,
            backgroundColor: "black",
            width: "100%",
          }}
        >
          <Box sx={{ px: 2, py: 1, borderRadius: 2 }} border="1px solid white">
            <FormButton onClick={handleSubmit}>
              <ThickTypo>{action || "Submit"}</ThickTypo>
            </FormButton>
          </Box>
        </Box>
      ) : undefined}

      <MobileCustomBottomDrawer
        open={openRegisterForm}
        handleClose={() => setOpenRegisterForm(false)}
      >
        <Box sx={{ marginY: 2 }}>
          <DescriptionTitleText sx={{ textAlign: "center" }}>
            Đăng ký chuyến đi
          </DescriptionTitleText>
        </Box>
        <RegisterTrip />
        <BoxCenter sx={{ mt: 2 }}>
          <WhiteOutlinedButton sx={{ py: 1, px: 4 }}>
            Đăng ký
          </WhiteOutlinedButton>
        </BoxCenter>
      </MobileCustomBottomDrawer>
    </Box>
  );
};
