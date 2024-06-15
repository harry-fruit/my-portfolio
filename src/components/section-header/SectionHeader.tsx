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
  children,
  className,
}: SectionHeaderContainerProps): JSX.Element => {
  return (
    <div
      className={`text-center my-8 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-20 ${className}`}
    >
      {children}
    </div>
  );
};

export const SectionTitle: React.FC<SectionTextProps> = ({
  text,
  className,
}: SectionTextProps): JSX.Element => {
  return (
    <h2 className={`text-2xl font-semibold text-gray-800 ${className}`}>
      {text}
    </h2>
  );
};

export const SectionSubtitle: React.FC<SectionTextProps> = ({
  text,
  className,
}: SectionTextProps): JSX.Element => {
  return (
    <p
      className={`text-gray-600 m-[0 auto] max-w-[400px] text-base ${className}`}
    >
      {text}
    </p>
  );
};
