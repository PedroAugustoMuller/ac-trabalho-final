import type {Habit} from "@/types/Habit"

const defaultHabits = [
    {
        id: 1,
        title: "Exercitar diariamente",
        description: "Fazer 30 minutos de exercícios físicos",
        duration: 30,
        checked: true,
    },
    {
        id: 2,
        title: "Beber mais água",
        description: "Beber 2 litros de água por dia",
        duration: 7,
        checked: false,
    },
    {
        id: 3,
        title: "Ler um livro",
        description: "Ler 20 páginas por dia",
        duration: 15,
        checked: true,
    },
    {
        id: 4,
        title: "Meditar",
        description: "Meditar por 15 minutos",
        duration: 10,
        checked: false,
    },
    {
        id: 5,
        title: "Estudar programação",
        description: "Estudar 1 hora de programação por dia",
        duration: 20,
        checked: false,
    },
    {
        id: 6,
        title: "Fazer refeições saudáveis",
        description: "Comer ao menos 3 refeições saudáveis por dia",
        duration: 15,
        checked: true,
    },
    {
        id: 7,
        title: "Dormir 8 horas",
        description: "Dormir pelo menos 8 horas por noite",
        duration: 30,
        checked: true,
    },
    {
        id: 8,
        title: "Caminhar",
        description: "Caminhar 30 minutos por dia",
        duration: 5,
        checked: false,
    },
    {
        id: 9,
        title: "Ler notícias",
        description: "Ler as principais notícias do dia",
        duration: 7,
        checked: true,
    }
];

const localStorageKey = 'habits';

export const useHabits = defineStore('habit', () => {

    function isLocalStorageAvailable(): boolean {
        return typeof window !== "undefined" && typeof localStorage !== "undefined";
    }

    async function fetchHabits(): Promise<Array<Habit>> {
        if(!isLocalStorageAvailable()){
            return [];
        }
        const habits = localStorage.getItem(localStorageKey)
        return habits ? JSON.parse(habits) : defaultHabits;
    }

    async function createHabit(novoHabit: Habit): Promise<Boolean> {
        if(!isLocalStorageAvailable()){
            return false;
        }
        const habits = localStorage.getItem(localStorageKey)

        if (!habits) {
            localStorage.setItem(localStorageKey, JSON.stringify(Array(novoHabit)));
            return true;
        }
        let updatedArray: Array<Habit> = JSON.parse(habits);

        const maxId = updatedArray.reduce((max, t) => (t.id > max ? t.id : max), 0);
        novoHabit.id = maxId + 1;

        updatedArray.push(novoHabit);
        localStorage.setItem(localStorageKey, JSON.stringify(updatedArray));
        return true;
    }

    async function editHabit(habitEdicao: Habit): Promise<Boolean> {

        if(!isLocalStorageAvailable()){
            return false;
        }

        const habits = localStorage.getItem(localStorageKey)
        if (!habits) {
            throw Error('Impossível editar, nenhuma hábito criado');
        }
        const arrayHabits: Array<Habit> = JSON.parse(habits);

        const updatedArray = arrayHabits.map((element: Habit) =>
            element.id === habitEdicao.id ? habitEdicao : element
        );

        localStorage.setItem(localStorageKey, JSON.stringify(updatedArray));

        return true;
    }

    async function deleteHabit(habitId: number): Promise<Boolean> {

        if(!isLocalStorageAvailable()){
            return false;
        }

        const habits = localStorage.getItem(localStorageKey)
        if (!habits) {
            throw Error('Impossível excluir, nenhuma hábito criado');
        }
        let arrayHabits: Array<Habit> = JSON.parse(habits);

        const updatedArray: Array<Habit> = arrayHabits.filter((element: Habit) => element.id !== habitId);

        localStorage.setItem(localStorageKey, JSON.stringify(updatedArray));

        return true;
    }

    return {
        fetchHabits,
        createHabit,
        editHabit,
        deleteHabit,
    }
})