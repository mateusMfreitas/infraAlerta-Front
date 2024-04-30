import React from "react";

const sizes = {
  xs: "text-[11px] font-medium",
  lg: "text-xl font-normal",
  s: "text-xs font-medium",
  xl: "text-2xl font-medium md:text-[22px]",
  md: "text-[13px] font-medium",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-900 font-plusjakartasans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
