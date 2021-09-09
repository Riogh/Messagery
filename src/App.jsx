import react, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
    constructor(){
        super()
        this.state = {
            sender:'',
            fullName:'',
            email:'',
            phone:'0',
        }
    }

    changeSender(event){
        this.setState({
            sender:event.target.value
        })
    }
    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePhone(event){
        this.setState({
            phone:event.target.value
        })
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form>
                            <input type = 'text' 
                            placeholder = 'sender'
                            onChange={this.changeSender}
                            value={this.state.sender}
                            className='form-control form-group'
                            />

                            <input type = 'text' 
                            placeholder = 'fullName'
                            onChange={this.changeFullName}
                            value={this.state.fullName}
                            className='form-control form-group'
                            />

                            <input type = 'text' 
                            placeholder = 'email'
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='form-control form-group'
                            />

                            <input type = 'text' 
                            placeholder = 'phone'
                            onChange={this.changePhone}
                            value={this.state.phone}
                            className='form-control form-group'
                            />

                            <input type='submit' className='btn btn-danger btn-block' value='Submit'/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;