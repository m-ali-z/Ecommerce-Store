const MaxWidthWrapper = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className="p-10 w-full h-full">{children}</div>;
};

export default MaxWidthWrapper;
