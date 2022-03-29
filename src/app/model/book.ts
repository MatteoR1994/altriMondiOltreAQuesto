export interface Book {
    idBook: number;
    title: string;
    idAuthor: string;
    idPublishingHouse: number;
    publishingYear: number;
    pages: number;
    idFormat: number;
    idDetailsType: number;
    idBookSerie?: number;
    numberBookSerie?: number;
    coverUrl: string;
    isbn: string;
    autographed: boolean;
    language: string;
    idPosition: number;
}