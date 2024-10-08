export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export interface Identifiable {
  id: string;
}

export interface Timestampable {
  createdAt: Date;
  updatedAt: Date;
}

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
