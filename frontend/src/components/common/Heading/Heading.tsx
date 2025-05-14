const Heading = ({
  title,
  children,
}: {
  title?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <h2 className="mb-3" style={{ fontSize: "26px" }}>
      {title }  {children}
    </h2>
  );
};

export default Heading;
