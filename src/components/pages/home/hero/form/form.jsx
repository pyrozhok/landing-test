'use client';

import clsx from 'clsx';
import React, { useState } from 'react';

import Button from 'components/shared/button';
import Icon from 'components/shared/icon';
import Input from 'components/shared/input';
import { emailRegexp } from 'utils/forms';

const Form = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formFailed, setFormFailed] = useState(false);

  async function fakeSuccessRequest() {
    setLoading(true);
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    setLoading(false);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email) {
      setErrorMessage('Please enter your email');
    } else if (!emailRegexp.test(email)) {
      setErrorMessage('Please enter a valid email');
    } else {
      setErrorMessage('');
      setLoading(true);

      try {
        await fakeSuccessRequest();
        setFormSuccess(true);
      } catch {
        setEmail('');
        setFormFailed(true);
      } finally {
        setLoading(false);
      }
    }
  };

  const resetSubmitButton = () => {
    setLoading(false);
    setFormSuccess(false);
    setFormFailed(false);
  };

  const handleInputChange = (event) => {
    setEmail(event.currentTarget.value.trim());
    resetSubmitButton();
  };

  return (
    <div className="flex flex-col">
      <div className="form-border max-w-[466px] overflow-hidden rounded-large p-px">
        <form
          className="form-bg flex items-center justify-between overflow-hidden rounded-large"
          noValidate
          onSubmit={handleSubmit}
        >
          <Input
            className="form-text tracking-tight-4 flex h-14 flex-1 bg-transparent py-[18px] pl-[23px] text-[15px] font-light leading-5"
            placeholder="Your business email..."
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            disabled={loading}
            onChange={handleInputChange}
          />
          <div className="flex min-w-[147px] justify-end overflow-hidden rounded-large py-1.5 pe-1">
            {loading ? (
              <Icon className="p-2" theme="primary-blue" content="loading" animation />
            ) : (
              <Button
                className={clsx(
                  !loading && !formSuccess && !formFailed ? 'block w-full' : 'hidden'
                )}
                theme="primary-blue-filled"
                size="sm"
                type="submit"
              >
                Free trial
              </Button>
            )}
            {formFailed && <Icon theme="primary-pink" content="cross" />}
            {formSuccess && <Icon theme="primary-green" content="check" />}
          </div>
        </form>
      </div>
      <p className="tracking-tight-4 pl-6 pt-3 font-medium leading-5 text-red">{errorMessage}</p>
    </div>
  );
};

export default Form;
