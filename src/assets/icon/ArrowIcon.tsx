export const ArrowIcon = ({
  fill = "#1A2833",
  className,
  classNamePath,
}: {
  fill?: string;
  className?: string;
  classNamePath?: string;
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        className={classNamePath}
        d="M10.9004 17.2C10.3004 17.2 9.90039 16.8 9.90039 16.2C9.90039 15.9 10.0004 15.7 10.2004 15.5L13.7004 12L10.2004 8.50005C9.80039 8.10005 9.80039 7.50005 10.2004 7.10005C10.6004 6.70005 11.2004 6.70005 11.6004 7.10005L15.8004 11.3C16.2004 11.7 16.2004 12.3 15.8004 12.7L11.6004 16.9C11.4004 17.1 11.1004 17.2 10.9004 17.2Z"
        fill={fill}
      />
    </svg>
  );
};
