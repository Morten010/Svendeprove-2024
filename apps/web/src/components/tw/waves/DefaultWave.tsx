import { cn } from "@/lib/utils";
import { FC, SVGProps } from "react";

interface DefaultWaveProps extends SVGProps<SVGSVGElement> {}

const DefaultWave: FC<DefaultWaveProps> = ({ className, ...props }) => {
  return (
    <svg
      width="1920"
      height="204"
      viewBox="0 0 1920 204"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["w-full h-auto", className])}
      {...props}
    >
      <path
        d="M1940 92.917C1940 92.917 1904.97 0.678223 1723.1 0.678223C1541.22 0.678223 1511.58 94.9621 1398.42 92.917C1195.02 90.9372 1215.19 46.7976 991.556 46.7976C767.917 46.7976 749.056 122.289 616.7 154.125C435.526 189.729 100.792 123.186 50.396 110.459C0 97.7323 0 97.7323 0 97.7323V203.678H1940V92.917Z"
        fill="url(#paint0_linear_1_1482)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_1482"
          x1="485"
          y1="51.4282"
          x2="485"
          y2="51.4282"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#62BB65" stopOpacity="0" />
          <stop offset="1" stopColor="#62BB65" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default DefaultWave;
