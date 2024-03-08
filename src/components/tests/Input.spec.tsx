import {fireEvent, render,screen} from '@testing-library/react'
import Input from '../Input'

const callBack = jest.fn();
describe("Input", () =>{
    it("Deve renderizar o componente corretamente", () =>{
        render(
            <Input placeholder="Digite o nome da sua cidade" onChange={callBack}/>
        )
        expect(screen.getByPlaceholderText("Digite o nome da sua cidade")).toBeVisible()
    })

    it("Deve chamar funcao de callback quando digitar no componente", () =>{
        render(
            <Input placeholder="Digite o nome da sua cidade" onChange={(e) => callBack(e.target.value)}/>
        )
        const input = screen.getByPlaceholderText("Digite o nome da sua cidade")
        fireEvent.change(input, {target: {value: 'Sao Paulo'}})
        expect(callBack).toBeCalledWith("Sao Paulo")
    })

    it("Nao deve chamar funcao de callback quando digitar no componente com outro valor de parametro", () =>{
        render(
            <Input placeholder="Digite o nome da sua cidade" onChange={(e) => callBack(e.target.value)}/>
        )
        const input = screen.getByPlaceholderText("Digite o nome da sua cidade")
        fireEvent.change(input, {target: {value: 'Sao Paulo'}})
        expect(callBack).not.toBeCalledWith("Rio De Janeiro")
    })
})