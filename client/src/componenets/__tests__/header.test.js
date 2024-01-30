import Header from"../Header"
import '@testing-library/jest-dom'
import { render,screen } from "@testing-library/react"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";


describe("header test cases",()=>{
    test("should load header component",()=>{
    render(   
    <BrowserRouter>
    <Provider store={appStore}>
            <Header/>
    </Provider>
    </BrowserRouter>
    );
    const loginbutton=screen.getByRole("button",{name:"Login"});
    expect(loginbutton).toBeInTheDocument();
    })

    test("should render my cart items as 0",()=>{
        render(   
            <BrowserRouter>
            <Provider store={appStore}>
                    <Header/>
            </Provider>
            </BrowserRouter>
            );
            const cartItem=screen.getByDisplayValue("0");
            expect(cartItem).toBeInTheDocument();
    })
})