export type TFetchStatus = {
  loading: boolean;
  error: null | Error;
};

export type TPrismicData<T> = {
  data: T;
  loading: boolean;
  error: boolean;
};
