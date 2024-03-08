import {fireEvent, render,screen} from '@testing-library/react'
import IconButton from '../IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const callBack = jest.fn();
describe("Button", () =>{
    it("Deve renderizar o componente corretamente", () =>{
        render(
            <IconButton id='submit-city' onClick={()=> callBack("Sao Paulo")}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </IconButton>
        )
        expect(screen.getByRole("button")).toBeVisible()
    })

    it("Deve chamar funcao de callback quando apertar o botao", () =>{
        render(
            <IconButton id='submit-city' onClick={()=> callBack("Sao Paulo")}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
             </IconButton>
        )
        const button = screen.getByRole("button")
        fireEvent.click(button)
        expect(callBack).toBeCalledWith("Sao Paulo")
    })

    it("Nao deve chamar funcao de callback quando apertar o botao e vir com outro valor de parametro", () =>{
        render(
            <IconButton id='submit-city' onClick={()=> callBack("Sao Paulo")}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </IconButton>
        )
        const button = screen.getByRole("button")
        fireEvent.click(button)
        expect(callBack).not.toBeCalledWith("Rio De Janeiro")
    })
})