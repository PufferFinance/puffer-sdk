export type ValueOf<T> = T[keyof T];

export type TransportProvider = {
  request: (...args: any) => Promise<any>;
};
