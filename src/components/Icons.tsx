import { SVGProps } from "react";

export type IconProps = {
  color?: string;
};
export function IcOutlineCircle(props: SVGProps<SVGSVGElement> & IconProps) {
  const { color } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill={color || "currentColor"}
        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"
      ></path>
    </svg>
  );
}

export function IcRoundCircle(props: SVGProps<SVGSVGElement & IconProps>) {
  const { color } = props;
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill={color || "currentColor"}
        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2z"
      ></path>
    </svg>
  );
}

export function IcSharpDensityMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M3 3h18v2H3zm0 16h18v2H3zm0-8h18v2H3z"
      ></path>
    </svg>
  );
}
