import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const test = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_pbao0zj",
          "template_ty95i6i",
          form.current,
          "3oCcHcxFjIAOoeJxd"
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();
            console.log("message sent")
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
    return (
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      );
}

export default test