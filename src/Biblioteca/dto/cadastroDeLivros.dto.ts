import { isNumber, isString } from "class-validator";

export class criaLivroDTO{
    @isString()
    id: string;

    @isString()
    titulo: string;

    @isString()
    autor: string;
    
    @isNumber()
    anoPublicacao: number;

    @isString()
    genero: string;

    @isString()
    sinopse: string;
}