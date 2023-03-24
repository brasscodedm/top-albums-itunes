import { Attributes } from './Atributes';

export type ReleaseDate = Attributes<{ label: string }> & {
  label: string;
  attributes: {
    label: string;
  };
};
