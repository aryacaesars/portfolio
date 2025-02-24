export function Button({ children, type = "button", ...props }) {
  return (
    <button
      type={type}
      {...props}
      className="bg-black text-white border-none py-3 px-6 text-sm rounded-md cursor-pointer transition-opacity duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
    >
      {children}
    </button>
  );
}
