import { Request, Response } from "express";
import { UpdateVideoService } from "../services/UpdateVideoService";

export class UpdateVideoController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { description } = request.body;

        const service = new UpdateVideoService();

        const result = await service.execute({ id, description });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}