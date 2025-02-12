import { useEffect } from 'react';
// @mui
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import Portal from '@mui/material/Portal';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// routes
import { usePathname } from 'src/routes/hooks';
import { useActiveLink } from 'src/routes/hooks/use-active-link';
//
import { NavItemProps } from '../types';
import { NavItem, NavItemDashboard } from './nav-item';
import { StyledSubheader, StyledMenu } from './styles';

// ----------------------------------------------------------------------

type NavListProps = {
  item: NavItemProps;
  offsetTop: boolean;
  activeSection?: string;
};

export default function NavList({ item, offsetTop, activeSection }: NavListProps) {
  const pathname = usePathname();

  const nav = useBoolean();

  const { path, children } = item;

  const active = useActiveLink(path, false, activeSection, item);

  const externalLink = path.includes('http');

  useEffect(() => {
    if (nav.value) {
      nav.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = () => {
    if (children) {
      nav.onTrue();
    }
  };

  return (
    <>
      <NavItem
        item={item}
        offsetTop={offsetTop}
        active={active}
        open={nav.value}
        externalLink={externalLink}
        onMouseEnter={handleOpenMenu}
        onMouseLeave={nav.onFalse}
      />

      {!!children && nav.value && (
        <Portal>
          <Fade in={nav.value}>
            <StyledMenu
              onMouseEnter={handleOpenMenu}
              onMouseLeave={nav.onFalse}
              sx={{ display: 'flex' }}
            >
              {children.map((list) => (
                <NavSubList
                  key={list.subheader}
                  subheader={list.subheader}
                  items={list.items}
                  isDashboard={list.subheader === 'Dashboard'}
                  onClose={nav.onFalse}
                />
              ))}
            </StyledMenu>
          </Fade>
        </Portal>
      )}
    </>
  );
}

// ----------------------------------------------------------------------

type NavSubListProps = {
  isDashboard: boolean;
  subheader: string;
  items: NavItemProps[];
  onClose: VoidFunction;
};

function NavSubList({ items, isDashboard, subheader, onClose }: NavSubListProps) {
  const pathname = usePathname();

  return (
    <Stack
      spacing={2}
      flexGrow={1}
      alignItems="flex-start"
      sx={{
        pb: 2,
        ...(isDashboard && {
          pb: 0,
          maxWidth: { md: 1 / 3, lg: 540 },
        }),
      }}
    >
      <StyledSubheader disableSticky>{subheader}</StyledSubheader>

      {items.map((item) =>
        isDashboard ? (
          <NavItemDashboard key={item.title} item={item} onClick={onClose} />
        ) : (
          <NavItem
            subItem
            key={item.title}
            item={item}
            active={pathname === item.path}
            onClick={onClose}
          />
        )
      )}
    </Stack>
  );
}
