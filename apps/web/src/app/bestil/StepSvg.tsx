import { cn } from "@/lib/utils";
import React from "react";

export default function StepSvg({ isStepTwo }: { isStepTwo: boolean }) {
  return (
    <div className="relative w-[55px] h-[184px]">
      <div
        className={`relative w-full overflow-hidden transition-all duration-700 an ${isStepTwo ? "h-[50%]" : "h-[100%]"}`}
      >
        <svg
          width="55"
          height="184"
          viewBox="0 0 55 184"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 z-50"
        >
          <g>
            <circle cx="27.5" cy="27.5" r="26" stroke="#97e09b" stroke-width="3" stroke-linejoin="round"
            className={cn("transition-transfor duration-700", {
              "scale-50 translate-x-3 translate-y-3": !isStepTwo
            })}
            />
            <circle cx="27.5" cy="27.5" r="20" fill="#97e09b" />
            <circle cx="27.5" cy="163.5" r="20" fill="#97e09b" />
            <path
              d="M29.7314 33.5H28.4658V25.4062C28.4658 25.099 28.4658 24.8359 28.4658 24.6172C28.471 24.3932 28.4762 24.1901 28.4814 24.0078C28.4919 23.8203 28.5049 23.6302 28.5205 23.4375C28.359 23.6042 28.208 23.7474 28.0674 23.8672C27.9268 23.9818 27.7523 24.125 27.5439 24.2969L26.2393 25.3438L25.5596 24.4609L28.6533 22.0781H29.7314V33.5Z"
              fill="black"
            />
            <path
              d="M24.3188 168.5V167.477L28.1597 163.273C28.6105 162.78 28.9817 162.352 29.2733 161.989C29.565 161.621 29.7809 161.277 29.9211 160.955C30.065 160.629 30.137 160.288 30.137 159.932C30.137 159.523 30.0385 159.169 29.8415 158.869C29.6483 158.57 29.3832 158.339 29.0461 158.176C28.709 158.013 28.3302 157.932 27.9097 157.932C27.4627 157.932 27.0726 158.025 26.7393 158.21C26.4097 158.392 26.154 158.648 25.9722 158.977C25.7942 159.307 25.7052 159.693 25.7052 160.136H24.3643C24.3643 159.455 24.5215 158.856 24.8358 158.341C25.1502 157.826 25.5783 157.424 26.1199 157.136C26.6654 156.848 27.2771 156.705 27.9552 156.705C28.637 156.705 29.2412 156.848 29.7677 157.136C30.2942 157.424 30.7071 157.812 31.0063 158.301C31.3055 158.79 31.4552 159.333 31.4552 159.932C31.4552 160.36 31.3775 160.778 31.2222 161.188C31.0707 161.593 30.8055 162.045 30.4268 162.545C30.0518 163.042 29.5309 163.648 28.8643 164.364L26.2506 167.159V167.25H31.6597V168.5H24.3188Z"
              fill="black"
            />
            <rect x="26" y="47" width="3" height="97" fill="#97e09b" />
          </g>
        </svg>
      </div>
      <svg
        width="55"
        height="184"
        viewBox="0 0 55 184"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 overflow-hidden z-20"
      >
        <g>
          <circle cx="27.5" cy="27.5" r="20" fill="#BCBDBD" />
          <circle cx="27.5" cy="163.5" r="20" fill="#BCBDBD" />
          <path
            d="M29.7314 33.5H28.4658V25.4062C28.4658 25.099 28.4658 24.8359 28.4658 24.6172C28.471 24.3932 28.4762 24.1901 28.4814 24.0078C28.4919 23.8203 28.5049 23.6302 28.5205 23.4375C28.359 23.6042 28.208 23.7474 28.0674 23.8672C27.9268 23.9818 27.7523 24.125 27.5439 24.2969L26.2393 25.3438L25.5596 24.4609L28.6533 22.0781H29.7314V33.5Z"
            fill="black"
          />
          <path
            d="M24.3188 168.5V167.477L28.1597 163.273C28.6105 162.78 28.9817 162.352 29.2733 161.989C29.565 161.621 29.7809 161.277 29.9211 160.955C30.065 160.629 30.137 160.288 30.137 159.932C30.137 159.523 30.0385 159.169 29.8415 158.869C29.6483 158.57 29.3832 158.339 29.0461 158.176C28.709 158.013 28.3302 157.932 27.9097 157.932C27.4627 157.932 27.0726 158.025 26.7393 158.21C26.4097 158.392 26.154 158.648 25.9722 158.977C25.7942 159.307 25.7052 159.693 25.7052 160.136H24.3643C24.3643 159.455 24.5215 158.856 24.8358 158.341C25.1502 157.826 25.5783 157.424 26.1199 157.136C26.6654 156.848 27.2771 156.705 27.9552 156.705C28.637 156.705 29.2412 156.848 29.7677 157.136C30.2942 157.424 30.7071 157.812 31.0063 158.301C31.3055 158.79 31.4552 159.333 31.4552 159.932C31.4552 160.36 31.3775 160.778 31.2222 161.188C31.0707 161.593 30.8055 162.045 30.4268 162.545C30.0518 163.042 29.5309 163.648 28.8643 164.364L26.2506 167.159V167.25H31.6597V168.5H24.3188Z"
            fill="black"
          />
          <rect x="26" y="47" width="3" height="97" fill="#BCBDBD" />
        </g>
      </svg>
      <svg
       width="55"
       height="55"
       viewBox="0 0 55 55"
        className={cn("absolute -bottom-[7.5px] scale-50 z-0 transition-transform delay-500", {
          "scale-100": !isStepTwo
        })}
        fill="none"
      >
        <circle 
        cx="27.5" 
        cy="27.5" 
        r="26" 
        stroke="#97e09b" 
        stroke-width="3" 
        stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}
