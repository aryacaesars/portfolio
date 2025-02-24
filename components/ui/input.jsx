export function Input({ label, id, ...props }) {
  return (
    <input
      id={id}
      {...props}
      className="w-full py-3 px-4 border border-gray-300 rounded-md text-sm transition-all duration-200 outline-none bg-white focus:border-black focus:ring-2 focus:ring-black placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100"
    />
  );
}

