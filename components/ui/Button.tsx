type ButtonProps = {
  text: string;
};

export default function Button({
  text,
}: ButtonProps) {
  return (
    <button
      className="
        px-6
        py-3
        rounded-full
        border
        transition-all
        duration-300
        font-medium
      "
      style={{
        borderColor: "var(--gold)",
        color: "var(--gold)",
      }}
    >
      {text}
    </button>
  );
}