export default function BGDev({ bg }: { bg: string }) {
  return (
    <div
      className={`hidden lg:block ${bg} bg-contain bg-center bg-no-repeat`}
    />
  );
}
