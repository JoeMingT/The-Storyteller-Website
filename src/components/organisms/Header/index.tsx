import {
    HeaderDesktopMenu,
    HeaderLogoButton,
    HeaderMobileMenu,
    HeaderWrapper,
} from "@StorytellerComponents/molecules";

import { useEffect, useRef } from "react";

/**
 * The Header component that will be displayed on top of the website at all times.
 * Will render on all pages and will render dynamically.
 *
 * @returns {React.ReactNode} The Header component
 */
const Header: React.FC<any> = (): React.ReactNode => {
    // Reference for Header (For after the thing rendered)
    const headerRef = useRef<HTMLDivElement>(null);

    // Function to Check if header is on top
    // Will call on:
    // 1. Initial load
    // 2. Scrolling page
    const checkHeaderAtTop = (state: boolean) => {
        if (headerRef.current) {
            if (state) {
                headerRef.current!.style!.background = "#EFEDE7";
                headerRef.current!.style!.boxShadow = "none";
            } else {
                headerRef.current!.style!.background = "#FFFFFF";
                headerRef.current!.style!.boxShadow =
                    "0 2px 10px 0 rgba(0,0,0,.1)";
            }
        }
    };

    useEffect(() => {
        // Initial Load
        if (window.scrollY > 10) {
            checkHeaderAtTop(false);
        } else {
            checkHeaderAtTop(true);
        }

        // Scolling Page
        window.addEventListener("scroll", (e) => {
            const window = e.currentTarget;
            if ((window as Window)?.scrollY > 10) {
                checkHeaderAtTop(false);
            } else {
                checkHeaderAtTop(true);
            }
        });
    }, []);

    return (
        <HeaderWrapper headerRef={headerRef}>
            <HeaderLogoButton />
            <HeaderDesktopMenu display={["none", "none", "none", "flex"]} />
            <HeaderMobileMenu
                display={["default", "default", "default", "none"]}
            />
        </HeaderWrapper>
    );
};

export default Header;
