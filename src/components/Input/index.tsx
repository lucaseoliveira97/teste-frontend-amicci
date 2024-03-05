import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
 
}
 
const Input =( attr : InputProps) =>{
    return (
        <>
            <input type="text" name="city" {...attr}/>
        </>
    );
}

export default Input