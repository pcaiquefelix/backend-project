import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CategoryUploadRequest = {
    id: string;
    name: string;
    description: string;
}

export class UpdateCategoryService {
    async execute({ id, name, description }: CategoryUploadRequest) {
        const repo = getRepository(Category);

        const category = await repo.findOne(id)

        if (!category) {
            return new Error("Category does not exist!");
        }

        category.name = name;
        category.description = description;

        await repo.save(category);

        return category;
    }
}