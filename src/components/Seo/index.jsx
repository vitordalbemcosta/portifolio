import React from 'react'

const SITE_URL = 'https://vitordalbemcosta.github.io/portifolio'
const DEFAULT_DESCRIPTION = 'Portfolio of Vitor Dalbem Costa, a Software Developer in Lisbon focused on accessible interfaces, scalable frontend architecture and high-quality digital products.'

const Seo = ({ title, description = DEFAULT_DESCRIPTION, pathname = '/' }) => {
  const pageTitle = title ? `${title} · Vitor Dalbem Costa` : 'Vitor Dalbem Costa · Software Developer'
  const url = `${SITE_URL}${pathname === '/' ? '/' : pathname}`
  const image = `${SITE_URL}/og.png`
  const structuredData = { '@context': 'https://schema.org', '@type': 'Person', name: 'Vitor Dalbem Costa', url: SITE_URL, jobTitle: 'Software Developer', address: { '@type': 'PostalAddress', addressLocality: 'Lisbon', addressCountry: 'PT' }, sameAs: ['https://www.linkedin.com/in/vitordalbemcosta/', 'https://github.com/vitordalbemcosta'] }
  return <><html lang="en" /><title>{pageTitle}</title><meta name="description" content={description} /><link rel="canonical" href={url} /><meta property="og:type" content="website" /><meta property="og:title" content={pageTitle} /><meta property="og:description" content={description} /><meta property="og:url" content={url} /><meta property="og:image" content={image} /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content={pageTitle} /><meta name="twitter:description" content={description} /><meta name="twitter:image" content={image} /><script type="application/ld+json">{JSON.stringify(structuredData)}</script></>
}
export default Seo
