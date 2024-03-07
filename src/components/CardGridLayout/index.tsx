import { ReactNode } from "react";
import { parserGridArea } from "../../utils/parser";
import "./style.scss"
import { useMediaQuery } from "usehooks-ts";
import variables from '../../styles/variables.module.scss';

type GridLayoutProps = {
 children:ReactNode,
 gridAreas:string[]
}
 
const GridLayout =({ gridAreas, children  }: GridLayoutProps) =>{
    const mobileMatch = useMediaQuery(`(max-width:${variables.mobile})`)
    const tabletMatch = useMediaQuery(`(min-width:calc(${variables.mobile} + 1px)) and (max-width:${variables.tablet})`)
    console.log("mobileMatch",mobileMatch,tabletMatch)
    return (
        <div style={{display:"grid", gridTemplateAreas:parserGridArea(gridAreas) }} className="cards--grid">
            {children}
        </div>
    );
}
export default GridLayout