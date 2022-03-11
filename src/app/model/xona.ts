import { Bino } from "./bino";
import { Bulim } from "./bulim";

export interface Xona{
    id: number,
    nom: string,
    info: string,
    bulim: Bulim,
    bino: Bino
}