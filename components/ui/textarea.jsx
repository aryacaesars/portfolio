export function Textarea({ label, id, ...props }) {
  return (
    <textarea
      id={id}
      {...props}
      className="w-full py-3 px-4 border border-gray-300 rounded-2xl text-sm transition-all duration-200 hover:border-gray-700 outline-none bg-white min-h-[100px] resize-vertical focus:border-black focus:ring-2 focus:ring-black placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100"
    />
  );
}

