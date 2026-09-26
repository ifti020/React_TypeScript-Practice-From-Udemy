import type {BookModel} from "../models/BookModel";
const BASE_URL= import.meta.env.VITE_API_BASE_URL;

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
            `${BASE_URL}/books?pageNo=${pageNo}&pageSize=${pageSize}`
        );

        /*
         // for debuggin pupose
        // console.log("Request URL:", response.url);
        // console.log("Status:", response.status);
        // console.log("Content-Type:", response.headers.get("content-type"));

         */

        if (!response.ok) {
            throw new Error("Failed to fetch books.");
        }

            return  await response.json();

    }



}