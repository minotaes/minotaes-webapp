import type { ButtonProps } from "./types";
import { useButtonStyle } from "./button";

export default function Button(props: ButtonProps) {
  return <button {...useButtonStyle(props)}>{props.children}</button>;
}
