import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const flexVariants = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      "row-reverse": "flex-row-reverse",
      col: "flex-col",
      "col-reverse": "flex-col-reverse",
    },
    justify: {
      normal: "justify-normal",
      start: "justify-start",
      end: "justify-end ",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
      stretch: "justify-stretch",
    },
    align: {
      normal: "content-normal",
      start: "content-start",
      end: "content-end ",
      center: "content-center",
      between: "content-between",
      around: "content-around",
      evenly: "content-evenly",
      baseline: "content-baseline",
      stretch: "content-stretch",
    },
    gap: {
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
    },
  },
});

export interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexVariants> {
  asChild?: boolean;
}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    { className, direction, align, justify, gap, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        className={cn(
          flexVariants({ direction, align, justify, gap, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Flex.displayName = "Flex";

export { Flex, flexVariants };
