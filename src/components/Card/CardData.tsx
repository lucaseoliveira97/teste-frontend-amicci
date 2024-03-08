import { ReactNode } from "react";

type CardDataProps = {
 children:ReactNode
}
 
const CardData =({  children}: CardDataProps) =>{
    return (
        <section className="cards-card__data">
            {children}
        </section>
    );
}
export default CardData