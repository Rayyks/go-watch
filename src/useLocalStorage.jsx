import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
  // Getting Stored Value
  const save = localStorage.getItemo(key);
  const initial = JSON.parse(save);
  return initial || defaultValue;
}

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // Storing
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
