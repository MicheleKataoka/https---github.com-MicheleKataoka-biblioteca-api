export class ListaLivrosDTO{
    constructor(
        readonly id: string,
        readonly titulo: string,
        readonly autor: string,
        readonly anoPublicacao: number,  
        readonly genero: string,
        readonly sinopse: string,
        ){}
}
