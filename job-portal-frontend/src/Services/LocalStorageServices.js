const setItem = (key, value) => {
   if (value === undefined) return;
    localStorage.setItem(key, JSON.stringify(value));
}

const getItem = (key) => {
  const data = localStorage.getItem(key);
   if (!data || data === "undefined") return null;

  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
};

const removeItem = (key) => {
  localStorage.removeItem(key);
};

export {setItem, getItem, removeItem};