import { Card, Container, Table, TableContainer, TablePagination } from '@mui/material';
import { ChangeEvent, MouseEvent, Suspense, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { Toolbar } from '@/components/List/ToolBar/Toolbar';
import { Scrollbar } from '@/components/Scrollbar/Scrollbar';
import { getStoredData, updateStoredData } from '@/service/storage-service';
import { Entry } from '@/types/Entry';

import { BodyContent, HeaderBox, ListHead } from '@/pages/Albums/Table';
import { topAlbumsQuery } from './store/selectors';
import { handleSelectedList } from './utils';

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'artist', label: 'Artist', alignRight: false },
  { id: 'category', label: 'Category', alignRight: false },
  { id: 'price', label: 'Price', alignRight: false },
];

const favouritesKey = 'FAVOURITES';

export const AlbumsContent = () => {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState<keyof Entry>('name');
  const [selected, setSelected] = useState<string[]>([]);
  const [favourites, setFavourites] = useState<string[]>(() => getStoredData(favouritesKey) || []);
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const topAlbums = useRecoilValue(topAlbumsQuery);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleClick = (id: string) => {
    const newSelected = handleSelectedList(selected, id);
    setSelected(newSelected);
  };

  const handleFavourite = (id: string) => {
    const newFavourites = handleSelectedList(favourites, id);

    updateStoredData(favouritesKey, newFavourites);
    setFavourites(newFavourites);
  };

  const handleRequestSort = (_e: MouseEvent, property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property as keyof Entry);
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

  return (
    <>
      <Container>
        <HeaderBox />
        <Card>
          <Toolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <ListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={10}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <BodyContent
                  order={order}
                  orderBy={orderBy}
                  filterName={filterName}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  selected={selected}
                  favourites={favourites}
                  handleClick={handleClick}
                  handleFavourite={handleFavourite}
                />
              </Table>
            </TableContainer>
          </Scrollbar>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 50]}
            component="div"
            count={10}
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

export const Albums = () => {
  return (
    <Suspense>
      <AlbumsContent />
    </Suspense>
  );
};
