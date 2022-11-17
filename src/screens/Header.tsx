import {
  Box,
  Container,
  IconButton,
  MenuItem,
  MenuList,
  Popover,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { CustomDrawer } from "~/components/Drawer/CustomDrawer";
import { ListInsideDrawer } from "~/components/Drawer/ListInsideDrawer";
import { IcSharpDensityMedium } from "~/components/Icons";
import {
  CustomLink,
  HeaderLogoText,
  ToogleLanguageText,
} from "~/styles/styled/styled";
import "../index.css";
import { useTranslation } from "react-i18next";

type HeaderProps = {
  position: string;
};
export const Header = (props: HeaderProps) => {
  const { position } = props;
  const [openHeaderDrawer, setOpenHeaderDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [language, setLanguages] = useState();
  const { i18n } = useTranslation();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const LANGUAGES = [
    {
      name: "Tiếng Việt",
      symbol: "vi",
    },
    {
      name: "English",
      symbol: "en",
    },
  ];

  const handleCloseDrawer = () => {
    setOpenHeaderDrawer(false);
  };

  const handleToogleLanguage = (index: number) => {
    const chosenLanguage = LANGUAGES[index];

    localStorage.setItem("language", chosenLanguage.symbol);
    i18n.changeLanguage(chosenLanguage.symbol);
    setLang();

    handleClose();
  };

  const setLang = async () => {
    const symbol = await localStorage.getItem("language");
    if (symbol) {
      const l = LANGUAGES.find((i) => i.symbol === symbol);
      //@ts-ignore
      setLanguages(l?.symbol);
    } else {
      //@ts-ignore
      setLanguages("English");
    }
  };
  useEffect(() => {
    setLang();
  }, []);

  return (
    <Box sx={{ position: { position }, top: 0, zIndex: 2, width: "100%" }}>
      <Container>
        <Box p={{ xs: 2, sm: 5 }}>
          <CustomLink to="/">
            <HeaderLogoText className="header-text">GonaPo</HeaderLogoText>
          </CustomLink>
        </Box>
      </Container>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "28%", sm: "38%" },
          right: "3vw",
        }}
      >
        <>
          <IconButton onClick={handleClick} sx={{ color: "white", p: 2 }}>
            {/* @ts-ignore */}
            <ToogleLanguageText>{language?.toUpperCase()}</ToogleLanguageText>
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <MenuList>
              {LANGUAGES.map((item, index) => (
                <MenuItem
                  key={index}
                  onClick={() => handleToogleLanguage(index)}
                >
                  {item.symbol.toUpperCase()}
                </MenuItem>
              ))}
            </MenuList>
          </Popover>
        </>

        <IconButton
          onClick={() => setOpenHeaderDrawer(true)}
          sx={{ color: "white", p: 0 }}
        >
          <IcSharpDensityMedium fontSize={{ xs: 24, sm: 30 } as any} />
        </IconButton>
      </Box>

      <CustomDrawer
        open={openHeaderDrawer}
        handleClose={() => setOpenHeaderDrawer(false)}
      >
        <ListInsideDrawer handleCloseDrawer={handleCloseDrawer} />
      </CustomDrawer>
    </Box>
  );
};
