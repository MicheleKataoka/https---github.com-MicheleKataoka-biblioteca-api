import { Module } from "@nestjs/common";
import { BibliotecaController } from "./biblioteca.controller";
import { LivrosArmazenados } from "./biblioteca.dm";

@Module({
    controllers: [BibliotecaController],
    providers: [LivrosArmazenados]
})
export class LivroModule{
    
}