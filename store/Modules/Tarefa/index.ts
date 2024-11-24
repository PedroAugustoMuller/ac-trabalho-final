import type {Tarefa} from "~/types/Tarefa";

export const useTarefa = defineStore('tarefa', () => {
    async function fetchTarefa(): Promise<Array<Tarefa>> {
        return [
            {
                id: 1,
                title: 'Tarefa de Matemática',
                description: 'Conteúdos: Trigonometria e Retas',
                date: '2019-02-01',
                situacao: 0,
                difficulty: 4
            },
            {
                id: 2,
                title: 'Trabalho de Português',
                description: 'Pesquisa sobre Dom Casmurro',
                date: '2019-02-01',
                situacao: 1,
                difficulty: 2
            },
            {
                id: 3,
                title: 'Seminário de História',
                description: 'Apresentações sobre iluminismo',
                date: '2019-02-01',
                situacao: 2,
                difficulty: 1
            },
            {
                id: 4,
                title: 'Relatório da Bolsa',
                description: 'Escrever um relatório sobre todas as atividades discorridas entre janeiro e junho',
                date: '2019-02-01',
                situacao: 2,
                difficulty: 3
            },
        ]
    }

    return {
        fetchTarefa
    }
})