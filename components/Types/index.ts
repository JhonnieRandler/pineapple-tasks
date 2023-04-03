export interface Category {
  id: number;
  name: string;
  date: string;
}

export interface Item {
  id: number;
  id_category: number;
  name: string;
  time: string;
  done: boolean;
}
