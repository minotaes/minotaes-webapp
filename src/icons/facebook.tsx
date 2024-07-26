import type { IconProps } from "./types";
import { icon } from "./icon";

export function FacebookIcon(props: IconProps) {
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
      <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
    </svg>
  );
}
