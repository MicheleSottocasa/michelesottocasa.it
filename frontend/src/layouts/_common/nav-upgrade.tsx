// @mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
// routes
import { paths } from "src/routes/paths";
// components
import Label from "src/components/label";

// ----------------------------------------------------------------------

export default function NavUpgrade() {
  return (
    <Stack
      sx={{
        px: 2,
        py: 5,
        textAlign: "center",
      }}
    >
      <Stack alignItems="center">
        <Box sx={{ position: "relative" }}>
          <Label
            color="success"
            variant="filled"
            sx={{
              top: -6,
              px: 0.5,
              left: 40,
              height: 20,
              position: "absolute",
              borderBottomLeftRadius: 2,
            }}
          >
            Free
          </Label>
        </Box>

        <Button
          variant="contained"
          href={paths.underlabs}
          target="_blank"
          rel="noopener"
        >
          Upgrade to Pro
        </Button>
      </Stack>
    </Stack>
  );
}
