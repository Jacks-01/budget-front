// local storage functions

export const fetchLocalStorageData = (key: string): object => {
  const data: string | null = localStorage.getItem(key);

  if (data) {
    const parsedData: object = JSON.parse(data);
    return parsedData;
  }

  //* If there is no data, return an empty object
  return {};
};

