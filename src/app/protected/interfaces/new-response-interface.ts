import { New } from "./new.interface";

export interface NewResponse {
  msg: string;
  ok: boolean;
  path?: string;
  new: Array<New>;
}
