import React from "react";
import { FormTextarea, FormInput } from "shards-react";

export default class BasicFormTextarea extends React.Component {
  constructor() {
    super();
    this.state = {
     email: "",
     fullname: "",
     textArea
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <p className="mb-2">
          {(value && `🗣 ${value}`) || "Your message will appear here as you write"}
        </p>
        <FormTextarea 
        id="#name" 
        type="text"
        name="fullname"
        placeholder="Full name"
        onChange={this.updateInput}
        value={this.state.fullname}
        />
        
      </div>
    );
  }
}
