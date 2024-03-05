import Input from "../Input";

type HeaderProps = {
 
}
 
const Header =({  }: HeaderProps) =>{
    return (
        <header>
            <Input placeholder="Digite o nome da sua cidade"/>
        </header>
    );
}
export default Header