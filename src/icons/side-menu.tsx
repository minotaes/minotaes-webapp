import type { IconProps } from "./types";
import { icon } from "./icon";

export function SideMenu(props: IconProps) {
  return (
    <svg
      viewBox="0 0 50 50"
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      x="0px"
      y="0px"
      {...icon(props)}
    >
      <path d="M3 9a1 1 0 1 0 0 2h44a1 1 0 1 0 0-2H3zm0 15a1 1 0 1 0 0 2h44a1 1 0 1 0 0-2H3zm0 15a1 1 0 1 0 0 2h44a1 1 0 1 0 0-2H3z" />
    </svg>
  );
}
