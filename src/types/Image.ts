import { Attributes } from './Atributes';

export type Image = Attributes<{ height: string }> & {
  label: string;
};
