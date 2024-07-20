"use client";

import { type MouseEvent, useState } from "react";
import { Spinner } from "@/components";
import Button from "./normal";
import type { ButtonAsyncProps } from "./types";

const STATE = {
  IDLE: "idle",
  LOADING: "loading",
};

export function ButtonAsync(props: ButtonAsyncProps) {
  const [state, setState] = useState(STATE.IDLE);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const fun = async () => {
      if (typeof props.onClick !== "function") return;
      setState(STATE.LOADING);

      await props.onClick(event);
    };

    fun()
      .then(() => {
        setState(STATE.IDLE);
      })
      .catch(() => {
        setState(STATE.IDLE);
      });
  };

  const MESSAGES = {
    [STATE.IDLE]: props.children,
    [STATE.LOADING]: <Spinner />,
  };

  return (
    <Button {...props} onClick={handleClick} disabled={state === STATE.LOADING}>
      {MESSAGES[state]}
    </Button>
  );
}
