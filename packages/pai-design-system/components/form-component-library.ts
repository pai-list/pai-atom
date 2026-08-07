// Hallmark + StyleSeed + Impeccable + Scrollytelling: Form Components Implementation

import React, { FormHTMLAttributes, ReactNode } from 'react';

interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  required = false,
  placeholder,
  className = ''
}) => {
  return (
    <div className="form-group" data-hallmark="honest">
      <label className="form-label" data-hallmark="honest">
        {label}
        {required && <span className="required-indicator">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`form-control ${className}`}
        data-hallmark="honest"
      />
    </div>
  );
};

interface FormValidationProps {
  isValid: boolean;
  message: string;
  className?: string;
}

export const FormValidation: React.FC<FormValidationProps> = ({
  isValid,
  message,
  className = ''
}) => {
  if (!isValid) {
    return (
      <div className={`form-error ${className}`} data-hallmark="honest">
        {message}
      </div>
    );
  }
  return null;
};

interface FormLayoutProps {
  children: ReactNode;
  onSubmit: (e: React.FormEvent) => void;
  className?: string;
}

export const FormLayout: React.FC<FormLayoutProps> = ({
  children,
  onSubmit,
  className = ''
}) => {
  return (
    <form
      className={`form ${className}`}
      onSubmit={onSubmit}
      data-hallmark="honest"
    >
      {children}
    </form>
  );
};

// Hallmark + StyleSeed + Impeccable + Scrollytelling: Domain-Specific Form Components

export const AuthForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({ email: '', password: '' });
  const [isValid, setIsValid] = React.useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsValid(e.target.value.length > 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormLayout onSubmit={handleSubmit} className="auth-form" data-hallmark="honest">
      <FormField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        data-hallmark="honest"
      />
      <FormField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
        data-hallmark="honest"
      />
      <FormValidation
        isValid={isValid}
        message="Please fill in all required fields"
        data-hallmark="honest"
      />
      <button
        type="submit"
        className="btn btn-primary"
        disabled={!isValid}
        data-hallmark="honest"
      >
        Submit
      </button>
    </FormLayout>
  );
};

export const MCPForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({ query: '', context: '' });
  const [isValid, setIsValid] = React.useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsValid(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsValid(true);
    onSubmit(formData);
  };

  return (
    <FormLayout onSubmit={handleSubmit} className="mcp-form" data-hallmark="honest">
      <FormField
        label="Query"
        type="text"
        name="query"
        value={formData.query}
        onChange={handleChange}
        required
        placeholder="Enter your query..."
        data-hallmark="honest"
      />
      <div className="form-group" data-hallmark="honest">
        <label className="form-label" data-hallmark="honest">Context</label>
        <textarea
          name="context"
          value={formData.context}
          onChange={handleChange}
          className="form-control"
          rows={4}
          data-hallmark="honest"
        />
      </div>
      <button
        type="submit"
        className="btn btn-secondary"
        data-hallmark="honest"
      >
        Execute
      </button>
    </FormLayout>
  );
};

export default {
  FormField,
  FormValidation,
  FormLayout,
  AuthForm,
  MCPForm
};