import Link from "next/link";
import { textStylesHandler } from "./text-styles-handler";
import { type TextAnchorProps } from "./types";

export function Anchor(props: TextAnchorProps) {
  if (props.href === undefined) props.href = "#";
  return <Link {...props} {...textStylesHandler(props)} />;
}
