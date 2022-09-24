import { Request, Response } from "express";

import knex from "../database/connection";

    class PointsController {
        async create(request: Request, response: Response) {
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

            const point = {
                image: "image-fake.jpg",
                name,
                email,
                whatsapp,
                latitude,
                longitude,
                city,
                uf
            }

            const insertedPointId = await knex("points").insert(point);

            const point_id = insertedPointId[0];

            const pointItems = items.map((item_id: number) => {
                return {
                    point_id,
                    item_id
                };
            });

                await knex("point_items").insert(pointItems);        

                    return response.json({
                        id: point_id,
                        ...point
                    });
        }
    }

        export default PointsController;