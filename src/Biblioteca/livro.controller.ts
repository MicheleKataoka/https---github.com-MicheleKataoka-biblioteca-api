import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { v4 as uuid } from 'uuid';
import { criaLivroDTO } from "./dto/cadastroDeLivros.dto";
import { alteraLivroDTO } from "./dto/manupulacaoDeLivros.dto";
import { LivrosArmazenados } from "./livro.dm";
import { LivroEntity } from "./livro.entity";
import { ListaLivrosDTO } from "./dto/listaLivros.dto";

@Controller('/biblioteca')
export class BibliotecaController{
    constructor (private cIsLivrosArmazenados: LivrosArmazenados){

    }
    @Post()
    async cria(@Body() dados: criaLivroDTO){
        var livro = new LivroEntity( uuid(), dados.titulo, dados.autor, dados.anoPublicacao, dados.genero, dados.sinopse)

        await this.cIsLivrosArmazenados.Adicionar(livro);
        var retorno={
            id: livro.id,
            message: 'Livro Adicionado'
        }
        return retorno
    }
    @Put ('/:id')
    async atualiza(@Param('id')  id: string, @Body() novosDados: alteraLivroDTO ){
        const livroAtualizado = await this.cIsLivrosArmazenados.atualiza(id, novosDados)
        
        return{
            livro: livroAtualizado,
            message: 'Livro atualizado'
        }
    }
   
    @Get()
    async Retorno(){
        const livrosListados = await this.cIsLivrosArmazenados.Livros;
        const listaRetorno = livrosListados.map(
            livro => new ListaLivrosDTO(
                livro.id,
                livro.titulo,
                livro.autor,
                livro.anoPublicacao,
                livro.genero,
                livro.sinopse
            )
        );
        return listaRetorno;
    }
    
    @Get('/id/:id')
    async retornoLivroPorId(@Param('id') id: string){
        const livroID = await this.cIsLivrosArmazenados.buscaPorID(id);
        return livroID
    }
      
    @Get('/genero/:genero')
    async retornoLivroPorGenero(@Param('genero') genero: string){
        const livroGenero = await this.cIsLivrosArmazenados.buscaPorGenero(genero);
        return livroGenero;
    }
    @Delete('/:id')
    async remove(@Param('id') id: string){
        const livroRemovido = await this.cIsLivrosArmazenados.remove(id)

        return{
            filme: livroRemovido,
            message: 'Livro removido'
        }
    }
}

