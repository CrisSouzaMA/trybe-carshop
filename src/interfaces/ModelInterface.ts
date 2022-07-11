export interface Model<T> {
  create(object: T): Promise<T>,
  read(): Promise<T[]>,
  readOne(id_: string): Promise<T | null>,
  update(id_: string, object: T): Promise<T | null>,
  delete(id_: string): Promise<T | null>,
}
