import { filter } from 'lodash';

import { Entry } from '../types/Entry';

export const applySortFilter = <T>(array: T[], comparator: any, query: string) => {
  const stabilizedThis = array.map((el, index) => [el, index] as const);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user: Entry) => _user['im:name'].label.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
};
