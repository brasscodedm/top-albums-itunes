import { EntryApi } from '../../../types/Entry';

import { mapEntries } from './mapEntries';

describe('mapEntriesApi', () => {
  it('should return an empty array if entries is empty', () => {
    expect(mapEntries([])).toEqual([]);
  });

  it('should map the entries correctly', () => {
    const apiData = [
      {
        'im:name': { label: 'Song 1' },
        title: { label: 'Title 1' },
        'im:image': [{ label: 'Image 1' }],
        'im:price': { label: '1.99' },
        link: { attributes: { href: 'http://example.com/1' } },
        id: { attributes: { 'im:id': '1' } },
        'im:artist': { label: 'Artist 1' },
        category: { attributes: { label: 'Category 1' } },
      },
      {
        'im:name': { label: 'Song 2' },
        title: { label: 'Title 2' },
        'im:image': [{ label: 'Image 2' }],
        'im:price': { label: '2.99' },
        link: { attributes: { href: 'http://example.com/2' } },
        id: { attributes: { 'im:id': '2' } },
        'im:artist': { label: 'Artist 2' },
        category: { attributes: { label: 'Category 2' } },
      },
    ] as EntryApi[];

    const expectedData = [
      {
        name: 'Song 1',
        title: 'Title 1',
        image: 'Image 1',
        price: '1.99',
        link: 'http://example.com/1',
        id: '1',
        artist: 'Artist 1',
        category: 'Category 1',
      },
      {
        name: 'Song 2',
        title: 'Title 2',
        image: 'Image 2',
        price: '2.99',
        link: 'http://example.com/2',
        id: '2',
        artist: 'Artist 2',
        category: 'Category 2',
      },
    ];

    expect(mapEntries(apiData)).toEqual(expectedData);
  });
});
