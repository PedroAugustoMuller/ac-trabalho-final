import type {Tarefa} from "~/types/Tarefa/Tarefa";

// const defaultTarefas = [
//     {
//         id: 1,
//         title: 'Tarefa de Matemática',
//         description: 'Conteúdos: Trigonometria e Retas',
//         date: '2019-02-01',
//         subTarefas: [],
//         difficulty: 3
//     },
//     {
//         id: 2,
//         title: 'Trabalho de Português',
//         description: 'Pesquisa sobre Dom Casmurro',
//         date: '2019-02-01',
//         subTarefas: [],
//         difficulty: 1
//     },
//     {
//         id: 3,
//         title: 'Seminário de História',
//         description: 'Apresentações sobre iluminismo',
//         date: '2019-02-01',
//         subTarefas: [],
//         difficulty: 0
//     },
//     {
//         id: 4,
//         title: 'Relatório da Bolsa',
//         description: 'Escrever um relatório sobre todas as atividades discorridas entre janeiro e junho',
//         date: '2019-02-01',
//         subTarefas: [],
//         difficulty: 2
//     },
// ]

const localStorageKey: string = 'tarefas'

export const useTarefa = defineStore('tarefa', () => {

    function isLocalStorageAvailable(): boolean {
        return typeof window !== "undefined" && typeof localStorage !== "undefined";
    }

    async function fetchTarefa(): Promise<Array<Tarefa>> {
        if(!isLocalStorageAvailable()){
            return [];
        }
        const tarefas = localStorage.getItem(localStorageKey)
        return tarefas ? JSON.parse(tarefas) : [];
    }

    async function createTarefa(novaTarefa: Tarefa): Promise<Boolean> {
        if(!isLocalStorageAvailable()){
            return false;
        }

        const tarefas = localStorage.getItem(localStorageKey)

        if (!tarefas) {
            localStorage.setItem(localStorageKey, JSON.stringify(Array(novaTarefa)));
            return true;
        }
        let updatedArray: Array<Tarefa> = JSON.parse(tarefas);

        const maxId = updatedArray.reduce((max, t) => (t.id > max ? t.id : max), 0);
        novaTarefa.id = maxId + 1;

        updatedArray.push(novaTarefa);
        localStorage.setItem(localStorageKey, JSON.stringify(updatedArray));
        return true;
    }

    async function editTarefa(tarefaEdicao: Tarefa): Promise<Boolean> {

        if(!isLocalStorageAvailable()){
            return false;
        }

        const tarefas = localStorage.getItem(localStorageKey)
        if (!tarefas) {
            throw Error('Impossível editar, nenhuma tarefa criada');
        }
        let arrayTarefas: Array<Tarefa> = JSON.parse(tarefas);
        const updatedArray = arrayTarefas.map((element: Tarefa) =>
            element.id === tarefaEdicao.id ? tarefaEdicao : element
        );

        localStorage.setItem(localStorageKey, JSON.stringify(updatedArray));

        return true;
    }

    async function deleteTarefa(tarefaId: number): Promise<Boolean> {

        if(!isLocalStorageAvailable()){
            return false;
        }

        const tarefas = localStorage.getItem(localStorageKey)
        if (!tarefas) {
            throw Error('Impossível excluir, nenhuma tarefa criada');
        }
        let arrayTarefas: Array<Tarefa> = JSON.parse(tarefas);

        const updatedArray: Array<Tarefa> = arrayTarefas.filter((element: Tarefa) => element.id !== tarefaId);

        localStorage.setItem(localStorageKey, JSON.stringify(updatedArray));

        return true;
    }

    return {
        fetchTarefa,
        createTarefa,
        editTarefa,
        deleteTarefa
    }
})