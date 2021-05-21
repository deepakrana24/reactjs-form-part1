import React, { Component } from 'react' 

export class AccountSetup extends Component {
    continue= e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
            const{values,HandleChange}=this.props
        return (
            <div className='form-container'>
                <h1>
                    Account Setup
                </h1>
                <div className='form-groups'>
                    <label htmlFor='name'>
                       Enter the Name
                    </label>
                    <input type='text' className='form-control' name='name' onChange={HandleChange('name')} value={values.name}/>
                    
                </div>

                <div className='form-groups'>
                    <label htmlFor='email'>
                       Email
                    </label>
                    <input type='text' name='email' className='form-control'  onChange={HandleChange('email') } value={values.email}/>
                </div>

                <div className='form-groups'>
                    <label htmlFor='phone'>
                        Phone number
                    </label>
                    <input type='text'  name='phone' className='form-control'  onChange={HandleChange('phone') } value={values.phone}/>
                </div>

                <div className='form-groups'>
                    <label htmlFor=''password>
                        password
                    </label>
                    <input type='text'  name='password' className='form-control'  onChange={HandleChange('password') } value={values.password}/>
                </div>
                <br/>

                <div className='text-right'>
                   
                <button className='btn-primary' onClick={this.continue}>
                    continue
                </button>
                </div>
            </div>
        )
    }
}

export default AccountSetup
