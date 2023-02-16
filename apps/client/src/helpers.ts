import {
  DataLapse
} from "./types";

export const newDataLapse = (
  step: number,
  start: number,
  end: number,
  total: number
): DataLapse => ({
  step,
  start,
  end,
  total
});
