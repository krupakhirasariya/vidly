import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from '../common/input';

class Form extends Component {
    state = {
        data: {},
        errors: {}
    }

    validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(this.state.data, this.schema, options);
        if (!error) return null;

        const errors = {};
        for (let item of error.details)
            errors[item.path[0]] = item.message;
        return errors;
    };

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;
        this.doSubmit();
    };

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data, errors });
    };

    renderButtonLabel(label) {
        return <button disabled={this.validate()} className="btn btn-primary">{label}</button>
    }

    renderInput(name, label, type = 'text') {
        const { data, errors } = this.state;
        console.log('dsf' + data);
        return (
            <Input value={data[name]} name={name} type={type}
                onChange={this.handleChange} label={label}
                error={errors[name]}></Input>
        );
    }
}

export default Form;