type DefaultProps = {
  className?: string;
};

type SectionHeaderContainerProps = {
  children?: React.ReactNode;
} & DefaultProps;

type SectionTextProps = {
  text: string;
} & DefaultProps;

export const SectionHeaderContainer: React.FC<SectionHeaderContainerProps> = ({
  children = "",
  className,
}: SectionHeaderContainerProps): JSX.Element => {
  return (
    <div
      className={`text-center my-8 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-20 ${className} flex flex-col justify-center items-center`}
    >
      {children}
    </div>
  );
};

export const SectionTitle: React.FC<SectionTextProps> = ({
  text,
  className = "",
}: SectionTextProps): JSX.Element => {
  return (
    <h1 className={`text-4xl text-gray-800 dark:text-gray-50 font-bold mb-1 ${className}`}>
      {text}
    </h1>
  );
};

export const SectionSubtitle: React.FC<SectionTextProps> = ({
  text,
  className = "",
}: SectionTextProps): JSX.Element => {
  return (
    <p
      className={`text-gray-600 dark:text-gray-300 font-semibold m-[0 auto] max-w-[400px] text-base ${className}`}
    >
      {text}
    </p>
  );
};
