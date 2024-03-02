import { Book } from "./book"

export type Review = {
    id: number,
    fullName: string,
    email: string,
    comment: string,
    creationDate: Date,
    book: Book
}