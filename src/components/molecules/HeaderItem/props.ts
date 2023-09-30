import { STTextProps } from "@StorytellerComponents/atoms/STText/props";

export interface HeaderItemProps extends STTextProps {
    href: string;
    children: React.ReactNode | string;
}
