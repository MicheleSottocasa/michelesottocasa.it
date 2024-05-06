import { isSet } from "lodash";
import { usePathname } from "next/navigation";

type ReturnType = boolean;

export function useActiveLink(
  path: string,
  deep = true,
  activeSection?: string,
  item = { path: "/#hero", title: "Home" }
): ReturnType {
  const pathname = usePathname();

  let itemPath = item.path;
  if (activeSection === "") activeSection = "hero";
  if (itemPath === "/") itemPath = "/#hero";

  if (`/#${activeSection}` === itemPath) {
    return true;
  }

  if (isSet(activeSection)) {
    const hash = window.location.hash;

    const currentPath = window.location.pathname + (hash || "");

    const normalActive = path ? pathname.startsWith(path) : false;
    const deepActive = path ? currentPath.startsWith(path) : false;

    return deep ? deepActive : normalActive;
  }

  return false;
}
