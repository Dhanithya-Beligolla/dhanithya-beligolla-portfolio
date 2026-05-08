import { useState } from "react";

export function useEditableCollection<T>(storageKey: string, defaultData: T[]) {
  const [items, setItems] = useState<T[]>(() => {
    const saved = localStorage.getItem(storageKey);

    if (!saved) {
      return defaultData;
    }

    try {
      return JSON.parse(saved) as T[];
    } catch {
      return defaultData;
    }
  });

  const saveItems = (nextItems: T[]) => {
    setItems(nextItems);
    localStorage.setItem(storageKey, JSON.stringify(nextItems, null, 2));
  };

  const resetItems = () => {
    setItems(defaultData);
    localStorage.removeItem(storageKey);
  };

  return {
    items,
    saveItems,
    resetItems,
  };
}