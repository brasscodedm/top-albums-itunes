import { selectorFamily } from 'recoil';

import { getTopAlbums } from '../../api/itunes.service';
import { Entry } from '../../types/Entry';

import { mapEntries } from './utils';

export const topAlbumsQuery = selectorFamily<Entry[], number>({
  key: 'TopAlbums',
  get: (limit) => async () => {
    const response = await getTopAlbums({ limit });
    return mapEntries(response.data.feed.entry);
  },
});
