import { parseClassNames } from "@/utils";
import styles from "./button.module.css";
import { type ButtonProps } from "./types";

const getStyle = (styleFlag: string, prop: string | undefined) => {
  if (typeof prop !== "string") return "";

  const className = `${styleFlag}--${prop}`;
  return styles[className] ?? "";
};

export function useButtonStyle(props: ButtonProps) {
  const { icon, color, className, ...attributes } = props;

  const classNameParsed = parseClassNames(
    className,
    styles.button,
    getStyle("color", color),
    icon !== undefined && styles.icon,
  );

  return {
    className: classNameParsed,
    ...attributes,
  };
}
