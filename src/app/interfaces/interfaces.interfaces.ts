import { StringMap } from "@angular/compiler/src/compiler_facade_interface"

export interface Registro {
    id: number,
    nombre: string,
    ok: boolean,
    token: string
}

export interface FormRegistro {
    nombre: string,
    email : string,
    password : string,
}