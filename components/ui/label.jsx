export function Label({ children, htmlFor, ...props }) {
  return (
    <label
      htmlFor={htmlFor}
      {...props}
      className="block text-sm font-medium text-gray-800 mb-2"
    >
      {children}
    </label>
  );
}

