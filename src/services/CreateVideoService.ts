import { getRepository } from "typeorm";
import { Videos } from "../entities/Videos";
import { Category } from "../entities/Category";


type VideoRequest = {
    name: string;
    description: string;
    duration: number;
    category_id: string;
}

export class CreateVideoService {
    async execute({ name, description, duration, category_id }: VideoRequest): Promise< Error | Videos> {
        const repo = getRepository(Videos);
        const repoCategory = getRepository(Category);

        if(!(await repoCategory.findOne(category_id))) {
            return new Error("Category does not exist!")
        }

        const video = repo.create({ name, description, duration, category_id });

        await repo.save(video);
        
        return video;
    }
}