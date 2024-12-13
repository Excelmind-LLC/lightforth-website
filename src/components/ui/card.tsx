import { ComponentProps, PropsWithChildren } from "react";
import { cn } from "../../utils/cn";

export const Card = ({
  children,
  animate,
}: ComponentProps<"div"> & {
  animate?: boolean;
}) => {
  return (
    <div className="w-[716px] h-auto px-11 py-14 max-h-[90vh] overflow-y-scroll hide-scrollbar rounded-xl border border-[#ccc]/50 bg-white flex flex-col items-start gap-10 z-50 relative">
      {children}
      {animate ? (
        <img
          src="/animation.gif"
          alt="animation"
          className="absolute bottom-0 inset-x-0 w-full h-auto object-center object-cover -z-10"
        />
      ) : null}
    </div>
  );
};

const CardContainer = ({ children }: PropsWithChildren) => (
  <div className="w-full flex flex-col items-start gap-3">{children}</div>
);

const CardText = ({ children, className, ...props }: ComponentProps<"p">) => {
  return (
    <p
      className={cn("text-xl font-medium text-primary-300", className)}
      {...props}
    >
      {children}
    </p>
  );
};

const CardHeading = ({
  children,
  className,
  ...props
}: ComponentProps<"h4">) => (
  <h4
    className={cn(
      "text-black font-medium text-[32px] leading-normal",
      className,
    )}
    {...props}
  >
    {children}
  </h4>
);

Card.Heading = CardHeading;
Card.Text = CardText;
Card.Container = CardContainer;
