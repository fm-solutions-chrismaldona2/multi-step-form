import { SvgProps } from "@/shared/types";
import { memo } from "react";

export const SidebarBackground = memo(({ className }: SvgProps) => {
  return (
    <svg
      width="367"
      height="303"
      viewBox="0 0 367 303"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.003 199.27C69.942 288.707 235.462 341.186 278.655 268.689C321.849 196.192 212.556 183.036 173.92 108.12C135.285 33.2042 105.263 -13.5538 49.438 3.51324C-6.386 20.5812 -5.936 109.833 32.003 199.27Z"
        fill="#6259FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M299.79 257.322C360.469 229.044 392.629 113.796 341.665 85.7943C290.7 57.7913 284.268 133.373 233.606 161.781C182.944 190.189 151.466 211.988 164.562 250.022C177.658 288.056 239.111 285.6 299.79 257.322Z"
        fill="#F9818E"
      />
      <path
        d="M232 125.266L242.607 114.46M276.156 130.75L263.65 120.247M254.255 145.16L247.347 159.958"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M67 203.06C104.003 203.06 134 173.063 134 136.06C134 99.0572 104.003 69.0602 67 69.0602C29.997 69.0602 0 99.0572 0 136.06C0 173.063 29.997 203.06 67 203.06Z"
        fill="#FFAF7E"
      />
    </svg>
  );
});
