import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'
import Box from '../../components/Box'
import breakpoints from '../../breakpoints'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'

const GetInTouch = () => {
  const [validEmail, setValidEmail] = useState(true)
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.GATSBY_SERVICE_API,
        process.env.GATSBY_TEMPLATE_API,
        form.current,
        {
          publicKey: process.env.GATSBY_EMAILJS_API,
        },
      )
      .then(
        () => {
          console.log('Success, looking forward to chatting to you soon!')
          form.current.reset()
        },
        (error) => {
          console.log('FAILED...', error.text)
        },
      )
  }

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleEmailChange = (e) => {
    setValidEmail(validateEmail(e.target.value))
  }

  return (
    <>
      <Box>
        <Heading>
          <Typist
            cursor={{ show: false }}
            avgTypingDelay={60}
            stdTypingDelay={20}
          >
            Say hello!{' '}
          </Typist>
          It will be a pleasure to talk more about my professional path.{' '}
          <Typist
            cursor={{ show: false }}
            avgTypingDelay={60}
            stdTypingDelay={20}
          >
            {' '}
            I'll get back to you shortly.
          </Typist>
        </Heading>
        <Subheading>
          Also, I'm always down for a chat about food, travels, and baseball!
        </Subheading>
      </Box>
      <Wrapper>
        <Form ref={form} onSubmit={sendEmail}>
          <Label>Name</Label>
          <Input type="text" name="user_name" required />
          <Label>Email</Label>
          <Input
            type="email"
            name="user_email"
            onChange={handleEmailChange}
            required
          />
          {!validEmail && (
            <ErrorMessage>Please enter a valid email address.</ErrorMessage>
          )}
          <Label>Message</Label>
          <Textarea name="message" required />
          <input type="submit" value="Send" />
        </Form>
      </Wrapper>
    </>
  )
}

const Heading = styled.h1`
  margin-top: 10rem;
  color: black;
  font-size: 3.1rem;
  padding: 20px;

  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 2.5rem;
    margin-top: 1rem;
  }
`

const Subheading = styled.h3`
  margin-top: 2rem;
  color: black;
  font-size: 1.4rem;
  padding: 20px;

  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 1.6rem;
    margin-top: 1rem;
  }
`

const Wrapper = styled.div`
  min-height: 60vh;
  display: flex;
  align-items: center;

  @media screen and (max-width: ${breakpoints.tablet}) {
    min-height: 40vh;
    display: flex;
    align-items: flex-start;
  }

  input[type='submit'] {
    margin-top: 1rem;
    width: 50%;
    height: 2rem;
    cursor: pointer;
    background: rgb(249, 105, 14);
    color: black;
    border: none;
    border-radius: 20px;
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 30px;
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

  @media screen and (max-width: ${breakpoints.laptop}) {
    width: 80%;
  }

  @media screen and (max-width: ${breakpoints.desktop}) {
    width: 90%;
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    width: 85%;
  }
`

const Label = styled.label`
  margin-top: 2rem;
  font-size: 1.6rem;
  color: black;
  font-weight: 500;
`

const Textarea = styled.textarea`
  width: 50%;
  height: 16rem;
  margin-bottom: 20px;

  @media screen and (max-width: ${breakpoints.laptop}) {
    width: 80%;
  }

  @media screen and (max-width: ${breakpoints.desktop}) {
    width: 90%;
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    width: 85%;
  }
`

const ErrorMessage = styled.span`
  color: red;
  font-size: 1.5rem;
  margin-top: 14px;
  text-shadow: 1px 1px 2px black;
`

export default GetInTouch
