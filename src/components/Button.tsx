import clsx from "clsx";

type Button = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface Props extends Button {
  size?: "sm" | "lg";
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export function Button({
  children,
  className,
  size = "lg",
  variant = "primary",
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        "w-full rounded-lg disabled:opacity-50",
        size === "lg" ? "py-4" : "py-3",
        variant === "secondary"
          ? "bg-black-light text-white "
          : "bg-primary text-black-light "
      )}
      {...props}
    >
      {children}
    </button>
  );
}
