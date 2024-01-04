import React from 'react'

export default class UserProfile extends React.Component{
    constructor(props){//whenever a class is instantiated constructor is called then render is called
        super(props)
        this.state={//this is an object which will hold all the state variables
            count:0,
            count2:1,
        }
    }

    componentDidMount(){
        console.log("child component did mount");
    }
    handleIncrement = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }))
    };
    handleIncrement2 = () => {
        this.setState((prevState) => ({
            count2: prevState.count2 + 1,
        }))
    };
    render(){
        const{name}=this.props;
        const{count,count2}=this.state;
        return(
            <div>
                <h1>Name:{name}</h1>
                <h2>Hello</h2>
                <h3>count:{count}</h3>
                <button onClick={this.handleIncrement}>Count Incrementer</button>
                <h3>count:{count2}</h3>
                <button onClick={this.handleIncrement2}>Count Incrementer</button>
            </div>
        )
    }
    
   
}


//order of lifecycle
//component loaded(mounted)->constructor called->render() called->child component inside render called->child comp didmount() called-> parent comp didmount() called

//didmount() is used to make api calls first the component is rendered then api call is make then 
//our component is filled with data received to make our app fast

//order of lifecycle with multiple child comp
/*
parent constructor
parent render
<-rendering phase(finding diff)-all the render will be batch together->
first child constructor
first child render

second child constructor
second child render

after this diff  will be created and som is manipulated

<-commit phase->
<DOM updated -In single batch->
dom manipulation is very expensiVE(TIME) 

first compdidMount
second compdidMount

parent compdidMount

this optimizesthe performance of our app
*/ 

/** 
----Mounting cycle------
constructor(dummy data)
render(dummy data)
     <HTML Dummy> is loaded
Component Did Mount
    <API call>
   <this.setState>  -> state variable is updated
whenever this setstate is called it triggers the reconciliation process and the update cycle is called


----UPdate cycle-----
   render(Api data)
   <HTML (new API data)> loaded with new api data
   component didupdate


   Before the component will unmount (page change) component  willUnmount is called

**/

