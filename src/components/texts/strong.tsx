import { textStylesHandler } from "./text-styles-handler";
import { type TextProps } from "./types";

export function Strong(props: TextProps<HTMLSpanElement>) {
  return <strong {...textStylesHandler(props)}>{props.children}</strong>;
}
