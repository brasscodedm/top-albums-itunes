import { Author } from './Author';
import { Entry } from './Entry';
import { Id } from './Id';
import { Link } from './Link';
import { Rights } from './Rights';
import { Title } from './Title';
import { Updated } from './Updated';

export type Feed = {
  author: Author;
  entry: Entry[];
  id: Id;
  link: Link[];
  rights: Rights;
  title: Title;
  updated: Updated;
};
