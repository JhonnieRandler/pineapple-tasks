import { Item } from "../Types";

let items: Item[] = [];

export const addItem = (newItem) => {
  if (items.length < 1) {
    newItem.id = 0;
  } else {
    newItem.id = items[items.length - 1].id + 1;
  }
  items.push(newItem);
};

export const editItem = (id, updatedItem) => {
  for (let i = 0; i < items.length; i++) {
    if (items[i].id == id) {
      items[i] = { ...items[i], ...updatedItem };
      break;
    }
  }
};

export const deleteItem = (id) => {
  for (let i = 0; i < items.length; i++) {
    if (items[i].id == id) {
      items.splice(i, 1);
      break;
    }
  }
};

export const deleteAllItems = () => {
  items = [];
};

export const deleteItemsByCategory = (id_category) => {
  for (let i = items.length - 1; i >= 0; i--) {
    if (items[i].id_category === id_category) {
      items.splice(i, 1);
    }
  }
};

export const getItem = () => {
  return items;
};

export const getItemsByCategory = (id) => {
  return items.filter((item) => item.id_category == id);
};

export const getItemById = (id) => {
  return items.find((item) => item.id == id);
};
