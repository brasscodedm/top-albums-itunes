import {
  Avatar,
  Card,
  Checkbox,
  Container,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { ListHead } from '../../components/List/ListHead/ListHead';
import { Toolbar } from '../../components/List/ToolBar/Toolbar';
import { Entry } from '../../types/Entry';
import { applySortFilter } from '../../utils/albumsUtils';
import { getComparator } from '../../utils/getComparatar';

import { topAlbumsQuery } from './selectors';

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'company', label: 'Company', alignRight: false },
  { id: 'category', label: 'Category', alignRight: false },
  { id: 'price', label: 'Price', alignRight: false },
];

export const Albums = () => {
  const topAlbums = useRecoilValue(topAlbumsQuery);
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [selected, setSelected] = useState<string[]>([]);
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const count = 50; // TODO dynamic

  const filteredAlbums = applySortFilter<Entry>(topAlbums, getComparator(order, orderBy), filterName);

  const emptyRows = 2;

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleClick = (event: ChangeEvent<HTMLInputElement>, id: string) => {
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

  const handleRequestSort = (_e: MouseEvent, property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
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
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            <title>Top {count} iTunes albums!</title>
          </Typography>
        </Stack>

        <Card>
          <Toolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />
          {/*<Scrollbar>*/}
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
                  const name = row.title.label;
                  const { id } = row;
                  const avatarUrl = row['im:image'][0].label;
                  const company = row['im:artist'].label;
                  const category = row.category.attributes.label;
                  const fullPrice = row['im:price'].label;

                  const isSelectedUser = selected.indexOf(id) !== -1;

                  return (
                    <TableRow hover key={id + name} tabIndex={-1} role="checkbox" selected={isSelectedUser}>
                      <TableCell padding="checkbox">
                        <Checkbox checked={isSelectedUser} onChange={(event) => handleClick(event, name)} />
                      </TableCell>

                      <TableCell component="th" scope="row" padding="none">
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Avatar alt={name} src={avatarUrl} />
                          <Typography variant="subtitle2">{name}</Typography>
                        </Stack>
                      </TableCell>

                      <TableCell align="left">{company}</TableCell>

                      <TableCell align="left">{category}</TableCell>

                      <TableCell align="left">{fullPrice}</TableCell>
                    </TableRow>
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>

              {isNotFound && (
                <TableBody>
                  <TableRow>
                    <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                      <Paper
                        sx={{
                          textAlign: 'center',
                        }}
                      >
                        <Typography variant="h6" paragraph>
                          Not found
                        </Typography>

                        <Typography variant="body2">
                          No results found for &nbsp;
                          <strong>&quot;{filterName}&quot;</strong>.
                          <br /> Try checking for typos or using complete words.
                        </Typography>
                      </Paper>
                    </TableCell>
                  </TableRow>
                </TableBody>
              )}
            </Table>
          </TableContainer>
          {/*</Scrollbar>*/}
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
