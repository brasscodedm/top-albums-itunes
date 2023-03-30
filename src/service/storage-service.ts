export const getStoredData = <T>(key: string): T | null => {
  const value = localStorage.getItem(key);

  return value ? (JSON.parse(value) as T) : null;
};

export const updateStoredData = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const clearStoredData = (key: string) => {
  localStorage.removeItem(key);
};
