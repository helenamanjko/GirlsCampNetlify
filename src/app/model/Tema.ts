import { Postagem } from "./Postagem"

export class Tema{

    public id: number
    public nomeTema: string
    public descricao: string
    public palavrasChave: string
    public postagem: Postagem[]
}