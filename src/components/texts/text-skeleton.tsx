import styles from "./text.module.css";

interface ParagraphSkeletonProps {
  width?: string;
  height?: "small" | "medium" | "large";
}

export function TextSkeleton(props: ParagraphSkeletonProps) {
  // TODO: Integrar con los estilos del text
  const height = {
    small: "1em",
    medium: "1.25em",
    large: "1.75em",
  }[props.height ?? "medium"];

  return (
    <strong
      className={styles.skeleton}
      style={{
        width: props.width ?? "100%",
        height,
      }}
    />
  );
}
