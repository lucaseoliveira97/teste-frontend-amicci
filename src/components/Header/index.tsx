import './style.scss'
import Button from "../Button";
import Input from "../Input";

type HeaderProps = {
 
}
 
const Header =({  }: HeaderProps) =>{
    return (
        <header id="header" className='center--flex'>
            <div id="header-wrapper" className='page--body'>
                <Input id='city-input' placeholder="Digite o nome da sua cidade"/>
                <div className="header-buttons">
                    <Button id='submit-city'></Button>
                    <Button id='submit-geo'></Button>
                </div>
                
            </div>
        </header>
    );
}
export default Header