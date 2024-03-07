import { ReactNode } from "react";
import { parserGridArea } from "../../utils/parser";

type GridLayoutProps = {
 children:ReactNode,
 gridAreas:string[]
}
 
const GridLayout =({ gridAreas, children  }: GridLayoutProps) =>{
    return (
        <div style={{display:"grid", gridTemplateAreas:parserGridArea(gridAreas) , width:"100%"}}>
            {children}
        </div>
    );
}
export default GridLayout