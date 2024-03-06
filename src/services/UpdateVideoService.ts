import { getRepository } from "typeorm";
import { Videos } from "../entities/Videos";

type VideoUploadRequest = {
    id: string;
    description: string;
}

export class UpdateVideoService {
    async execute({ id, description }: VideoUploadRequest) {
        const repo = getRepository(Videos);

        const video = await repo.findOne(id);

        if (!video) {
            return new Error('Video does not exist!')
        }

        video.description = description;

        await repo.save(video);

        return video;
    }
}