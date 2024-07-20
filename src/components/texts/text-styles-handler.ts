import { parseClassNames } from "@/utils";
import styles from "./text.module.css";
import { type TextProps } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function textStylesHandler(props: TextProps<any>) {
  const className = parseClassNames(
    props.className,
    styles.text,
    styles[`color--${props.color ?? "inherit"}`],
    styles[`size--${props.size ?? "inherit"}`],
    styles[`weight--${props.weight ?? "normal"}`],
    styles[`align--${props.align ?? "left"}`],
    props.break === true && styles.break,
    props.embed === true && styles.embed,
    props.flex !== undefined && styles.flex,
    props.flex?.map((flex) => styles[`flex--${flex}`]),
  );

  return {
    className,
    style: props.style,
  };
}
