import axios, { AxiosResponse } from 'axios';
import { Feed } from '../types/Feed';

export const getTopAlbums = ({ limit = 100 }: { limit: number }): Promise<AxiosResponse<Feed>> =>
  axios.get(`https://itunes.apple.com/us/rss/topalbums/limit=${limit}/json`);
