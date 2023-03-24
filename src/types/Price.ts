import { Attributes } from './Atributes';

export type Price = Attributes<{
  amount: string;
  currency: string;
}> & {
  label: string;
};
