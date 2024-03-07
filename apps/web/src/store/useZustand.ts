// taget fra eget repo https://github.com/Morten010/WireUp/blob/main/src/store/databaseStore/useZustand.ts
// useZustand er for hydration errors der ellers ville ske
"use client";
import { useState, useEffect } from "react";

export const useZustand = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F,
) => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};
