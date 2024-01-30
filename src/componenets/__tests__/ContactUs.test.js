
import '@testing-library/jest-dom'
import { render,screen } from "@testing-library/react"
import ContactUs from "../ContactUs"



    test("should load header component",()=>{
        render(<ContactUs/>);//render the component on jsdom

        const heading=  screen.getByRole("heading")

        //assertion
        
        expect(heading).toBeInTheDocument();

    })
