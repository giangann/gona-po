import { Grid } from "@mui/material";
import { CustomizedTextField } from "../CustomInput";
import { useTranslation } from "react-i18next";

export const RegisterTrip = () => {
  const gridFull = { xs: 12 };
  const { t } = useTranslation();
  return (
    <Grid container spacing={2} px={2}>
      <Grid item {...gridFull}>
        <CustomizedTextField
          label={t("form.name")}
          placeholder={t("form.name")}
        />
      </Grid>
      <Grid item {...gridFull}>
        <CustomizedTextField
          label={t('form.email')}
          placeholder={t('form.email')}
        />
      </Grid>
      <Grid item {...gridFull}>
        <CustomizedTextField
          label={t('amount')}
          placeholder={t('form.amount')}
        />
      </Grid>
    </Grid>
  );
};
