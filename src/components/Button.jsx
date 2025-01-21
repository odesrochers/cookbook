export default function Button({ children, ...props }) {
  return (
    <button
      className="bg-blue-800 text-stone-200 px-4 py-2 text-xs md:text-base rounded-md hover:bg-blue-600 hover:text-stone-50"
      {...props}
    >
      {children}
    </button>
  );
}
