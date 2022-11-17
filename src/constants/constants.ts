import i18n from "~/libs/atom/lang/translations/i18n";
import { imageBanner } from "./images";
import { Banner } from "./types";

export const BANNER_TITLE = "Cùng nhau đi khám phá Philipines";
export const DEFAULT_ACTIVE_TAB_ABOUT = "1";
export const REGISTER_FORM_TITLE = i18n.t('form.register_trip')

export const BANNER: Banner = {
  title: BANNER_TITLE,
  image: imageBanner,
};
