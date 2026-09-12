export default function Heading({
  heading,
  className,
}: {
  className: string;
  heading: string;
}) {
  return (
    <h1
      className={`text-center text-4xl font-semibold capitalize ${className}`}
    >
      {heading}
    </h1>
  );
}
