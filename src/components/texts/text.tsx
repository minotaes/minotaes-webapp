import { textStylesHandler } from "./text-styles-handler";
import { type TextProps } from "./types";

export function Text(props: TextProps<HTMLSpanElement>) {
  return <span {...textStylesHandler(props)}>{props.children}</span>;
}
