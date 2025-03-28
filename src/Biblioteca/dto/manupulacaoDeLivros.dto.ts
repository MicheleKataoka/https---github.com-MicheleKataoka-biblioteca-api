export class alteraLivroDTO{
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