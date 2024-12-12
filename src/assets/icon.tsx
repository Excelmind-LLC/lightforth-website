
import { ComponentProps } from "react";

type IconProps = ComponentProps<"svg">;

export const CircleIcon = ({ ...props }: IconProps) => (
   <svg width="321" height="320" viewBox="0 0 321 320" fill="none" xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <circle cx="160.5" cy="159.557" r="159.557" fill="#6FB963" fill-opacity="0.2" />
      <circle cx="160.5" cy="159.557" r="132.158" fill="#6FB963" fill-opacity="0.6" />
      <circle cx="159.694" cy="160.362" r="97.5071" fill="#6FB963" fill-opacity="0.8" />
      <circle cx="159.694" cy="160.362" r="62.05" fill="#6FB963" />
      <path d="M155.634 172.25L144.584 161.252C144.521 161.188 144.47 161.113 144.435 161.03C144.401 160.947 144.383 160.858 144.383 160.768C144.383 160.678 144.401 160.589 144.435 160.506C144.47 160.422 144.521 160.347 144.584 160.284L147.374 157.488C147.64 157.221 148.071 157.221 148.338 157.488L155.612 164.727C155.879 164.993 156.313 164.99 156.58 164.723L172.654 148.478C172.92 148.208 173.354 148.208 173.624 148.475L176.417 151.27C176.683 151.537 176.683 151.969 176.42 152.235L158.907 169.924L158.91 169.927L156.601 172.25C156.335 172.517 155.901 172.517 155.634 172.25Z" fill="white" />
   </svg>

);

export const ArrowLeftIcon = ({ ...props }: IconProps) => (
   <svg width="29" height="15" viewBox="0 0 29 15" fill="none" xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path d="M28.2353 5.64706H5.40706L9.04941 1.99059L7.05882 0L0 7.05882L7.05882 14.1176L9.04941 12.1271L5.40706 8.47059H28.2353V5.64706Z" fill="black" />
   </svg>

);