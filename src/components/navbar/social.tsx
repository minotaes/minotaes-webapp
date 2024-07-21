import React from "react";
import {
  FacebookIcon,
  AppleMusicIcon,
  SpotifyIcon,
  InstagramIcon,
  SideMenu,
} from "@/icons";

import styles from "./social.module.css";

const defaultIconStyle = {
  color: "transparent" as const,
  size: "small" as const,
  fill: "primary" as const,
};

export function Social() {
  return (
    <div className={styles.social}>
      <SpotifyIcon {...defaultIconStyle} />
      <AppleMusicIcon {...defaultIconStyle} />
      <InstagramIcon {...defaultIconStyle} />
      <FacebookIcon {...defaultIconStyle} />
      <SideMenu {...defaultIconStyle} />
    </div>
  );
}
