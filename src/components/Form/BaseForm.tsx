// @ts-nocheck
import { Box, Grid, IconButton, Stack } from "@mui/material";
import React, { useEffect, useMemo, useRef, useState } from "react";
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
  const [isExpand, setIsExpand] = useState(false);
  const [openRegisterForm, setOpenRegisterForm] = useState(false);
  const ref = useRef(null);
  const [outerHeight, setOuterHeight] = useState(200);
  const heightBrowser = window.innerHeight;

  const keysArr = isExpand
    ? Object.keys(fullContent as any)
    : Object.keys(content);
  const valueArr = isExpand
    ? Object.values(fullContent as any)
    : Object.values(content);

  const handleExpand = async () => {
    setIsExpand(!isExpand);
    await timeout(15);
    // @ts-ignore
    setOuterHeight(ref?.current?.clientHeight | 100);
  };

  const handleSubmit = () => {
    console.log("submit");
    setOpenRegisterForm(true);
    setOuterHeight(ref.current.clientHeight);
  };

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  useEffect(() => {
    if (ref?.current?.clientHeight < 0.7 * heightBrowser) {
      // @ts-ignore
      setOuterHeight(ref?.current?.clientHeight | 100);
    } else {
      setOuterHeight(heightBrowser * 0.7);
    }
  }, [content, openRegisterForm]);
  return (
    <Box
      sx={{
        backgroundColor: disableBackground ? "none" : "black",
        borderRadius: 4,
      }}
      border="2px solid white"
    >
      <Box sx={{ height: "fit-content" }}>
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

        <Box
          id="box-outer"
          sx={{
            width: {
              xs: isExpand ? "90vw" : 300,
              sm: isExpand && !openRegisterForm ? "70vw" : 300,
            },
            transition: "all 0.6s",
            height: isExpand
              ? { xs: 500, sm: 700 }
              : { xs: outerHeight, sm: outerHeight },
            overflow: "auto",
          }}
        >
          <Grid id="grid-inner" p={{ xs: 2 }} container rowGap={2} ref={ref}>
            {openRegisterForm ? (
              <RegisterTrip />
            ) : (
              <>
                {keysArr?.map((item, index) =>
                  item !== "other" ? (
                    <Grid item container spacing={0}>
                      <Grid
                        sx={{
                          display: "flex",
                          justifyContent: isExpand ? "center" : "start",
                          alignItems: "start",
                          paddingX: { xs: 1, sm: isExpand ? 2 : 0 },
                        }}
                        item
                        xs={12}
                        sm={isExpand ? 3 : 12}
                      >
                        <ThinTypo
                          sx={{ color: center ? yellow["text_form"] : "" }}
                        >
                          {item}
                        </ThinTypo>
                      </Grid>
                      <Grid item xs={12} sm={isExpand ? 9 : 12}>
                        <ThickTypo sx={{ fontSize: 14, letterSpacing: 1 }}>
                          {valueArr[index]}
                        </ThickTypo>
                      </Grid>
                    </Grid>
                  ) : (
                    valueArr[index]
                  )
                )}
              </>
            )}
          </Grid>
        </Box>
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
    </Box>
  );
};
