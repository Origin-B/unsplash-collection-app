import type { ReactNode } from "react";

export default function InputContainer({
  children,
  input,
  atrValues,
  setInput,
}: {
  children: ReactNode;
  input: string;
  atrValues: { placeholder: string; name: string };
  setInput: (n: string) => void;
}) {
  return (
    <form className="group input-container">
      <input
        type="text"
        className="input"
        name={atrValues.placeholder}
        placeholder={atrValues.placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {children}
    </form>
  );
}
