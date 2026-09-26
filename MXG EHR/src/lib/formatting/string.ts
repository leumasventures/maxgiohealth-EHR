export function capitalize(
  value: string
) {
  if (!value) return "";

  return (
    value.charAt(0).toUpperCase() +
    value.slice(1).toLowerCase()
  );
}

export function titleCase(
  value: string
) {
  return value
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) =>
      letter.toUpperCase()
    );
}