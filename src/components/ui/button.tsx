// Un botón simple que acepta clases personalizadas y maneja la propiedad 'type'
const Button = ({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
      <button
        {...props}
        className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export { Button };
  