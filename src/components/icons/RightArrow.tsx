type Props = {
  color?: string;
  width?: string;
  height?: string;
  className?: string;
};

export const RightArrow: React.FC<Props> = ({
  color,
  width,
  height,
  className
}: Props): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "16"}
      height={height || "16"}
      fill="currentColor"
      className={`bi bi-arrow-right ${className}`}
      viewBox="0 0 16 16"
      color={color || "#000"}
    >
      <path
        fill-rule="evenodd"
        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
      />
    </svg>
  );
};
