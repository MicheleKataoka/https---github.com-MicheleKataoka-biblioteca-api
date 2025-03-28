import { Module } from "@nestjs/common";
import { BibliotecaController } from "./livro.controller";
import { LivrosArmazenados } from "./livro.dm";

@Module({
    controllers: [BibliotecaController],
    providers: [LivrosArmazenados]
})
export class LivroModule{
    
}