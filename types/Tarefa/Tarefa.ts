import type {SubTarefa} from "~/types/Tarefa/SubTarefa";

export type Tarefa = {
    id: number;
    title: string;
    description: string;
    subTarefas: Array<SubTarefa>;
    date: string;
    difficulty: number;
}