import { ReactNode } from "react";
import { parserGridArea } from "../../utils/parser";
import "./style.scss"
import { useMediaQuery } from "usehooks-ts";
import variables from '../../styles/variables.module.scss';

type GridLayoutProps = {
 children:ReactNode,
 gridAreasDesktop:string[],
 gridAreasTablet?:string[]
 gridAreasMobile?:string[]
}
 
const GridLayout =({ gridAreasDesktop,gridAreasTablet=gridAreasDesktop,gridAreasMobile=[], children  }: GridLayoutProps) =>{
    const mobileMatch = useMediaQuery(`(max-width:${variables.mobile})`)
    const tabletMatch = useMediaQuery(`(min-width:calc(${variables.mobile} + 1px)) and (max-width:${variables.tablet})`)
    
    const gridAreas = parserGridArea(mobileMatch ? gridAreasMobile : tabletMatch?gridAreasTablet:gridAreasDesktop)
    console.log("mobileMatch",mobileMatch,tabletMatch,gridAreas)
    return (
        <div style={{display:"grid", gridTemplateAreas: gridAreas}} className="cards--grid default-padding-x">
            {children}
        </div>
    );
}
export default GridLayout