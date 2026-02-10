// import React,{Component} from "react";
// import Man from "./Man"; 
// import PersonStyle from "./person.module.css";

class person extends Component {
    constructor (props){
     super(props);
     this.props=props;
     this.state={
        name : "nikhil",
        age : 20,

     }
    } 
    // nameChangeHandler(){
    //     this.setState({name:"ayush",age:22},()=>{
    //    console.log(this.state);
    //     });
    // }
    render(){
        const style = {
            fontSize:"40px",
            color : "red",

        }
    return(
        <div className={PersonStyle.personBox}>
       
            <h1>
                <lable className={PersonStyle.label}>name</lable> : <i>{this.props.name}</i>
                <br/>
                <label style={style}>age</label> : <i>{this.props.age}</i>
                {/* <button onClick={() => this.nameChangeHandler()}>click me</button> */}

                </h1>

    
        </div>  
    );
}
}
    


// export default  person;

// class person extends Component{
//     constructor(props){
//         super (props)
//         this.props=props;
//     }

//     render(){
//         return
//         <div>
//             <h2></h2>
//         </div>
//     }
// }

