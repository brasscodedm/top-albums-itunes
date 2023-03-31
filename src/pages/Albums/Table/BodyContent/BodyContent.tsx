import { TableBody } from '@mui/material';
import { useRecoilValue } from 'recoil';

import { EmptyRowsBox, TableRowBox } from '@/pages/Albums/Table';
import { Entry } from '@/types/Entry';
import { applySortFilter } from '@/utils/albumsUtils';
import { getComparator } from '@/utils/getComparatar';

import { topAlbumsQuery } from '../../store/selectors';
import { NoResultsBox } from '../NoResultsBox';

type Props = {
  order: 'asc' | 'desc';
  orderBy: keyof Entry;
  filterName: string;
  page: number;
  rowsPerPage: number;
  selected: string[];
  favourites: string[];
  handleClick: (id: string) => void;
  handleFavourite: (id: string) => void;
};
export const BodyContent = ({
  order,
  orderBy,
  filterName,
  page,
  rowsPerPage,
  selected,
  favourites,
  handleClick,
  handleFavourite,
}: Props) => {
  const topAlbums = useRecoilValue(topAlbumsQuery);
  const filteredAlbums = applySortFilter(topAlbums, getComparator(order, orderBy), filterName);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredAlbums.length) : 0;
  const isNotFound = !filteredAlbums.length && !!filterName;

  return (
    <>
      <TableBody>
        {filteredAlbums.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: Entry) => {
          const isSelectedAlbum = selected.indexOf(row.id) !== -1;
          const isFavouriteAlbum = favourites.indexOf(row.id) !== -1;

          return (
            <TableRowBox
              row={row}
              isSelected={isSelectedAlbum}
              isFavourite={isFavouriteAlbum}
              onHandleClick={handleClick}
              onHandleFavourite={handleFavourite}
              key={row.id}
            />
          );
        })}
        {emptyRows > 0 && <EmptyRowsBox emptyRows={emptyRows} />}
      </TableBody>

      {isNotFound && <NoResultsBox filterName={filterName} />}
    </>
  );
};
