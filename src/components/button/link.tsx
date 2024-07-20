import Link from "next/link";
import type { ButtonLinkProps, ButtonProps } from "./types";
import { useButtonStyle } from "./button";

// TODO: refactor to useButtonStyle
export function ButtonLink(props: ButtonLinkProps) {
  const { ...attributes } = props;
  return (
    <Link
      href={props.href ?? "/"}
      {...(useButtonStyle(attributes as ButtonProps) as ButtonLinkProps)}
    >
      {props.children}
    </Link>
  );
}
