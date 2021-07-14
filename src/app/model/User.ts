import { Postagem } from "./Postagem"

export class User {

    public id: number
    public nome: string
    public email: string
    public usuario: string
    public senha: string
    public tipoUsuario: string
    public numRegistro: number
    public postagem: Postagem[]

}