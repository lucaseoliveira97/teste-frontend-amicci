import { ReactNode } from "react";
import "./style.scss"
type CardProps = {
 children?: ReactNode,
 gridArea?:string
}
 
const CardRoot =({ children ,gridArea}: CardProps) =>{
    return (
        <article className={`cards--card`} style={{gridArea:gridArea}}>
            {children}
        </article>
    );
}
export default CardRoot