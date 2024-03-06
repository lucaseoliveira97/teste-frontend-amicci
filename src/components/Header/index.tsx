import './style.scss'
import IconButton from "../IconButton";
import Input from "../Input";
import { faMagnifyingGlass,faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type HeaderProps = {
 
}
 
const Header =({  }: HeaderProps) =>{
    return (
        <header id="header" className='center--flex'>
            <div id="header-wrapper" className='page--body'>
                <Input placeholder="Digite o nome da sua cidade"/>
                <div className="header-buttons center--flex"> 
                    <IconButton id='submit-city'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </IconButton>
                    <IconButton theme='secondary' id='submit-geo'>
                        <FontAwesomeIcon icon={faLocationDot} />
                    </IconButton>
                </div>
                
            </div>
        </header>
    );
}
export default Header