import type { IconProps } from "./types";
import { icon } from "./icon";

export function SpotifyIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 30 30"
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      x="0px"
      y="0px"
      {...icon(props)}
    >
      <path d="M15 3C8.4 3 3 8.4 3 15s5.4 12 12 12 12-5.4 12-12S21.6 3 15 3zm4.731 18c-.22 0-.33-.11-.55-.22-1.65-.991-3.74-1.54-5.94-1.54-1.21 0-2.53.22-3.63.44-.22 0-.44.11-.55.11-.44 0-.77-.33-.77-.77s.22-.77.66-.77c1.43-.33 2.861-.55 4.401-.55 2.53 0 4.84.66 6.82 1.76.22.22.44.33.44.77-.222.55-.552.77-.881.77zm1.209-3.079c-.22 0-.44-.11-.66-.22-1.87-1.21-4.511-1.87-7.37-1.87-1.43 0-2.751.22-3.74.44-.22.11-.33.11-.55.11-.55 0-.881-.44-.881-.881 0-.55.22-.77.77-.991 1.32-.33 2.641-.66 4.511-.66 3.08 0 5.94.77 8.361 2.2.33.22.55.55.55.881-.111.55-.44.991-.991.991zm1.43-3.521c-.22 0-.33-.11-.66-.22-2.2-1.21-5.39-1.98-8.47-1.98-1.54 0-3.19.22-4.621.55-.22 0-.33.11-.66.11-.66.111-1.1-.44-1.1-1.099s.33-.991.77-1.1C9.39 10.22 11.26 10 13.24 10c3.41 0 6.93.77 9.681 2.2.33.22.66.55.66 1.1-.11.66-.551 1.1-1.211 1.1z" />
    </svg>
  );
}
