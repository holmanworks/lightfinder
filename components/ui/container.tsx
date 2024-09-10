import clsx from "clsx"

export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={clsx("mx-auto max-w-[672px] pl-4 pr-4", className)}
      {...props}
    />
  )
}

