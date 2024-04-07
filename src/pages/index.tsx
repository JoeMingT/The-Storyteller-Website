import { defaultAboutUsData } from "@Storyteller/data/defaultAboutUsData";
import { defaultGalleryData } from "@Storyteller/data/defaultGalleryData";
import { ThumbnailGalleryType } from "@Storyteller/types";
import {
    AboutUs,
    GalleryPreview,
    Splash,
} from "@StorytellerComponents/organisms";
import {
    getAboutUsPreviewText,
    getAllGalleriesThumbnail,
} from "@StorytellerSanity/queries";
import { type GetServerSideProps } from "next";

interface LandingPageProps {
    galleryPreviewData: ThumbnailGalleryType[];
    aboutUsPreviewText: string;
}

/**
 * Route: "/"
 *
 * Components Related: "Splash", "AboutUs", "GalleryPreview"
 *
 * This is the landing page component. It is the first page that people will reach when they access the website normally.
 */
export default function Landing({
    galleryPreviewData,
    aboutUsPreviewText,
}: LandingPageProps) {
    return (
        <>
            <Splash />
            <AboutUs aboutUsPreviewText={aboutUsPreviewText} />
            <GalleryPreview galleryPreviewData={galleryPreviewData} />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const galleryPreviewData = await getAllGalleriesThumbnail(3, 0);
    const aboutUsPreviewText = await getAboutUsPreviewText();
    // Checking if client failed to initialized and return null. Return default data if no client initialized.

    const formattedAboutUsText = aboutUsPreviewText ? aboutUsPreviewText.preview
        // loop through each block
        .map((block) => {
            // if it's not a text block with children,
            // return nothing
            if (block._type !== "block" || !block.children) {
                return "";
            }
            // loop through the children spans, and join the
            // text strings
            return block.children.map((child: any) => child.text).join("");
        })
        // join the paragraphs leaving split by two linebreaks
        .join("\n\n") : defaultAboutUsData.preview.body;
    return {
        props: {
            galleryPreviewData: galleryPreviewData ? galleryPreviewData : defaultGalleryData.slice(0,3),
            aboutUsPreviewText: formattedAboutUsText,
        },
    };
};
