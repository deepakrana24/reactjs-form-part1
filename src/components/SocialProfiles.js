import React, { Component } from 'react'

export class SocialProfiles extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, HandleChange } = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-5">Social Profiles</h1>
                <div className="form-group">
                    <label htmlFor="facebook">Facebook URL</label>
                    <input type="text" className="form-control" name="facebook" onChange={HandleChange('facebook')} value={values.facebook} />
                </div>
                <div className="form-group">
                    <label htmlFor="twitter">Twitter URL</label>
                    <input type="text" className="form-control" name="twitter" onChange={HandleChange('twitter')} value={values.twitter} />
                </div>
                <div className="form-group">
                    <label htmlFor="github">Github URL</label>
                    <input type="text" className="form-control" name="github" onChange={HandleChange('github')} value={values.github} />
                </div>

                <br />

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SocialProfiles
