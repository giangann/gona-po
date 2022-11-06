import { Box, Container } from "@mui/material";
import { blogAndTipHomePage } from "~/constants/form";
import {
  CustomLink,
  fontSizeContentResponsive,
  ImageTitle,
  WhiteTypo,
} from "~/styles/styled/styled";
import { BlogCardWithImageAndTitle } from "./BlogCardWithImageAndTitle";

export const Blog = () => {
  return (
    <Box sx={{ backgroundColor: "black", position: "relative", zIndex: 2     }}>
      <Container>
        <ImageTitle>{blogAndTipHomePage.title.toUpperCase()}</ImageTitle>
        <CustomLink to="#">
          <WhiteTypo
            sx={{ fontWeight: 200, opacity: 0.6, ...fontSizeContentResponsive }}
          >{`${blogAndTipHomePage.view_more_text} >>`}</WhiteTypo>
        </CustomLink>
        {blogAndTipHomePage.blog.map((item) => (
          <BlogCardWithImageAndTitle
            image={item.image}
            title={item.title}
            tag={item.tag}
            date={item.date}
            view={item.view}
          />
        ))}
      </Container>
    </Box>
  );
};
