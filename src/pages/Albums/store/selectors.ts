import { selector } from 'recoil';

import { getTopAlbums } from '@/api/itunes.service';
import { mapEntries } from '../utils';
import { albumsCountAtom } from './atoms';

export const topAlbumsQuery = selector({
  key: 'TopAlbums',
  get: async ({ get }) => {
    const limit = get(albumsCountAtom);
    const response = await getTopAlbums({ limit });
    return mapEntries(response.data.feed.entry);
  },
});
