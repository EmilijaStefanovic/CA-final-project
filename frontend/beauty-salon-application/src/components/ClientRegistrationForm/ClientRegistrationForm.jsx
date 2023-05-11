import React from 'react';
import Input from './atoms/Input/Input';
import Button from './atoms/Button/Button';
import style from './ClientRegistrationForm.module.css';

export default function ClientRegistrationForm() {
  return (
    <div className={style.formWrapper}>
      <form className={style.form}>
        <Input type={'text'} id={'name'} label={'Full Name'} />
        <Input type={'email'} id={'email'} label={'Email'} />
        <Input type={'date'} id={'date'} label={'Visit Date'} />
        <Input type={'time'} id={'time'} label={'Visit Time'} />

        <Button text={'Add'} type={'submit'} />
      </form>
    </div>
  );
}
