import React, { Component } from 'react'
import AccountSetup from './accountsetup'
import SocialProfiles from './SocialProfiles';
import Confirm from './Confirm';
import Success from './Success';

export class Form extends Component {
    state={
        step:1,
        name:'',
        phone:'',
        email:'',
        password :'',
        facebook:'',
        twitter:'',
        github:'',
        
    }


    nextStep = ()=> {
        const{step}=this.state;
        this.setState({
            step:step + 1
        });
    }


    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }


    HandleChange = input => e =>{ this.setState(
        {
            [input]:e.target.value
        }
    );}

    render() { 
        const { step }=this.state;
        const {name,password,email,facebook,github,twitter,phone}=this.state;
        const values = {name,password,email,facebook,github,twitter,phone} ;
        
        switch (step) {
            case 1:
                return (
                    <AccountSetup
                    nextStep={this.nextStep}
                    HandleChange={this.HandleChange}
                    values={values}
                    />
                )
                
                case 2:
                    return (
                        <SocialProfiles
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            HandleChange={this.HandleChange}
                            values={values}
                        />
                    );
                case 3:
                    return (
                        <Confirm
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            values={values}
                        />
                    );
                case 4:
                    return (
                        <Success />
                    );    
        
            default:
                break;
        }
        
        
        
    }
}

export default Form