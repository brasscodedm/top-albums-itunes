import axios, { AxiosResponse } from 'axios';
import { Feed } from '../types/Feed';

type Props = { limit?: number };

export const getTopAlbums = ({ limit = 100 }: Props): Promise<AxiosResponse<{ feed: Feed }>> =>
  axios.get(`https://itunes.apple.com/us/rss/topalbums/limit=${limit}/json`);
