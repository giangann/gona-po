import { Grid } from "@mui/material";
import { CustomizedTextField } from "../CustomInput";

export const RegisterTrip = () => {
  const gridFull = { xs: 12 };

  return (
    <Grid container spacing={2} px={2}>
      <Grid item {...gridFull}>
        <CustomizedTextField label="Tên" placeholder="Tên" />
      </Grid>
      <Grid item {...gridFull}>
        <CustomizedTextField
          label="Địa chỉ email"
          placeholder="Địa chỉ email"
        />
      </Grid>
      <Grid item {...gridFull}>
        <CustomizedTextField
          label="Số lượng"
          placeholder="Số lượng người tham gia"
        />
      </Grid>
    </Grid>
  );
};
