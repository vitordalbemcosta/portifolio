import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'
import Box from '../../components/Box'

const GetInTouch = () => {
  const form = useRef(null)
  const [status, setStatus] = useState('idle')
  const sendEmail = async event => {
    event.preventDefault(); setStatus('sending')
    try {
      await emailjs.sendForm(process.env.GATSBY_SERVICE_API, process.env.GATSBY_TEMPLATE_API, form.current, { publicKey: process.env.GATSBY_EMAILJS_API })
      form.current.reset(); setStatus('success')
    } catch { setStatus('error') }
  }
  return <Page><Intro><Kicker>Contact</Kicker><h1>Let’s build something clear, useful and lasting.</h1><p>Have a role, product challenge or idea in mind? Send a message and I’ll get back to you as soon as I can.</p><DirectLinks><a href="https://www.linkedin.com/in/vitordalbemcosta/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://github.com/vitordalbemcosta" target="_blank" rel="noopener noreferrer">GitHub ↗</a></DirectLinks></Intro><Form ref={form} onSubmit={sendEmail}><Field><label htmlFor="name">Name</label><input id="name" name="user_name" autoComplete="name" required /></Field><Field><label htmlFor="email">Email</label><input id="email" type="email" name="user_email" autoComplete="email" required /></Field><Field><label htmlFor="message">Message</label><textarea id="message" name="message" rows="7" required /></Field><Submit type="submit" disabled={status==='sending'}>{status==='sending'?'Sending…':'Send message'} <span aria-hidden="true">↗</span></Submit><Status role="status" aria-live="polite">{status==='success'&&'Thank you — your message has been sent.'}{status==='error'&&'Something went wrong. Please try again or contact me on LinkedIn.'}</Status></Form></Page>
}
export default GetInTouch
const Page=styled(Box)`display:grid;grid-template-columns:minmax(0,1fr) minmax(320px,1fr);gap:clamp(48px,9vw,120px);padding-top:clamp(64px,9vw,128px);padding-bottom:clamp(72px,10vw,128px);@media(max-width:960px){grid-template-columns:1fr;gap:56px}`
const Intro=styled.div`min-width:0;h1{font-size:clamp(2.7rem,6vw,5.5rem);line-height:1;letter-spacing:-.055em;margin:18px 0 30px;overflow-wrap:anywhere;}p{font-size:1.1rem;color:var(--color-muted);max-width:570px;}@media(max-width:380px){h1{font-size:2.45rem;}}`
const Kicker=styled.p`margin:0!important;color:var(--color-accent-strong)!important;font-size:.78rem!important;font-weight:800;letter-spacing:.15em;text-transform:uppercase;`
const DirectLinks=styled.div`display:flex;flex-wrap:wrap;gap:20px;margin-top:36px;a{font-weight:750;text-decoration:underline;text-decoration-color:var(--color-line);text-underline-offset:5px;}a:hover{color:var(--color-accent-strong);}`
const Form=styled.form`align-self:start;padding:clamp(24px,4vw,42px);border:1px solid var(--color-line);border-radius:var(--radius-lg);background:rgba(255,255,255,.72);box-shadow:var(--shadow-soft);`
const Field=styled.div`&+&{margin-top:22px;}label{display:block;margin-bottom:8px;font-size:.8rem;font-weight:750;}input,textarea{width:100%;border:1px solid var(--color-line);border-radius:12px;background:#fff;padding:13px 14px;color:var(--color-ink);resize:vertical;transition:border-color .2s,box-shadow .2s;}input:focus,textarea:focus{border-color:var(--color-accent);box-shadow:0 0 0 3px rgba(243,107,33,.12);outline:none;}`
const Submit=styled.button`display:flex;justify-content:center;align-items:center;gap:10px;width:100%;margin-top:24px;padding:14px 20px;border:0;border-radius:999px;background:var(--color-ink);color:#fff;font-weight:750;cursor:pointer;transition:transform .2s,background .2s;&:hover:not(:disabled){transform:translateY(-2px);background:var(--color-accent-strong);}&:disabled{opacity:.65;cursor:wait;}`
const Status=styled.p`min-height:24px;margin:14px 0 0;color:var(--color-muted);font-size:.85rem;`
