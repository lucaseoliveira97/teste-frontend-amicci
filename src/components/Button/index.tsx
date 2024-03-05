import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
 children?:ReactNode
}
 
const Button =({ children }: ButtonProps) =>{
    return (
        <button>
            {children}
        </button>
    );
}

export default Button