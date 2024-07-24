import React from "react";
import { MainTitle, Social } from "@/components";

const defaultTextStyle = {
  color: "primary" as const,
};

const Header = () => {
  return (
    <header>
      <img
        src="https://i.scdn.co/image/ab6761610000e5ebdb1e889153a9a882dfd4a18f"
        alt="bratty"
      />
      <Social />
      <MainTitle {...defaultTextStyle} size={"large"}>
        Artista
      </MainTitle>
    </header>
  );
};

export default Header;
