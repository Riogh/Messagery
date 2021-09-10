import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state = {
            sender:'',
            fullName:'',
            email:'',
            phone:'',
            mess:'',
        }
        this.changeSender = this.changeSender.bind(this);
        this.changeFullName = this.changeFullName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.changeMess = this.changeMess.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeSender(event){
        console.log(`Sender value changed to ${event}`)
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
    changeMess(event){
        this.setState({
            mess:event.target.value
        })
    }


    onSubmit(event){
        console.log("OnSubmit Called")
        event.preventDefault()
        const messagesent = {
            sender: this.state.sender,
            fullName: this.state.fullName,
            email: this.state.email,
            phone: this.state.phone,
            mess: this.state.mess,
        }
        axios.post('http://localhost:4000/app/sendmessage', messagesent)
        .then(response => console.log(response.data))

        this.setState({
            sender:'',
            fullName:'',
            email:'',
            phone:'',
            mess:''
        })
    }
    
    render() {
        return (
            <div style={{backgroundImage: `url(${"https://images.pexels.com/photos/3875821/pexels-photo-3875821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"})`,flex:1}}>
            <nav className="navbar sticky-top navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img src="https://logo-marque.com/wp-content/uploads/2020/11/Zillow-Logo.png" alt="Zillow Logo" alt="" width="150vw" height="75vh" className="d-inline-block align-text-top" />
                    </a>
                </div>
            </nav>
            <div style={{display:'flex', alignItems: 'center', paddingTop:'7vh'}}>
                <div style={{flex : 2, marginLeft:'5vw'}}>
                    <h1 style={{color:'white'}}>
                        Connect live with buyers
                    </h1>
                    <p style={{color:'white'}}>
                        Local home buyers reach out to us. We’ll reach out to you. For the always-looking-to-grow agent, Zillow Premier Agent Advertising is a delightfully simple way to build your business.
                        <ul>
                            <li>Target buyers in your local market</li>
                            <li>Connect live with buyers sent directly to your phone</li>
                            <li>Promote your skills on the largest online real estate network in the United States</li>
                        </ul>
                    </p>
                </div>
                <div className='container' style={{flex: 3, marginRight:'5vw', marginBottom:'10vh'}}>
                    <div className='form-div'>
                        <h1 style={{color:'white'}}>Contact Us</h1>
                        <form onSubmit={this.onSubmit} className='mb-3'>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label" style={{color:'white'}}>Your Role: </label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="What are you?" className='form-control form-group' onChange={this.changeSender} value={this.state.sender}/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label" style={{color:'white'}}>Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Full Name" className='form-control form-group' onChange={this.changeFullName} value={this.state.fullName}/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label" style={{color:'white'}}>Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={this.changeEmail} value={this.state.email}/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label" style={{color:'white'}}>Phone</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="phone" onChange={this.changePhone} value={this.state.phone}/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label" style={{color:'white'}}>Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" onChange={this.changeMess} value={this.state.mess}></textarea>
                            </div>
                            <input type='submit' className='btn btn-danger btn-block' value='Submit' />
                        </form>
                        <h4 style={{color:'white'}}>
                            or call 855-885-0115
                        </h4>
                        <p style={{color:'white'}}> 
                        We respect your privacy. See our privacy policy.
                        By pressing Get started, you agree that Zillow Group may contact you via phone/text about your inquiry, which may involve the use of automated means. You are not required to consent as a condition of purchasing any goods or services. Message/data rates may apply.
                        </p>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default App;
