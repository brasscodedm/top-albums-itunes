import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Entry } from '../../../../types/Entry';

import { TableRowBox } from './TableRowBox';

describe('TableRowBox', () => {
  const row: Entry = {
    name: 'Album Name',
    title: 'Album Title',
    image: 'http://example.com/image.jpg',
    price: '$9.99',
    link: 'http://example.com',
    id: '123',
    artist: 'Artist Name',
    category: 'Pop',
  };
  const onHandleClick = jest.fn();
  const onHandleFavourite = jest.fn();

  it('should render the title and artist correctly', () => {
    render(
      <TableRowBox
        row={row}
        isSelected={false}
        isFavourite={false}
        onHandleClick={onHandleClick}
        onHandleFavourite={onHandleFavourite}
      />
    );
    expect(screen.getByText('Album Title')).toBeInTheDocument();
    expect(screen.getByText('Artist Name')).toBeInTheDocument();
  });

  // TODO investigate
  // it('should call the onHandleClick function when the checkbox is clicked', async () => {
  //   render(
  //     <TableRowBox
  //       row={row}
  //       isSelected={false}
  //       isFavourite={false}
  //       onHandleClick={onHandleClick}
  //       onHandleFavourite={onHandleFavourite}
  //     />
  //   );
  //   const checkbox = screen.getByTestId('table-row-checkbox');
  //   await userEvent.click(checkbox);
  //   expect(onHandleClick).toHaveBeenCalledWith('123');
  // });

  it('should call the onHandleFavourite function when the star icon is clicked', async () => {
    render(
      <TableRowBox
        row={row}
        isSelected={false}
        isFavourite={false}
        onHandleClick={onHandleClick}
        onHandleFavourite={onHandleFavourite}
      />
    );
    const starIcon = screen.getByTestId('favourite-button');
    await userEvent.click(starIcon);
    expect(onHandleFavourite).toHaveBeenCalledWith('123');
  });

  it('should highlight the row when isSelected is true', () => {
    render(
      <TableRowBox
        row={row}
        isSelected={true}
        isFavourite={false}
        onHandleClick={onHandleClick}
        onHandleFavourite={onHandleFavourite}
      />
    );
    const tableRow = screen.getByTestId('table-row');
    expect(tableRow).toHaveClass('Mui-selected');
  });
});
