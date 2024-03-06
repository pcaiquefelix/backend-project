import { getRepository } from "typeorm";
import { Videos } from "../entities/Videos";


export class DeleteVideoService {
    async execute(id: string) {
        const repo = getRepository(Videos);

        if (!(await repo.findOne(id))) {
            return new Error('Video does not exist!')
        }

        await repo.delete(id);
    }
}