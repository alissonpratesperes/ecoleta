import express from "express";

import knex from "./database/connection";

    const routes = express.Router();

        routes.get("/items", async (request, response) => {
            const items = await knex.raw(`
                SELECT
                    *
                FROM
                    items
            `);
            const serializedItems = items.map((item: any) => {
                return {
                    title: item.title,
                        image_url: `http://192.168.1.101:3333/uploads/${item.image}`
                }
            });

                return response.json(
                    serializedItems
                );
        });

            export default routes;