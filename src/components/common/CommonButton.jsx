"use client";
import React from "react";
import { Button } from "../ui/moving-border";

const CommonButton = ({
    children, // Button text or content
    borderRadius = "1.75rem", // Default border-radius
    className = "", // Additional custom classes
    onClick, // Event handler for button click
    ...props // Spread other props like id, name, etc.
}) => {
    return (
        <Button
            borderRadius={borderRadius}
            className={`bg-slate-900 text-white border-slate-800 ${className}`}
            onClick={onClick}
            {...props}
        >
            {children || "Borders are cool"} {/* Fallback text */}
        </Button>
    );
};

export default CommonButton;
