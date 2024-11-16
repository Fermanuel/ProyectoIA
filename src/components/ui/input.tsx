// Un campo de entrada simple con clases de TailwindCSS
const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
      <input
        {...props}
        className={`px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
      />
    );
  };
  
  export { Input };
  