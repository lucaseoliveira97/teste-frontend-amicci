import { ReactNode } from "react";
import "./style.scss"
type CardProps = {
 children?: ReactNode,
 type?:"s" | "m" | "l"
 gridArea?:string
}
 
const CardRoot =({ children, type="m" ,gridArea}: CardProps) =>{
    return (
        <article className={`cards--card card--type_${type}`} style={{gridArea:gridArea}}>
            {children}
        </article>
    );
}
export default CardRoot