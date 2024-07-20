// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parseClassNames(...classes: (string | any)[]) {
  return classes
    .flat(5)
    .filter((c) => typeof c === "string" && c.length > 0)
    .join(" ");
}
