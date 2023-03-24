import { selector } from 'recoil';
import { getTopAlbums } from '../../api/itunes.service';

export const topAlbumsQuery = selector({
  key: 'TopAlbums',
  get: async ({ get }) => {
    const response = await getTopAlbums({ limit: 20 });
    return response.data.feed.entry;
  },
});
