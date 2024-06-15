type Props = {
  /**
   * Extra class to add to the component.
   */
  className?: string;
};

/**
 * Line Split Component
 *
 * This component is used to create a line split in the page.
 *
 * @example
 * <LineSplit className={"md:left-0"}/>
 */

export const LineSplit: React.FC<Props> = ({
  className,
}: Props): JSX.Element => {
  return (
    <div
      className={`w-3/4 h-[.15rem] rounded-full md:w-2/4 bg-primary-500 ${
        className || ""
      }`}
    />
  );
};
