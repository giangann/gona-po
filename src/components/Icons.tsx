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

export function IcTwotoneClose(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="white"
        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"
      ></path>
    </svg>
  );
}

export function IcBaselineFacebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="white"
        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
      ></path>
    </svg>
  );
}

export function MdiYoutube(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="white"
        d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"
      ></path>
    </svg>
  );
}

export function PhInstagramLogoFill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 256 256" {...props}>
      <path
        fill="white"
        d="M160 128a32 32 0 1 1-32-32a32.1 32.1 0 0 1 32 32Zm68-44v88a56 56 0 0 1-56 56H84a56 56 0 0 1-56-56V84a56 56 0 0 1 56-56h88a56 56 0 0 1 56 56Zm-52 44a48 48 0 1 0-48 48a48 48 0 0 0 48-48Zm16-52a12 12 0 1 0-12 12a12 12 0 0 0 12-12Z"
      ></path>
    </svg>
  );
}

export function BrandicoTwitter(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="0.75em" height="1em" viewBox="0 0 748.681 1000" {...props}>
      <path
        fill="white"
        d="M748.681 875.015c0 34.315-12.307 63.755-36.922 88.227c-24.615 24.519-54.117 36.758-88.576 36.758H375.078c-103.368 0-191.702-36.519-265.055-109.647C36.65 817.234.001 729.224.001 626.187v-501.08c0-35.311 12.219-64.969 36.649-89.031C61.08 12.049 90.923.001 126.146.001c34.199 0 63.584 12.273 87.981 36.791c24.471 24.492 36.724 53.878 36.724 88.228v181.436h353.233c32.069 0 59.545 11.366 82.466 34.116c22.893 22.71 34.315 49.967 34.315 81.797c0 31.769-11.421 59.073-34.233 81.802c-22.82 22.698-50.239 34.083-82.173 34.083H250.851v87.817c0 34.438 12.021 63.687 36.184 87.817c24.136 24.063 53.441 36.109 87.918 36.109h248.182c34.438 0 64.008 12.287 88.623 36.793c24.615 24.518 36.922 53.925 36.922 88.226"
      ></path>
    </svg>
  );
}

export function IcSharpArrowBackIos(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="white"
        d="M17.51 3.87L15.73 2.1L5.84 12l9.9 9.9l1.77-1.77L9.38 12l8.13-8.13z"
      ></path>
    </svg>
  );
}

export function IcTwotoneKeyboardArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="white"
        d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"
      ></path>
    </svg>
  );
}

export function MaterialSymbolsArrowInsert(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path fill="white" d="M17.6 18L8 8.4V17H6V5h12v2H9.4l9.6 9.6Z"></path>
    </svg>
  );
}

export function IcSharpArrowDownward(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="white"
        d="m20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8l8-8z"
      ></path>
    </svg>
  );
}

export function IcBaselineSquare(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path fill="white" d="M3 3h18v18H3z"></path>
    </svg>
  );
}

export function IcOutlineSquare(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M3 3v18h18V3H3zm16 16H5V5h14v14z"></path>
    </svg>
  );
}
