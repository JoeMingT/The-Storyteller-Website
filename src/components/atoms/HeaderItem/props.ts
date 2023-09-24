import { STTextProps } from "../STText/props";

export interface HeaderItemProps extends STTextProps {
  href: string;
  children: React.ReactNode | string;
}