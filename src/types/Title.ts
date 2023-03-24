import { Attributes } from './Atributes';

export type Title = Attributes<{ type: string }> & {
  label: string;
};
