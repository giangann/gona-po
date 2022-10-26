import { Box, Button, IconButton, Stack } from "@mui/material";
import { sampleFormData } from "~/constants/form";
import { HeaderLogoText, WhiteTypo } from "~/styles/styled/styled";
import { IcTwotoneClose } from "../Icons";
import { TripInformationCard } from "./TripInformationCard";

type ListInsideDrawerProps = {
  handleCloseDrawer?: () => void;
};
export const ListInsideDrawer = (props: ListInsideDrawerProps) => {
  const { handleCloseDrawer } = props;
  return (
    <Stack>
      <Box sx={{ position: "relative" }}>
        <Box p={2}>
          <HeaderLogoText sx={{ color: "white" }}>GonaPo</HeaderLogoText>
        </Box>
        <Box sx={{ position: "absolute", top: "38%", right: "3vw" }}>
          <IconButton onClick={handleCloseDrawer} sx={{ color: "white", p: 0 }}>
            <IcTwotoneClose fontSize={30} />
          </IconButton>
        </Box>

        {/* For desktop */}
        <Stack direction="row" justifyContent="center" spacing={10}>
          <Button>
            <WhiteTypo>About</WhiteTypo>
          </Button>
          <Button>
            <WhiteTypo>Contact</WhiteTypo>
          </Button>
        </Stack>

        <Stack
          direction="row"
          justifyContent="center"
          sx={{ border: "1px solid white", width: "60%", margin: "30px auto" }}
        >
          {sampleFormData.map((item, index) => (
            <TripInformationCard
              title={item.title}
              date={item.date}
              image={item.image}
            />
          ))}
        </Stack>

        {/* For mobile */}
      </Box>
    </Stack>
  );
};
