import { isSet } from 'lodash';
import { useLocation, matchPath } from 'react-router-dom';

// ----------------------------------------------------------------------

type ReturnType = boolean;

export function useActiveLink(
  path: string,
  deep = true,
  activeSection?: string,
  item = { path: '/#hero', title: 'Home' }
): ReturnType {
  const { pathname, hash } = useLocation();
  let itemPath = item.path;
  if (activeSection === '') activeSection = 'hero';
  if (itemPath === '/') itemPath = '/#hero';

  // console.log(
  //   'ActSect: ',
  //   `/#${activeSection}`,
  //   ' Item: ',
  //   itemPath,
  //   ' Result: ',
  //   `/#${activeSection}` === itemPath
  // );

  if (`/#${activeSection}` === itemPath) {
    return true;
  }

  if (isSet(activeSection)) {
    // const normalActive = path ? !!matchPath({ path, end: true }, pathname) : false;
    const normalActive = path ? !!matchPath({ path, end: true }, pathname + hash) : false;

    const deepActive = path ? !!matchPath({ path, end: false }, pathname) : false;

    return deep ? deepActive : normalActive;
  }
  return false;
}
