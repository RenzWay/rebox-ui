export function Badge({
  text,
  variant,
}: {
  text: string | number | undefined;
  variant?: "primary" | "success" | "danger" | "warning" | "info";
}) {
  return <span className={`badge badge-${variant}`}>{text}</span>;
}
