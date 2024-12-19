import { ComponentProps, PropsWithChildren } from "react";
import { cn } from "../../utils/cn";

export const Card = ({
  children,
  animate,
}: ComponentProps<"div"> & {
  animate?: boolean;
}) => {
  return (
    <div className="w-[716px] h-full px-11 py-10 max-h-[90vh] rounded-xl border border-[#ccc]/50 bg-white flex flex-col items-start justify-between gap-5 z-50 relative">
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
      "text-black font-semibold text-[32px] leading-normal",
      className,
    )}
    {...props}
  >
    {children}
  </h4>
);

const CardBody = ({ className, children, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "w-full overflow-y-scroll flex-1 hide-scrollbar flex flex-col gap-2",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

Card.Heading = CardHeading;
Card.Text = CardText;
Card.Container = CardContainer;
Card.Body = CardBody;
