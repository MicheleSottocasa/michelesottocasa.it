// @mui
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Badge, { badgeClasses } from "@mui/material/Badge";
// hooks
import { useOffSetTop } from "src/hooks/use-off-set-top";
import { useResponsive } from "src/hooks/use-responsive";
// theme
import { bgBlur } from "src/theme/css";
// components
import Logo from "src/components/logo";
//
import React, { useState, useEffect } from "react";
import { HEADER } from "../config-layout";
import { portfolioMenu } from "./config-navigation";
import NavMobile from "./nav/mobile";
import NavDesktop from "./nav/desktop";
//
import { HeaderShadow } from "../_common";

// ----------------------------------------------------------------------

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>(""); // Stato per l'elemento visibile

  const theme = useTheme();

  const mdUp = useResponsive("up", "md");

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  const handleScroll = () => {
    const sections = document.querySelectorAll(".section"); // Aggiungi la classe 'section' alle sezioni del tuo contenuto
    let currentSection = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= 0) {
        currentSection = section.id; // Imposta l'ID dell'elemento visibile
      }
    });

    setActiveSection(currentSection);
  };

  // console.log('Active section: ', activeSection);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(["height"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Container sx={{ height: 1, display: "flex", alignItems: "center" }}>
          <Badge
            sx={{
              [`& .${badgeClasses.badge}`]: {
                top: 8,
                right: -16,
              },
            }}
          >
            <Logo />
          </Badge>

          <Box sx={{ flexGrow: 1 }} />

          {mdUp && (
            <NavDesktop
              offsetTop={offsetTop}
              data={portfolioMenu}
              activeSection={activeSection}
            />
          )}

          <Stack
            alignItems="center"
            direction={{ xs: "row", md: "row-reverse" }}
          >
            {!mdUp && <NavMobile offsetTop={offsetTop} data={portfolioMenu} />}
          </Stack>
        </Container>
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}
