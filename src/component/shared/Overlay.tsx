export default function Overlay({
  display,
  setActive,
}: {
  display: string;
  setActive: (n: boolean) => void;
}) {
  return (
    <div
      onClick={() => setActive(false)}
      className={`${display} bg-overlay-bg fixed inset-0 z-50 h-screen`}
    />
  );
}
