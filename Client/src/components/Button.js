export function Button({className, children, bgColor, color, padding, borderRadius, hoverColor, ...props}){
    return (
        <button
        className={className}
          {...props}
        >
          {children}
        </button>
      );
};