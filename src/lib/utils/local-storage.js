const LS = localStorage;

const getLocalStorageData = id => {
  try {
    const rawData = localStorage.getItem(id);
    return rawData ? JSON.parse(rawData) : {};
  } catch (err) {
    console.error(`Error al leer los datos de localStorage con id "${id}":`, err);
    return {};
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
