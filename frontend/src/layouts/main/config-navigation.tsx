// routes
import { pathsMine, adminPaths, paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const navConfig = [
  {
    title: 'Home',
    path: pathsMine.home,
  },
  {
    title: 'About me',
    path: pathsMine.aboutMe,
  },
  {
    title: 'Background',
    path: pathsMine.background,
  },
  {
    title: 'Projects',
    path: pathsMine.projects,
  },
];
export const navConfigAdmin = [
  {
    title: 'Admin',
    path: adminPaths.root,
  },
  {
    title: 'Login to admin',
    path: adminPaths.login,
  },
];
