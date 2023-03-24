import { Attributes } from './Atributes';

export type Link = Attributes<{
  rel: string;
  type: string;
  href: string;
}> & {
  label?: string;
};
