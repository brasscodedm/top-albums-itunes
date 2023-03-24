export type Attributes<T extends { [key: string]: string }> = {
  attributes: T;
};
