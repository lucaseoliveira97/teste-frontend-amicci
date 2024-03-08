import './style.scss'
import IconButton from "../IconButton";
import Input from "../Input";
import { faMagnifyingGlass,faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

type HeaderProps = {
    updateCityName: (city:string)=>void
    updateLatLog:()=>void
}
 
const Header =({ updateCityName,updateLatLog }: HeaderProps) =>{
    const [city, setCity] = useState("")
    return (
        <header id="header" className='center--flex'>
            <div id="header-wrapper" className='page--body'>
                <Input placeholder="Digite o nome da sua cidade" onChange={(e)=>setCity(e.target.value)}/>
                <div className="header-buttons center--flex"> 
                    <IconButton id='submit-city' onClick={()=> updateCityName(city)}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </IconButton>
                    <IconButton theme='secondary' id='submit-geo' onClick={()=>updateLatLog()}>
                        <FontAwesomeIcon icon={faLocationDot} />
                    </IconButton>
                </div>
                
            </div>
        </header>
    );
}
export default Header