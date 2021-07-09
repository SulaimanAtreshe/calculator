import React, {Component} from "react";
import './App.css';
import Result from './logicFile/ScreenCompo'
import Keyboard from "./logicFile/ButtonsCompo";


class App extends Component {
    
    constructor(){
        super();


        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.equal()
        }
        
        else if(button === "C"){
            this.clear()
        }

        else if(button === "DL"){
            this.delete()
        }

        else {
            this.setState({result: this.state.result + button})
        }
    };

    equal = () => {

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || "") + ""})

        } catch (e) {
            this.setState({result: "ERROR! :("})
        }

    };

    clear = () => {
        this.setState({result: ""})
    };

    delete = () => {
        this.setState({result: this.state.result.slice(0, -1)})
    };


    render() {
        return(
            <div>
                <div className="body"> 
                <Result result={this.state.result} />
                <Keyboard onClick={this.onClick} />
                </div>
            </div>
        );
    }
}

export default App;