import { useLocation, matchPath } from 'react-router-dom';

// ----------------------------------------------------------------------

type ReturnType = boolean;

export function useActiveLink(path: string, deep = true): ReturnType {
  const { pathname, hash } = useLocation();

  // const normalActive = path ? !!matchPath({ path, end: true }, pathname) : false;
  const normalActive = path ? !!matchPath({ path, end: true }, pathname + hash) : false;

  const deepActive = path ? !!matchPath({ path, end: false }, pathname) : false;

  return deep ? deepActive : normalActive;
}
