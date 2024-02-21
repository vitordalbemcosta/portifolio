import React, { useRef } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'
import Box from '../../components/Box'

const GetInTouch = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_1x7o7ti', 'template_bdmn4hi', form.current, {
        publicKey: 'NoJd2qYuePKY6rp-b',
      })
      .then(
        () => {
          console.log('Sucess, looking forward to chatting to you soon!')
        },
        (error) => {
          console.log('FAILED...', error.text)
        },
      )
  }

  return (
    <>
      <Box>
        <Heading>
          Say hello! It will be a pleasure to talk more about my professional
          path. I'll get back to your shortly
        </Heading>
        <Subheading>
          Also, I'm always down for a chat about food, travels and baseball!
        </Subheading>
      </Box>
      <Wrapper>
        <Form ref={form} onSubmit={sendEmail}>
          <Label>Name</Label>
          <Input type="text" name="user_name" />
          <Label>Email</Label>
          <Input type="email" name="user_email" />
          <Label>Message</Label>
          <Textarea name="message" />
          <input type="submit" value="Send" />
        </Form>
      </Wrapper>
    </>
  )
}

const Heading = styled.h1`
  margin-top: 2rem;
  color: white;
  text-shadow: 1px 1px 2px black;
  font-size: 2.5rem;
`
const Subheading = styled.h3`
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 1px 1px 2px black;
  font-size: 1rem;
`

const Wrapper = styled.div`
  min-height: 700px;
  display: flex;
  align-items: center;

  input[type='submit'] {
    margin-top: 2rem;
    width: 50%;
    height: 2rem;
    cursor: pointer;
    background: rgb(249, 105, 14);
    color: white;
    border: none;
    border-radius: 20px;
    font-weight: 600;
    font-size: 1rem;
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  font-size: 16px;
`
const Input = styled.input`
  width: 50%;
  height: 35px;
  padding: 7px;
  outline: none;
  border-radius: 5px;
  border: 1px solid rgb(220, 220, 220);

  &:focus {
    border: 2px solid rgba(0, 206, 158, 1);
  }
`
const Label = styled.label`
  margin-top: 2rem;
  font-size: 1.6rem;
  color: white;
  font-weight: 500;
  text-shadow: 1px 1px 2px pink;
`

const Textarea = styled.textarea`
  width: 50%;
  height: 16rem;
`

export default GetInTouch
