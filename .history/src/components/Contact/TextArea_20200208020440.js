import React from "react";
import { FormTextarea } from "shards-react";

export default class BasicFormTextarea extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: null };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <p className="mb-2">
          {(value && `🗣 ${value}`) || "Your message will appear here as you write"}
        </p>
        <FormTextarea 
        onChange={this.handleChange}
        value={this.state.message} 
        />
        
      </div>
    );
  }
}
