import { Author } from './Author';
import { EntryApi } from './Entry';
import { Id } from './Id';
import { Link } from './Link';
import { Rights } from './Rights';
import { Title } from './Title';
import { Updated } from './Updated';

export type Feed = {
  author: Author;
  entry: EntryApi[];
  id: Id;
  link: Link[];
  rights: Rights;
  title: Title;
  updated: Updated;
};
