import React from "react";

export default function Button({
    value,
    type = "button",
    bgColor = "bg-orange-500",
    textColor = "text-white",
    className = "",
    onChange,
    ...props
}) {
    return (
        <button onChange={onChange} className={`p-1 px-2  rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {value}
        </button>
    );
}