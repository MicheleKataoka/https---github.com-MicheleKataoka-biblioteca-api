import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('/biblioteca')
export class BibliotecaController{
    constructor (private cIsLivrosArmazenados: LivrosArmazenados){

    }
    @Post()
    async cria(@Body() dados: criaLivroDTO){
        var livro = new LivroEntity( uuid(), dados.titulo, dados.autor, dados.anoPublicacao, dados.genero, dados.sinopse)

        this.cIsLivrosArmazenados.Adicionar(livro);
        var retorno={
            id: livro.id,
            message: 'Livro Adicionado'
        }
        return retorno
    }
    @Put ('/:id')
    async atualiza(@Param('id')  id: string, @Body() novosDados: alteraLivroDTO ){
        const livroAtualizado = await this.cIsLivrosArmazenados.atualiza(id, novosDados
        
        return{
            livro: livroAtualizado,
            message: 'Livro atualizado'
        }
    }
   
    @Get()
    async Retorno(0{
        const livrosListados = await this.cIsLivrosArmazenados.Livro;
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
    })
    
    @Get('/listar/:id')
    async retornoLivroPorId(@Param('id') id: string){
        const livroID = await this.cIsLivrosArmazenados.Listar(id);
        return livroID
    }
      
    @Get('/listar/:genero')
    async retornoLivroPorGenero(@Param('genero') genero: string){
        const livroGenero = await this.cIsLivrosArmazenados.Listar(genero);
        return livroGenero
    }
    @Delete('/:id')
    async remove(@Param('id') id: string){
        const livroRemovido = await this.cIsLivrosArmazenados.remove(id)

        return{
            filme: livroRemovido,
            message: 'Livro removido'
        }
}
