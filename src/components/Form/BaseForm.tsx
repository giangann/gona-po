import { Box, Stack } from "@mui/material";
import { FormButton, ThickTypo, ThinTypo } from "~/styles/styled/styled";

type BaseFormProps = {
  title: string;
  content: { [key: string]: string };
  action?: string;
  onSubmit?: () => void;
  disableBackground?: boolean;
};
export const BaseForm = (props: BaseFormProps) => {
  const { title, content, action, onSubmit, disableBackground = false } = props;
  const keysArr = Object.keys(content);
  const valueArr = Object.values(content);

  const handleSubmit = () => {
    console.log("submit");
  };
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: disableBackground ? "none" : "black",
      }}
      border="2px solid white"
    >
      <Box
        p={2}
        borderBottom="1px solid white"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <ThickTypo>{title}</ThickTypo>
      </Box>
      <Stack spacing={2} p={3}>
        {keysArr.map((item, index) => (
          <Stack>
            <ThinTypo>{item}</ThinTypo>
            <ThickTypo>{valueArr[index]}</ThickTypo>
          </Stack>
        ))}

        {/* <Stack>
          <ThinTypo>Activities:</ThinTypo>
          <ThickTypo>{demoData.activity}</ThickTypo>
        </Stack> */}
      </Stack>
      <Box
        p={2}
        borderTop="1px solid white"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <FormButton onClick={onSubmit || handleSubmit}>
          <ThickTypo>{action || "Submit"}</ThickTypo>
        </FormButton>
      </Box>
    </Box>
  );
};
