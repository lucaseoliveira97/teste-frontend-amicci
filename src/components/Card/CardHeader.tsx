import { ReactNode } from "react";

type CardHeaderProps = {
 children:ReactNode
}
 
const CardHeader =({  children}: CardHeaderProps) =>{
    return (
        <header className="cards-card__header">
            {children}
        </header>
    );
}
export default CardHeader