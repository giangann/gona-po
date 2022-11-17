import { Box } from "@mui/material";
import { useParams } from "react-router";
import { blogAndTipHomePage } from "~/constants/form";
import { WhiteTypo } from "~/styles/styled/styled";
import { BlogCardWithImageAndTitle } from "../HomePage/BlogCardWithImageAndTitle";
import { useTranslation } from "react-i18next";
export const BlogDetail = () => {
  const params = useParams();
  // @ts-ignore
  const blogDetailData = blogAndTipHomePage?.blog[params?.id];

  const { t } = useTranslation();
  return (
    <Box sx={{ backgroundColor: "black" }}>
      <WhiteTypo>{params.id} {t('market_cap')}</WhiteTypo>
      <BlogCardWithImageAndTitle
        image={blogDetailData.image}
        title={blogDetailData.title}
        tag={blogDetailData.tag}
        date={blogDetailData.date}
        view={blogDetailData.view}
      />
    </Box>
  );
};
