const descendingComparator = <T extends Record<string, string>>(a: T, b: T, orderBy: keyof T) => {
  return b[orderBy].localeCompare(a[orderBy]);
};

export const getComparator = <T extends Record<string, string>>(order: 'asc' | 'desc', orderBy: keyof T) => {
  return order === 'desc'
    ? (a: T, b: T) => descendingComparator(a, b, orderBy)
    : (a: T, b: T) => -descendingComparator(a, b, orderBy);
};
