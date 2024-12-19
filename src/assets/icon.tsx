import { ComponentProps } from "react";

type IconProps = ComponentProps<"svg">;

export const SemicolonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="38"
    height="29"
    viewBox="0 0 38 29"
    fill="none"
  >
    <path
      d="M0 0V14.25H9.5C9.5 19.4869 5.24162 23.75 0 23.75V28.5C7.85769 28.5 14.25 22.1077 14.25 14.25V0H0Z"
      fill="#0A2A60"
    />
    <path
      d="M23.75 0V14.25H33.25C33.25 19.4869 28.9916 23.75 23.75 23.75V28.5C31.6077 28.5 38 22.1077 38 14.25V0H23.75Z"
      fill="#0A2A60"
    />
  </svg>
);

export const CloudUploadIcon = ({ ...props }: IconProps) => (
  <svg
    width="89"
    height="88"
    viewBox="0 0 89 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_2484_19150)">
      <path
        d="M81.3273 47.6438C81.843 45.7188 82.1352 43.7079 82.1352 41.6282C82.1352 28.6 71.582 18.0641 58.5711 18.0641C55.2195 18.0641 52.0398 18.7688 49.1695 20.0235C46.282 13.3204 39.6133 8.62817 31.8617 8.62817C21.4461 8.62817 13.007 17.0672 13.007 27.4829C13.007 28.1875 13.1445 28.8407 13.2133 29.5282C5.66797 33.0172 0.425781 40.6141 0.425781 49.4829C0.425781 61.6344 10.2742 71.4829 22.4258 71.4829H75.8617C82.8055 71.4829 88.4258 65.8625 88.4258 58.9188C88.4258 53.9344 85.5211 49.6891 81.3273 47.6438ZM50.7164 43.1922V58.9016H38.1523V43.1922H28.7164L44.4258 27.4829L60.1352 43.1922H50.7164Z"
        fill="#6FB963"
      />
    </g>
    <defs>
      <clipPath id="clip0_2484_19150">
        <rect
          width="88"
          height="88"
          fill="white"
          transform="translate(0.425781)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const CalendarIcon = ({ ...props }: IconProps) => (
  <svg
    width="19"
    height="21"
    viewBox="0 0 19 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.9109 1.26862L13.9119 2.01824C16.6665 2.23413 18.4862 4.11119 18.4891 6.98975L18.5 15.4155C18.5039 18.554 16.5322 20.485 13.3718 20.49L5.65188 20.5C2.51119 20.504 0.514817 18.527 0.510867 15.3795L0.500007 7.05272C0.496057 4.15517 2.25153 2.28311 5.00617 2.03024L5.00518 1.28061C5.0042 0.840832 5.33001 0.509997 5.76444 0.509997C6.19886 0.508998 6.52468 0.838833 6.52567 1.27861L6.52666 1.97826L12.3914 1.97027L12.3904 1.27062C12.3894 0.830837 12.7152 0.501002 13.1497 0.500002C13.5742 0.499003 13.9099 0.828838 13.9109 1.26862ZM2.02148 7.36157L16.9696 7.34158V6.99175C16.9272 4.84283 15.849 3.71539 13.9138 3.54748L13.9148 4.31709C13.9148 4.74688 13.5801 5.0877 13.1556 5.0877C12.7212 5.0887 12.3943 4.74887 12.3943 4.31909L12.3934 3.5095L6.52863 3.51749L6.52962 4.32609C6.52962 4.75687 6.20479 5.0967 5.77036 5.0967C5.33594 5.0977 5.00913 4.75887 5.00913 4.32809L5.00815 3.55847C3.08286 3.75137 2.01753 4.88281 2.02049 7.05072L2.02148 7.36157ZM12.7399 11.9043V11.9153C12.7498 12.3751 13.125 12.7239 13.5801 12.7139C14.0244 12.7029 14.3789 12.3221 14.369 11.8623C14.3483 11.4225 13.9918 11.0637 13.5485 11.0647C13.0944 11.0747 12.7389 11.4445 12.7399 11.9043ZM13.5554 16.392C13.1013 16.382 12.735 16.0032 12.734 15.5435C12.7241 15.0837 13.0884 14.7029 13.5426 14.6919H13.5525C14.0165 14.6919 14.3927 15.0707 14.3927 15.5405C14.3937 16.0102 14.0185 16.391 13.5554 16.392ZM8.67212 11.9203C8.69187 12.3801 9.06804 12.7389 9.52221 12.7189C9.96651 12.6979 10.321 12.3181 10.3012 11.8583C10.2903 11.4085 9.92504 11.0587 9.48074 11.0597C9.02657 11.0797 8.67113 11.4605 8.67212 11.9203ZM9.52616 16.3471C9.07199 16.3671 8.6968 16.0082 8.67607 15.5485C8.67607 15.0887 9.03052 14.7089 9.48469 14.6879C9.92899 14.6869 10.2953 15.0367 10.3052 15.4855C10.3259 15.9463 9.97046 16.3261 9.52616 16.3471ZM4.60433 11.9553C4.62407 12.415 5.00025 12.7749 5.45442 12.7539C5.89872 12.7339 6.25317 12.3531 6.23243 11.8933C6.22256 11.4435 5.85725 11.0937 5.41196 11.0947C4.95779 11.1147 4.60334 11.4955 4.60433 11.9553ZM5.45837 16.3521C5.0042 16.3731 4.62901 16.0132 4.60828 15.5535C4.60729 15.0937 4.96273 14.7129 5.4169 14.6929C5.8612 14.6919 6.2275 15.0417 6.23737 15.4915C6.2581 15.9513 5.90365 16.3321 5.45837 16.3521Z"
      fill="#130F26"
    />
  </svg>
);

export const CircleIcon = ({ ...props }: IconProps) => (
  <svg
    width="321"
    height="320"
    viewBox="0 0 321 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx="160.5"
      cy="159.557"
      r="159.557"
      fill="#6FB963"
      fill-opacity="0.2"
    />
    <circle
      cx="160.5"
      cy="159.557"
      r="132.158"
      fill="#6FB963"
      fill-opacity="0.6"
    />
    <circle
      cx="159.694"
      cy="160.362"
      r="97.5071"
      fill="#6FB963"
      fill-opacity="0.8"
    />
    <circle cx="159.694" cy="160.362" r="62.05" fill="#6FB963" />
    <path
      d="M155.634 172.25L144.584 161.252C144.521 161.188 144.47 161.113 144.435 161.03C144.401 160.947 144.383 160.858 144.383 160.768C144.383 160.678 144.401 160.589 144.435 160.506C144.47 160.422 144.521 160.347 144.584 160.284L147.374 157.488C147.64 157.221 148.071 157.221 148.338 157.488L155.612 164.727C155.879 164.993 156.313 164.99 156.58 164.723L172.654 148.478C172.92 148.208 173.354 148.208 173.624 148.475L176.417 151.27C176.683 151.537 176.683 151.969 176.42 152.235L158.907 169.924L158.91 169.927L156.601 172.25C156.335 172.517 155.901 172.517 155.634 172.25Z"
      fill="white"
    />
  </svg>
);

export const ArrowLeftIcon = ({ ...props }: IconProps) => (
  <svg
    width="29"
    height="15"
    viewBox="0 0 29 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M28.2353 5.64706H5.40706L9.04941 1.99059L7.05882 0L0 7.05882L7.05882 14.1176L9.04941 12.1271L5.40706 8.47059H28.2353V5.64706Z"
      fill="black"
    />
  </svg>
);
