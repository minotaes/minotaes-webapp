import {
  type AnchorHTMLAttributes,
  type HTMLAttributes,
  type CSSProperties,
  type ReactNode,
} from "react";
import { type URL } from "url";

export declare interface TextStyles {
  color?: "primary" | "secondary";
  children: ReactNode;
  size?: "small" | "medium" | "large" | "giant" | "inherit";
  weight?: "light" | "normal" | "bold";
  align?: "left" | "center" | "right";
  style?: CSSProperties;
  flex?: Array<"row" | "column" | "ai-center" | "jc-center">;
  embed?: boolean;
  break?: boolean;
}

export declare type TextProps<T> = TextStyles & HTMLAttributes<T>;
export declare type TextAnchorProps = TextStyles &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string | URL;
  };
