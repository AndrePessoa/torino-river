export type TWaterLevelData = null | [string, any][];
export type TWaterLevelDataUnit = null | "cm" | "m" | "ft";
export type TWaterData = {
  data: TWaterLevelData;
  unit: TWaterLevelDataUnit;
};

export interface IdroData {
  value: number;
  valid_type?: string;
  flag_type?: string;
}
