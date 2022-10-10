import { Knex } from "knex";

    export async function seed(knex: Knex) {
        await knex("items").insert([
            {
                title: "Lâmpadas e Iluminação",
                    image: "lampadas_iluminacao.svg"
            },
            {
                title: "Pilhas e Baterias",
                    image: "pilhas_baterias.svg"
            },
            {
                title: "Papéis e Papelão",
                    image: "papeis_papelao.svg"
            },
            {
                title: "Resíduos Eletrônicos",
                    image: "residuos_eletronicos.svg"
            },
            {
                title: "Resíduos Orgânicos",
                    image: "residuos_organicos.svg"
            },
            {
                title: "Óleo de Cozinha",
                    image: "oleo_cozinha.svg"
            }
        ]);
    };