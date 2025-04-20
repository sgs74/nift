
export function Button({ children, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white px-4 py-2 rounded-xl hover:opacity-90"
    >
      {children}
    </button>
  );
}
