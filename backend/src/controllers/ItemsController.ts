import { Request, Response } from "express";

import knex from "../database/connection";

    class ItemsController {
        async index(request: Request, response: Response) {
            const items = await knex("items").select("*");

            const serializedItems = items.map((item: any) => {
                return {
                    id: item.id,
                    title: item.title,
                    image_url: `http://192.168.1.101:3333/uploads/${item.image}`
                };
            });

                return response.status(200).json({
                    serializedItems
                });
        };
    };

        export default ItemsController;