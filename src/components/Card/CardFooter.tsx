import { ReactNode } from "react";

type CardTitleProps = {
 children:ReactNode
}
 
const CardFooter =({  children}: CardTitleProps) =>{
    return (
        <footer className="cards-card__fotter">
            {children}
        </footer>
    );
}
export default CardFooter