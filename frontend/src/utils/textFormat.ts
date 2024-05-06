// ----------------------------------------------------------------------

export function capitalize(str: string): string {
  return str != undefined ? str.charAt(0).toUpperCase() + str.slice(1) : str;
}
