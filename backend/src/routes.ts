import express from "express";

import knex from "./database/connection";

    const routes = express.Router();

        routes.get("/items", async (request, response) => {
            const items = await knex("items").select("*");

            const serializedItems = items.map((item: any) => {
                return {
                    id: item.id,
                    title: item.title,
                    image_url: `http://192.168.1.101:3333/uploads/${item.image}`
                }
            });

                return response.json(  
                    serializedItems
                );
        });

        routes.post("/points", async (request, response) => {
            const {
                name,
                email,
                whatsapp,
                latitude,
                longitude,
                city,
                uf,
                items
            } = request.body;

            const insertedPointId = await knex("points").insert({
                image: "image-fake.jpg",
                name,
                email,
                whatsapp,
                latitude,
                longitude,
                city,
                uf
            });

            const point_id = insertedPointId[0];

            const pointItems = items.map((item_id: number) => {
                return {
                    point_id,
                    item_id
                };
            });

                await knex("point_items").insert(pointItems);        

                    return response.json({
                        success: true
                    });
        });

            export default routes;