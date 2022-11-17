import { TextField } from "@mui/material";
import "./style.css";

type CustomizedTextFieldProps = {
  label?: string;
  helperText?: string;
  placeholder?: string;
};
export const CustomizedTextField = (props: CustomizedTextFieldProps) => {
  const { label, helperText, placeholder } = props;

  return (
    <TextField
      variant="outlined"
      fullWidth
      id="standard-textarea"
      label={label || "Label for textfield"}
      helperText={helperText || null}
      placeholder={placeholder || "Placeholder"}
      multiline
      sx={{
        color: "white",
        "& label.Mui-focused": {
          color: "white",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "white",
        },
        "& .css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input": {
          color: "white",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "white",
          },
          "&:hover fieldset": {
            borderColor: "white",
          },
          "&.Mui-focused fieldset": {
            borderColor: "white",
          },
        },
        "& .MuiInputLabel-root": {
          color: "#ffffff99",
        },
      }}
    />
  );
};
