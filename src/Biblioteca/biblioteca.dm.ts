import { Injectable } from "@nestjs/common";
import { LivroEntity } from "./filme.entity";


@Injectable()
export class LivrosArmazenados{

    Adicionar(Livro: LivroEntity){
        this.#livros.push(Livro);
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
    private buscaPorID(id: string){
        const possivel = this.#livros.find(
            livroSalvo => livroSalvo.id === id
        )
        if (!possivel){
            throw new Error ('Livro não encontrado')
        }
        return possivel;
    }
    async remove(id: string){
        const livro = this.buscaPorID(id);

        this.#livros = this.#livros.filter(
            livroSalvo => livroSalvo.id !==id
        )
        return livro;
    }
    get Livros(){
        return this.#livros
    }
}