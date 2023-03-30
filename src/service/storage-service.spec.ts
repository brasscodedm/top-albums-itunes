import { clearStoredData, getStoredData, updateStoredData } from './storage-service';

describe('getStoredData', () => {
  it('should return null if key does not exist', () => {
    expect(getStoredData('nonexistent-key')).toBeNull();
  });

  it('should return the stored value if key exists', () => {
    const testData = { name: 'John', age: 30 };
    updateStoredData('test-key', testData);

    expect(getStoredData('test-key')).toEqual(testData);
  });
});

describe('updateStoredData', () => {
  it('should store the given value under the given key', () => {
    const testData = { name: 'John', age: 30 };
    updateStoredData('test-key', testData);

    expect(localStorage.getItem('test-key')).toEqual(JSON.stringify(testData));
  });
});

describe('clearStoredData', () => {
  it('should remove the value stored under the given key', () => {
    updateStoredData('test-key', { name: 'John', age: 30 });
    clearStoredData('test-key');

    expect(localStorage.getItem('test-key')).toBeNull();
  });
});
