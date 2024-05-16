export const shortenString = (str: string): string => {
  return str.length > 20 ? str.slice(0, 60) + '...' : str;
};
