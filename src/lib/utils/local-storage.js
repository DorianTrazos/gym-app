const LS = localStorage;

const getLocalStorageData = id => {
  const data = LS.getItem(id);
  try {
    return data ? JSON.parse(data) : null;
  } catch (err) {
    console.error(`Error al parsear los datos de localStorage con id "${id}":`, err);
    return null;
  }
};

const saveLocalStorageData = (id, data) => {
  try {
    const existData = getLocalStorageData(id);

    if (existData) LS.setItem(id, JSON.stringify({ ...existData, ...data }));
    else LS.setItem(id, JSON.stringify(data));
  } catch (err) {
    console.error(`Error al guardar los datos en localStorage con id "${id}":`, err);
  }
};

export { getLocalStorageData, saveLocalStorageData };
