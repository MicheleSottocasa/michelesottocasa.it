import { useRef } from 'react';
// @mui
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
// _mock
import { _socials } from 'src/_mock';
// types
import { IUserProfile, IUserProfilePost } from 'src/types/user';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  info: IUserProfile;
};

export default function ProfileHome({ info }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleAttach = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const renderAbout = (
    <Card>
      <CardHeader title="About" />

      <Stack spacing={2} sx={{ p: 3 }}>
        <Box sx={{ typography: 'body2' }}>{info.quote}</Box>

        <Stack direction="row" spacing={2}>
          <Iconify icon="mingcute:location-fill" width={24} />

          <Box sx={{ typography: 'body2' }}>
            {`Live at `}
            <Link variant="subtitle2" color="inherit">
              {info.country}
            </Link>
          </Box>
        </Stack>

        <Stack direction="row" sx={{ typography: 'body2' }}>
          <Iconify icon="fluent:mail-24-filled" width={24} sx={{ mr: 2 }} />
          {info.email}
        </Stack>

        <Stack direction="row" spacing={2}>
          <Iconify icon="ic:round-business-center" width={24} />

          <Box sx={{ typography: 'body2' }}>
            {info.role} {`at `}
            <Link variant="subtitle2" color="inherit">
              {info.company}
            </Link>
          </Box>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Iconify icon="ic:round-business-center" width={24} />

          <Box sx={{ typography: 'body2' }}>
            {`Studied at `}
            <Link variant="subtitle2" color="inherit">
              {info.school}
            </Link>
          </Box>
        </Stack>
      </Stack>
    </Card>
  );

  return (
    <Grid container spacing={3}>
      <Grid xs={12} md={4}>
        <Stack spacing={3}>{renderAbout}</Stack>
      </Grid>
    </Grid>
  );
}
