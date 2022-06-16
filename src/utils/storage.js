import { useState, useEffect } from "react";

//GETTING STORED VALUE
export const getStorageValue = (key: string, defaultValue: any) => {
  const saved: any = window.localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
};

export const useLocalStorage = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export const clearLocalStorage = () => {
  window.localStorage.clear();
  window.location.href = "/";
};
