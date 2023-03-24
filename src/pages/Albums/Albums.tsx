import {
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  Input,
  Stack,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  TableBody,
  Checkbox,
  Avatar,
  TablePagination,
  Paper,
} from '@mui/material';
import { useEffect } from 'react';
import { topAlbumsQuery } from './selectors';
import { useRecoilValue } from 'recoil';
import { Entry } from '../../types/Entry';

export const Albums = () => {
  const topAlbums = useRecoilValue(topAlbumsQuery);
  const count = 50; // TODO dynamic

  const filteredAlbums: Entry[] = topAlbums;
  const emptyRows = 2;
  const isNotFound = true;
  const selected = '';
  const filterName = 'TOmelk';

  const handleChangePage = (e: any) => {
    console.log(e);
  };

  const handleChangeRowsPerPage = (e: any) => {
    console.log(e);
  };

  const handleClick = (e: any, name: string) => {
    console.log(name);
  };

  const handleOpenMenu = () => {
    console.log('open menu');
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4" gutterBottom>
          Top {count} iTunes albums!
        </Typography>
        {/*<Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>*/}
        <Button variant="contained">New User</Button>
      </Stack>

      <Card>
        {/*<UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />*/}

        <TableContainer sx={{ minWidth: 800 }}>
          <Table>
            {/*<UserListHead*/}
            {/*  order={order}*/}
            {/*  orderBy={orderBy}*/}
            {/*  headLabel={TABLE_HEAD}*/}
            {/*  rowCount={USERLIST.length}*/}
            {/*  numSelected={selected.length}*/}
            {/*  onRequestSort={handleRequestSort}*/}
            {/*  onSelectAllClick={handleSelectAllClick}*/}
            {/*/>*/}
            <TableBody>
              {filteredAlbums.map((row: Entry) => {
                const name = row.title.label;
                const id = row.id;
                const avatarUrl = row['im:image'][0].label;
                const company = row['im:artist'].label;
                const category = row.category.attributes.label;
                const fullPrice = row['im:price'].label;
                console.log(row);

                const selectedUser = selected.indexOf(name) !== -1;

                return (
                  <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedUser}>
                    <TableCell padding="checkbox">
                      <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, name)} />
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

                    <TableCell align="right">
                      <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
                        {/*<Iconify icon={'eva:more-vertical-fill'} />*/}
                      </IconButton>
                    </TableCell>
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

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={5}
          rowsPerPage={2}
          page={3}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
};
