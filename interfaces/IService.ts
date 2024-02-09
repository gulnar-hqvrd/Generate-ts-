import typeId from "../types";

export interface IService<T> {
  get(id: typeId, url: string): Promise<T>;
  getAll(url: string): Promise<T[]>;
}
