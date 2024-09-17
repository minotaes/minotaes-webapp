import type React from "react";
import { type SVGProps } from "react";

export declare type IconProps = {
  className?: string;
  style?: React.CSSProperties;
  size?: "em" | "small" | "medium" | "large" | "full";
  color?: "inherit" | "primary" | "secondary" | "transparent";
  fill?: "inherit" | "primary" | "secondary" | "transparent";
} & SVGProps<SVGSVGElement>;
