import type { IconProps } from "./types";
import { icon } from "./icon";

export function AppleMusicIcon(props: IconProps) {
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
      <path d="M37 4H13c-4.962 0-9 4.037-9 9v24c0 4.963 4.038 9 9 9h24c4.962 0 9-4.037 9-9V13c0-4.963-4.038-9-9-9zm-2 23v4.021h-.002A5.005 5.005 0 0 1 30 36h-.5c-.987 0-1.933-.42-2.596-1.152a3.519 3.519 0 0 1-.887-2.705C26.195 30.38 27.787 29 29.643 29H31c1.103 0 2-.897 2-2v-9.795l-12 2.25V34c0 2.757-2.243 5-5 5h-.5c-.987 0-1.933-.42-2.596-1.152a3.519 3.519 0 0 1-.887-2.705C12.195 33.38 13.787 32 15.643 32H17c1.103 0 2-.897 2-2V15.353a2 2 0 0 1 1.633-1.966l12.591-2.36c.439-.083.891.033 1.234.319.345.286.542.707.542 1.154V27z" />
    </svg>
  );
}
