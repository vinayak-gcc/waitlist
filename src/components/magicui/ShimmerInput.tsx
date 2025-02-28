import React, { CSSProperties, ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export interface ShimmerInputProps extends ComponentPropsWithoutRef<"input"> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ShimmerInput = React.forwardRef<
  HTMLInputElement,
  ShimmerInputProps
>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.07em",
      shimmerDuration = "4s",
      borderRadius = "150px",
      background = "rgba(0, 0, 0, 3)",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        style={
          {
            "--spread": "180deg", // Increased width of the shimmer effect
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
          } as CSSProperties
        }
        className={cn(
          "group relative z-40 flex cursor-text overflow-hidden whitespace-nowrap border border-white/20 px-6 py-2 text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-black",
          "transform-gpu transition-transform duration-300 ease-in-out",
          className,
        )}
      >
        {/* Default text "Enter email" */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 scale-[0.9] -ml-2 text-gray-400  pointer-events-none text-sm z-10">
          Enter email
        </div>
        
        {/* spark container */}
        <div
          className={cn(
            "-z-30 blur-[10px]",
            "absolute inset-0 overflow-visible [container-type:size]",
          )}
        >
          {/* spark */}
          <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
            {/* spark before with glow effect */}
            <div 
              className="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]"
              style={{ filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.7))" }}
            />
          </div>
        </div>
        
        <input
          className="z-10 w-full bg-transparent placeholder:text-sm text-inherit outline-none"
          ref={ref}
          placeholder=""
          {...props}
        />
        
        {children}

        {/* Highlight */}
        {/* <div
          className={cn(
            "insert-0 absolute size-full",

            "rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",

            // transition
            "transform-gpu transition-all duration-300 ease-in-out",

            // on hover
            // "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",

            // on click
            "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]",
          )}
        /> */}

        {/* backdrop */}
        <div
          className={cn(
            "absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]",
          )}
        />
      </div>
    );
  },
);

ShimmerInput.displayName = "ShimmerInput";