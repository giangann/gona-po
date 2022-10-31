import { Box, Stack } from "@mui/material";
import { FormButton, ThickTypo, ThinTypo } from "~/styles/styled/styled";

type BaseFormProps = {
  title?: string;
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
      {title ? (
        <Box
          p={{ xs: 2, sm: 2 }}
          borderBottom="1px solid white"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <ThickTypo>{title}</ThickTypo>
        </Box>
      ) : undefined}
      <Stack spacing={{ xs: 1, sm: 2 }} p={{ xs: 2, sm: 3 }}>
        {keysArr.map((item, index) =>
          item !== "other" ? (
            <Stack>
              <ThinTypo>{item}</ThinTypo>
              <ThickTypo>{valueArr[index]}</ThickTypo>
            </Stack>
          ) : (
            valueArr[index]
          )
        )}
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
