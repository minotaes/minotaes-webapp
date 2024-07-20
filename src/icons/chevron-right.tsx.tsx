import type { IconProps } from "./types";
import { icon } from "./icon";

export function IconChevronRight(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...icon(props)}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 6l6 6l-6 6" />
    </svg>
  );
}
