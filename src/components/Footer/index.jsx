import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div style={footerStyle}>
        <a
          href="https://www.linkedin.com/in/vitordalbemcosta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
        </a>
        <a
          href="https://www.instagram.com/vitordalbem/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
        </a>
        <a
          href="https://github.com/vitordalbemcosta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} style={iconStyle} />
        </a>
      </div>
    </motion.div>
  )
}

const footerStyle = {
  backgroundColor: 'transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  bottom: '0',
  width: '100%',
}

const iconStyle = {
  margin: '0 10px 16px 10px',
  color: '',
  width: '44px',
  height: '44px',
}

export default Footer
