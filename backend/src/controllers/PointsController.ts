import { Request, Response } from "express";

import knex from "../database/connection";

    class PointsController {
        async index(request: Request, response: Response) {
            const {
                city,
                uf,
                items
            } = request.query;

            const parsedItems = String(items)
                .split(",")
                .map((item: any) =>
                    Number(item.trim()));

            const points = await knex("points")
                .join("point_items", "points.id", "=", "point_items.point_id")
                .whereIn("point_items.item_id", parsedItems)
                .where("city", String(city))
                .where("uf", String(uf))
                .distinct()
                .select("points.*");

            const serializedPoints = points.map((point: any) => {
                return {
                    ...point,
                        image_url: `http://192.168.1.103:3333/images/${point.image}`
                };
            });

                return response.status(200).json({
                    points: serializedPoints
                });
        };

        async show(request: Request, response: Response) {
            const {
                id
            } = request.params;

            const point = await knex("points")
                .where("id", id)
                .first();
            
                if(!point) {
                    return response.status(404).json({
                        message:
                            `Point ID ${id} not found on Database.`
                    });
                };

            const serializedPoint = {
                ...point,
                    image_url: `http://192.168.1.103:3333/images/${point.image}`
            };

            const items = await knex("items")
                .join("point_items", "items.id", "=", "point_items.item_id")
                .where("point_items.point_id", id)
                .select("items.title");

                return response.status(200).json({
                    point: serializedPoint,
                        items
                });
        };

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
                image: request.file?.filename,
                name,
                email,
                whatsapp,
                latitude,
                longitude,
                city,
                uf
            };

            const insertedPointId = await knex("points")
                .insert(point);

            const point_id = insertedPointId[0];

            const pointItems = items
                .split(",")
                .map((item: string) => Number(item.trim()))
                .map((item_id: number) => {
                    return {
                        point_id,
                        item_id
                    };
            });

                await knex("point_items")
                    .insert(pointItems);        

                    return response.status(201).json({
                        id: point_id,
                        ...point
                    });
        };
    };

        export default PointsController;