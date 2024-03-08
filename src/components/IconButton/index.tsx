import { ButtonHTMLAttributes, ReactNode } from "react";
import './style.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
 children?:ReactNode,
 theme?:"primary" | "secondary"
}
 
const IconButton =({ children,theme="primary", ...rest }: ButtonProps) =>{
    return (
            <button className={`btn--${theme} header--btn center--flex `} {...rest}>
                {children}
            </button>
    );
}

export default IconButton