import { Attributes } from './Atributes';

export type Artist = Attributes<{ href: string }> & {
  label: string;
};
