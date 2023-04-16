import clsx from "clsx";

type Button = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface Props extends Button {
  size?: "sm" | "lg";
  btnType: "primary" | "secondary";
}

export function Button({
  children,
  className,
  size,
  btnType,
  ...props
}: Props) {
  return (
    <div className={className}>
      <button
        className={clsx(
          "w-full rounded-lg disabled:opacity-50",
          size === "lg" ? "py-4" : "py-3",
          btnType === "secondary"
            ? "bg-black-light text-white "
            : "bg-primary text-black-light "
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
