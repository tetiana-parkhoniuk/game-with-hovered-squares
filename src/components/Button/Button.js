export default function Button({ text, onClick, isDisabled }) {
  return (
    <button onClick={onClick} disabled={isDisabled}>
      {text}
    </button>
  );
}
