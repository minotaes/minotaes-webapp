import type { IconProps } from "./types";
import { icon } from "./icon";

export function InstagramIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      x="0px"
      y="0px"
      {...icon(props)}
    >
      <path d="M8 3a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5H8zm10 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6 2a5 5 0 1 1-.001 10.001A5 5 0 0 1 12 7zm0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
    </svg>
  );
}
