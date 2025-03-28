import { IsNumber, IsString } from "class-validator";

export class criaLivroDTO {
    @IsString()
    id: string;

    @IsString()
    titulo: string;

    @IsString()
    autor: string;
    
    @IsNumber()
    anoPublicacao: number;

    @IsString()
    genero: string;

    @IsString()
    sinopse: string;
}
