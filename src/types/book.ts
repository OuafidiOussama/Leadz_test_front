import { Author } from "./author"
import { Review } from "./review"

export type Book = {
    id: number,
    title: string,
    description?: string,
    publishedAt: Date,
    genre: string,
    author: Author,
    reviews?: Review[],
} 