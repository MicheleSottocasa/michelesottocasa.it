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
import NavMobile from "./nav/mobile";
import NavDesktop from "./nav/desktop";
//
import React, { useState, useEffect } from "react";
import { HEADER } from "../config-layout";
import { portfolioMenu, adminMenu } from "./config-navigation";
import { usePathname } from "next/navigation";
import * as Types from "src/types";
//
import { HeaderShadow } from "../_common";

// ----------------------------------------------------------------------

export default function Header() {
  const path = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");
  const [menu, setMenu] = useState<Types.MenuEntry>(portfolioMenu);

  const theme = useTheme();

  const mdUp = useResponsive("up", "md");

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  const handleScroll = () => {
    const sections = document.querySelectorAll(".section");
    let currentSection = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= 0) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (path.includes("admin")) {
      setMenu(adminMenu);
    } else {
      setMenu(portfolioMenu);
    }
  }, [path]);

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
              data={menu}
              activeSection={activeSection}
            />
          )}

          <Stack
            alignItems="center"
            direction={{ xs: "row", md: "row-reverse" }}
          >
            {!mdUp && <NavMobile offsetTop={offsetTop} data={menu} />}
          </Stack>
        </Container>
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}
