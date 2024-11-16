// components/ui/scroll-area.tsx
const ScrollArea = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
      <div className={`overflow-y-auto max-h-[500px] ${className}`}>
        {children}
      </div>
    );
  };
  
  export { ScrollArea };
  