  import { sum } from "../sum"

  test("",()=>{
    const res=sum(2,3)

    //assertion
     expect(res).toBe(5);
  })