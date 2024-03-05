import Button from "../Button";
import Input from "../Input";

type HeaderProps = {
 
}
 
const Header =({  }: HeaderProps) =>{
    return (
        <header>
            <Input placeholder="Digite o nome da sua cidade"/>
            <Button></Button>
            <Button></Button>
        </header>
    );
}
export default Header