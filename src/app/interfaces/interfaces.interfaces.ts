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

export interface RenovarToken {
    id: string,
    nombre: string,
    ok: boolean,
    token: string
}

export interface User {
    id: string,
    nombre: string,
}