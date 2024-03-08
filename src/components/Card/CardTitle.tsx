import { ReactNode } from "react";

type CardTitleProps = {
 children:ReactNode
}
 
const CardTitle =({  children}: CardTitleProps) =>{
    return (
        <h1>
            {children}
        </h1>
    );
}
export default CardTitle