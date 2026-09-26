import type {BookModel} from "../models/BookModel.ts";


interface BookResponse {
    content : BookModel[];
    page: {
        totalElements: number;
        totalPages: number;
    };
}

export const bookService = {
    // All the Services Regarding Books
    async getBooks(pageNo: number , pageSize:number) : Promise <BookResponse>{
        const response = await fetch(
            `http://localhost:8080/api/books?pageNo=${pageNo}&pageSize=${pageSize}`,
        );

        if (!response.ok) {
            throw new Error("Failed to fetch books.");
        }

            return  await response.json();

    }

}