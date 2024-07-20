"use client";

import { useRouter } from "next/navigation";
import { cloneElement } from "react";
import Button from "./normal";
import type { RedirectButtonProps } from "./types";

export default function ButtonRedirect(props: RedirectButtonProps) {
  const router = useRouter();

  const onClick: RedirectButtonProps["onClick"] = (e) => {
    if (props.onClick !== undefined) props.onClick(e);
    router.push(props.href);
  };

  return cloneElement(
    <Button />,
    {
      ...props,
      onClick,
    },
    props?.children,
  );
}
