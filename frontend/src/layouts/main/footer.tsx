// @mui
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// routes
import { pathsMine } from "src/routes/paths";
import { RouterLink } from "src/routes/components";
// components
import Logo from "src/components/logo";
import Iconify from "src/components/iconify";

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: "About",
    children: [
      { name: "About me", href: pathsMine.aboutMe },
      { name: "My background", href: pathsMine.background },
      { name: "Projects", href: pathsMine.projects },
    ],
  },
  {
    headline: "Contact",
    children: [
      {
        name: "contact@michelesottocasa.it",
        href: "mailto:contact@michelesottocasa.it",
      },
    ],
  },
];

export const _socials = [
  {
    value: "facebook",
    name: "FaceBook",
    icon: "eva:facebook-fill",
    color: "#1877F2",
    path: "https://www.facebook.com/michele.sottocasa004",
  },
  {
    value: "instagram",
    name: "Instagram",
    icon: "ant-design:instagram-filled",
    color: "#E02D69",
    path: "https://www.instagram.com/sottocasa_michele/",
  },
  {
    value: "linkedin",
    name: "Linkedin",
    icon: "eva:linkedin-fill",
    color: "#007EBB",
    path: "https://www.linkedin.com/in/michele-sottocasa-4445861ab/",
  },
  {
    value: "twitter",
    name: "Twitter",
    icon: "eva:twitter-fill",
    color: "#00AAEC",
    path: "https://twitter.com/ilSotto04",
  },
];

// ----------------------------------------------------------------------

export default function Footer() {
  const mainFooter = (
    <Box
      component="footer"
      sx={{
        position: "relative",
        bgcolor: "background.default",
      }}
    >
      <Divider />

      <Container
        sx={{
          pt: 10,
          pb: 5,
          textAlign: { xs: "center", md: "unset" },
        }}
      >
        <Logo sx={{ mb: 3 }} />

        <Grid
          container
          justifyContent={{
            xs: "center",
            md: "space-between",
          }}
        >
          <Grid xs={8} md={3}>
            <Typography
              variant="h6"
              sx={{
                maxWidth: 100,
                mx: { xs: "auto", md: "unset", textAlign: "center" },
              }}
            >
              Living
              <br />
              learning
              <br />&<br />
              growing up
              <br />
              day by day
            </Typography>

            <Stack
              direction="row"
              justifyContent={{ xs: "center", md: "flex-start" }}
              sx={{
                mt: 3,
                mb: { xs: 5, md: 0 },
              }}
            >
              {_socials.map((social) => (
                <IconButton
                  href={social.path}
                  target="_blank"
                  key={social.name}
                  sx={{
                    "&:hover": {
                      bgcolor: alpha(social.color, 0.08),
                    },
                  }}
                >
                  <Iconify color={social.color} icon={social.icon} />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack spacing={5} direction={{ xs: "column", md: "row" }}>
              {LINKS.map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  alignItems={{ xs: "center", md: "flex-start" }}
                  sx={{ width: 1 }}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={RouterLink}
                      href={link.href}
                      color="inherit"
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography variant="caption" sx={{ mt: 10 }}>
          © All rights reserved
        </Typography>
      </Container>
    </Box>
  );

  // return isHome ? simpleFooter : mainFooter;
  return mainFooter;
}
