"use client";

import { MainTitle, Paragraph } from "@/components";
import Button from "@/components/button/normal";
import { useState } from "react";
import styles from "./home.module.css";

const Page = () => {
  const [say, setSay] = useState("Welcome to my website");

  const setMessage1 = () => {
    setSay("hello word");
  };

  const setMessage2 = () => {
    setSay("Happy Day");
  };

  const clearSay = () => {
    setSay("");
  };

  return (
    <div>
      <MainTitle size="large" color="secondary" weight="bold">
        Home
      </MainTitle>
      <div className={styles.container}>
        <Paragraph>{say}</Paragraph>
        <Button onClick={setMessage1} color="success">
          set message 1
        </Button>
        <Button onClick={setMessage2} color="success">
          set message 2
        </Button>
        <Button onClick={clearSay} color="danger">
          clear
        </Button>
      </div>
    </div>
  );
};

export default Page;
