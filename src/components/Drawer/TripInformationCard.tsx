import { Box, Stack } from "@mui/material";
import { ThickTypo } from "~/styles/styled/styled";

export type TripInformationCardProps = {
  image?: string;
  title?: string;
  date?: string;
};
export const TripInformationCard = (props: TripInformationCardProps) => {
  const { title, date, image } = props;

  return (
    <Box sx={{ borderRight: "1px solid white" }}>
      <Stack spacing={2}>
        <Box
          component="img"
          src={image}
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Stack>
          <ThickTypo>{title}</ThickTypo>
          <ThickTypo>{date}</ThickTypo>
        </Stack>
      </Stack>
    </Box>
  );
};
