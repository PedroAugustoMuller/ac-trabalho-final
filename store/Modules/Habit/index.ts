import type { Habit } from "@/types/Habit"

export const useHabits = defineStore('habit', () => {
    async function fetchHabits(): Promise<Array<Habit>> {
        return [
            {
                id: 1,
                title: "Exercitar diariamente",
                description: "Fazer 30 minutos de exercícios físicos",
                duration: "30 dias",
                award: 10,
            },
            {
                id: 2,
                title: "Beber mais água",
                description: "Beber 2 litros de água por dia",
                duration: "7 dias",
                award: 5,
            },
            {
                id: 3,
                title: "Ler um livro",
                description: "Ler 20 páginas por dia",
                duration: "15 dias",
                award: 8,
            },
            {
                id: 4,
                title: "Meditar",
                description: "Meditar por 15 minutos",
                duration: "10 dias",
                award: 6,
            },
            {
                id: 5,
                title: "Estudar programação",
                description: "Estudar 1 hora de programação por dia",
                duration: "20 dias",
                award: 12,
            },
            {
                id: 6,
                title: "Fazer refeições saudáveis",
                description: "Comer ao menos 3 refeições saudáveis por dia",
                duration: "15 dias",
                award: 7,
            },
            {
                id: 7,
                title: "Dormir 8 horas",
                description: "Dormir pelo menos 8 horas por noite",
                duration: "30 dias",
                award: 15,
            },
            {
                id: 8,
                title: "Caminhar",
                description: "Caminhar 30 minutos por dia",
                duration: "5 dias",
                award: 4,
            },
            {
                id: 9,
                title: "Ler notícias",
                description: "Ler as principais notícias do dia",
                duration: "7 dias",
                award: 3,
            }
        ];
    }

    return {
        fetchHabits
    }
})