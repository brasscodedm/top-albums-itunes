import { handleSelectedList } from './handleSelectedList';

describe('handleSelectedList', () => {
  it('should return an empty array if selected is empty', () => {
    expect(handleSelectedList([], '1')).toEqual(['1']);
  });

  it('should add the id to the selected list if it is not already present', () => {
    expect(handleSelectedList(['1', '2'], '3')).toEqual(['1', '2', '3']);
  });

  it('should remove the id from the selected list if it is already present', () => {
    expect(handleSelectedList(['1', '2', '3'], '2')).toEqual(['1', '3']);
  });

  it('should remove the id from the beginning of the selected list', () => {
    expect(handleSelectedList(['1', '2', '3'], '1')).toEqual(['2', '3']);
  });

  it('should remove the id from the end of the selected list', () => {
    expect(handleSelectedList(['1', '2', '3'], '3')).toEqual(['1', '2']);
  });

  it('should remove the id from the middle of the selected list', () => {
    expect(handleSelectedList(['1', '2', '3', '4'], '2')).toEqual(['1', '3', '4']);
  });
});
