import { IService } from "../interfaces/IService";
import pluralize from "pluralize";
import typeId from "../types";

export class Service<T> implements IService<T> {
  // private -> sadece sınıf içerisinden ulaşılabilir, dışarıya kapalıdır. default public -> dışarıdan ulaşılabilir.
  private tableName: string = pluralize(
    this.constructor.name.replace("Service", "")
  );

  async get(id: typeId, url: string): Promise<T> {
    const response = await fetch(url);
    const data = (await response.json()) as T;
    return data;
  }

  async getAll(url: string): Promise<T[]> {
    const response = await fetch(url);
    const data = (await response.json()) as T[];
    return data;
  }
}
