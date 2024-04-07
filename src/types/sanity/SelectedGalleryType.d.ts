export type SelectedGalleryType = {
    _id: string;
    name: string;
    venue: string;
    clients: string[];
    photographers: string[];
    images: { url: string }[];
};
