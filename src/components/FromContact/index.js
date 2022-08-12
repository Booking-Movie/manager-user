/* eslint-disable prettier/prettier */
import { Button } from '../Button'
import InputComponent from '../Input'
import Label from '../Label'
import * as Icon from 'react-feather'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const ContactFrom = () => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs.sendForm('service_564hf6n', 'template_ukdfcds', form.current, 'xHrAKatZLgYJA7wke').then(
      result => {
        console.log(result.text)
        window.location.reload()
      },
      error => {
        console.log(error.text)
      }
    )
  }
  return (
    <>
      <div className="rounded-md shadow-shadowbox_2 p-6">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex sm:flex-col gap-4">
              <div className="flex flex-col gap-2 w-full">
                <Label size="text-normal">Name</Label>
                <InputComponent type="text" name="user_name" />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Label size="text-normal">Email</Label>
                <InputComponent type="text" name="user_email" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label size="text-normal">Phone Number</Label>
              <InputComponent type="text" name="user_phone" />
            </div>
            <div className="flex flex-col gap-2">
              <Label size="text-normal">Message</Label>
              <InputComponent type="textarea" name="message" />
            </div>
            <Button type="submit" value="Send" icon className="btn-primary self-start sm:self-stretch lg:self-start">
              <Icon.MessageCircle size={32} className="hover:text-white " />
              <span className="text-base font-semibold">Send Message</span>
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactFrom
