import { Card, Container, Table, TableBody, TableContainer, TablePagination } from '@mui/material';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { ListHead } from '../../components/List/ListHead/ListHead';
import { Toolbar } from '../../components/List/ToolBar/Toolbar';
import { Scrollbar } from '../../components/Scrollbar/Scrollbar';
import { getStoredData, updateStoredData } from '../../service/storage-service';
import { Entry } from '../../types/Entry';
import { applySortFilter } from '../../utils/albumsUtils';
import { getComparator } from '../../utils/getComparatar';

import { EmptyRowsBox } from './Table/EmptyRowsBox/EmptyRowsBox';
import { HeaderBox } from './Table/HeaderBox/HeaderBox';
import { NoResultsBox } from './Table/NoResultsBox';
import { TableRowBox } from './Table/TableRowBox/TableRowBox';
import { topAlbumsQuery } from './selectors';

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'artist', label: 'Artist', alignRight: false },
  { id: 'category', label: 'Category', alignRight: false },
  { id: 'price', label: 'Price', alignRight: false },
];

const favouritesKey = 'FAVOURITES';

export const Albums = () => {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [selected, setSelected] = useState<string[]>([]);
  const [favourites, setFavourites] = useState<string[]>(() => getStoredData(favouritesKey) || []);
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const count = 53; // FEAT dynamic
  const topAlbums = useRecoilValue(topAlbumsQuery(count));

  const filteredAlbums = applySortFilter(topAlbums, getComparator(order, orderBy), filterName);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredAlbums.length) : 0;

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleClick = (id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleFavourite = (id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    console.log(newSelected);

    updateStoredData(favouritesKey, newSelected);
    setFavourites(newSelected);
  };

  const handleRequestSort = (_e: MouseEvent, property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = ({ target: { checked } }: ChangeEvent<HTMLInputElement>) => {
    if (checked) {
      const newSelected = topAlbums.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleFilterByName = (e: ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setFilterName(e.target.value);
  };

  const isNotFound = !filteredAlbums.length && !!filterName;

  return (
    <>
      <Container>
        <HeaderBox count={count} />
        <Card>
          <Toolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <ListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={topAlbums.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
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
                      />
                    );
                  })}
                  {emptyRows > 0 && <EmptyRowsBox emptyRows={emptyRows} />}
                </TableBody>

                {isNotFound && <NoResultsBox filterName={filterName} />}
              </Table>
            </TableContainer>
          </Scrollbar>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 50]}
            component="div"
            count={topAlbums.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(_, page) => handleChangePage(page)}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </>
  );
};
