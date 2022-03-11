import { Lavozim } from "./lavozim";
import { Smena } from "./smena";

export interface Xodim {
    id: number,
    lavozim: Lavozim,
    ism: string,
    familiya: string,
    sharif: string,
    aktiv: boolean,
    info: string,
    smena: Smena
}