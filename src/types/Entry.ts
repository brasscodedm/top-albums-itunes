import { Category } from './Category';
import { ContentType } from './ContentType';
import { Id } from './Id';
import { Image } from './Image';
import { Label } from './Label';
import { Link } from './Link';
import { Price } from './Price';
import { ReleaseDate } from './RelaseDate';
import { Rights } from './Rights';

export type EntryApi = {
  'im:name': Label;
  'im:image': Image[];
  'im:itemCount': Label;
  'im:price': Price;
  'im:contentType': ContentType;
  rights: Rights;
  title: Label;
  link: Link;
  id: Id;
  'im:artist': Label;
  category: Category;
  'im:releaseDate': ReleaseDate;
};

export type Entry = {
  name: string;
  image: string;
  price: string;
  title: string;
  link: string;
  id: string;
  artist: string;
  category: string;
};
