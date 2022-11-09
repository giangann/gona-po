import { Box, IconButton, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { REGISTER_FORM_TITLE } from "~/constants/constants";
import { yellow } from "~/styles/colors";
import { FormButton, ThickTypo, ThinTypo } from "~/styles/styled/styled";
import {
  IcSharpArrowDownward,
  IcTwotoneClose,
  MaterialSymbolsArrowInsert,
} from "../Icons";
import { RegisterTrip } from "./RegisterTrip";

type BaseFormProps = {
  title?: string;
  content: { [key: string]: string };
  action?: string;
  onSubmit?: () => void;
  disableBackground?: boolean;
  isAcceptExpand?: boolean;
  fullContent?: { [key: string]: string };
  handleGoBack?: () => void;
  center?: boolean;
};
export const BaseForm = (props: BaseFormProps) => {
  const {
    title,
    content,
    action,
    onSubmit,
    disableBackground = false,
    isAcceptExpand = false,
    handleGoBack,
    fullContent,
    center = false,
  } = props;
  const [formContent, setFormContent] = useState(content || fullContent);
  const [isExpand, setIsExpand] = useState(false);
  const keysArr = Object.keys(formContent);
  const valueArr = Object.values(formContent);
  const [openRegisterForm, setOpenRegisterForm] = useState(false);

  const handleExpand = () => {
    if (isExpand) {
      setFormContent(content);
      setIsExpand(false);
    } else {
      setFormContent(fullContent || content);
      setIsExpand(true);
    }
  };

  const handleSubmit = () => {
    console.log("submit");
    setOpenRegisterForm(true);
  };

  useEffect(() => {
    setFormContent(content);
  }, [content]);
  return (
    <Box
      sx={{
        width: {
          xs: isExpand ? "90vw" : 300,
          sm: isExpand && !openRegisterForm ? "70vw" : 350,
        },
        backgroundColor: disableBackground ? "none" : "black",
        borderRadius: 4,
      }}
      border="2px solid white"
    >
      {title ? (
        <Box
          p={{ xs: 2, sm: 2 }}
          borderBottom="1px solid white"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton onClick={handleExpand}>
            {isAcceptExpand && !openRegisterForm ? (
              isExpand ? (
                <IcSharpArrowDownward fontSize={24} />
              ) : (
                <MaterialSymbolsArrowInsert fontSize={24} />
              )
            ) : undefined}
          </IconButton>
          <ThickTypo>
            {openRegisterForm ? REGISTER_FORM_TITLE : title}
          </ThickTypo>
          <IconButton onClick={() => setOpenRegisterForm(false)}>
            {handleGoBack != null ? (
              openRegisterForm ? (
                <IcTwotoneClose />
              ) : undefined
            ) : undefined}
          </IconButton>
        </Box>
      ) : undefined}
      {openRegisterForm ? (
        <RegisterTrip />
      ) : (
        <Stack
          spacing={2}
          alignItems={center ? "center" : "unset"}
          sx={{
            padding: { xs: 1, sm: 2 },
            overflow: "auto",
            // height: isExpand ? "350px" : "unset",
            height: {
              xs: isExpand ? 350 : "unset",
              sm: isExpand ? 650 : "unset",
            },
            maxHeight: {
              sm: isExpand ? "unset" : 250,
            },
          }}
        >
          {keysArr.map((item, index) =>
            item !== "other" ? (
              <Stack alignItems={center ? "center" : "unset"} spacing={1}>
                <ThinTypo sx={{ color: center ? yellow["text_form"] : "" }}>
                  {item}
                </ThinTypo>
                <ThickTypo sx={{ fontSize: 14, letterSpacing: 1 }}>
                  {valueArr[index]}
                </ThickTypo>
              </Stack>
            ) : (
              valueArr[index]
            )
          )}
        </Stack>
      )}
      <Box
        p={1}
        m={1}
        border="1px solid white"
        sx={{ display: "flex", justifyContent: "center", borderRadius: 2 }}
      >
        <FormButton onClick={onSubmit || handleSubmit}>
          <ThickTypo>{action || "Submit"}</ThickTypo>
        </FormButton>
      </Box>
    </Box>
  );
};
