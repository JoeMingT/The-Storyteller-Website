import { galleryPreviewTestData } from "@Storyteller/data/testGalleryPreview";
import {
    STComponentWrapper,
    SwiperWrapper,
} from "@StorytellerComponents/atoms";
import { GalleryPreviewItem } from "@StorytellerComponents/molecules";
import { SwiperSlide } from "swiper/react";

/**
 * The Gallery Preview component. Used in the landing page to preview some of the galleries
 * that is available in the database. Act as a quick way for people to quickly check out
 * what the company can do.
 *
 * @returns {React.ReactNode} The Component that is the Preview for the Galleries
 */
const GalleryPreview: React.FC<any> = () => {
    return (
        <STComponentWrapper>
            <SwiperWrapper
                leftButtonProps={{
                    "aria-label": "Previous Gallery",
                    iconSrc: "/assets/icon/left-nav-arrow-white.svg",
                    iconAlt: "White Colored Left Arrow",
                    iconWidth: ["0px", "50px", "60px", "80px", "100px"],
                    display: ["none", "initial"],
                    px: ["1rem", "1rem", "1.25rem", "1.5rem", "2rem"],
                    h: "100%",
                }}
                rightButtonProps={{
                    "aria-label": "Next Gallery",
                    iconSrc: "/assets/icon/right-nav-arrow-white.svg",
                    iconAlt: "White Colored Right Arrow",
                    iconWidth: ["0px", "50px", "60px", "80px", "100px"],
                    display: ["none", "initial"],
                    px: ["1rem", "1rem", "1.25rem", "1.5rem", "2rem"],
                    h: "100%",
                }}
                breakpoints={{
                    0: { allowTouchMove: true },
                    480: { allowTouchMove: false },
                }}
            >
                {galleryPreviewTestData.map((data) => {
                    return (
                        <SwiperSlide key={data.url} style={{ height: "auto" }}>
                            <GalleryPreviewItem
                                url={data.url}
                                title={data.title}
                            />
                        </SwiperSlide>
                    );
                })}
            </SwiperWrapper>
        </STComponentWrapper>
    );
};

export default GalleryPreview;
