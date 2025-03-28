import { Injectable } from "@nestjs/common";
import { LivroEntity } from "./livro.entity";


@Injectable()
export class LivrosArmazenados{

    async Adicionar(Livro: LivroEntity){
        this.Livros.push(Livro);
    }
    atualiza(id: string, dadosAtualizacao: Partial<LivroEntity>){
        const livro = this.buscaPorID(id);

        Object.entries(dadosAtualizacao).forEach(
            ([chave, valor]) => {
                if (chave === 'id'){
                    return 
                }
                livro[chave] = valor;
            }
        )
        return livro;
    }
    async buscaPorID(id: string){
        const possivel = this.Livros.find(
            livroSalvo => livroSalvo.id === id
        )
        if (!possivel){
            throw new Error ('Livro não encontrado')
        }
        return possivel;
    }
    async buscaPorGenero(genero: string){
        const possivel = this.Livros.find(
            livroSalvo => livroSalvo.genero === genero
        )
        if (!possivel){
            throw new Error ('Livro não encontrado')
        }
        return possivel;
    }
    async remove(id: string) {
        const livro = this.buscaPorID(id);
    
        if (!livro) {
            throw new Error('Livro não encontrado');
        }
        this.Livros = this.Livros.filter(livroSalvo => livroSalvo.id !== id);
        return livro;

    
        }
    
    }
    get Livros(){
        return this.Livros
    }
}