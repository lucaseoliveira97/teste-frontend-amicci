import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputHTMLAttributes } from "react";
import './style.scss'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
 icon?:IconProp
}
 
const Input =( {icon,...attr} : InputProps) =>{
    return (
        <div className='input-wrapper'>
            {icon && <FontAwesomeIcon icon={icon} />}
            <input id='city-input' type="text" name="city" {...attr}/>
        </div>
    );
}

export default Input