import { textStylesHandler } from "./text-styles-handler";
import { type TextProps } from "./types";

export function Subtitle(props: TextProps<HTMLTitleElement>) {
  return <h2 {...textStylesHandler(props)}>{props.children}</h2>;
}
