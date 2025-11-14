import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image = 'https://shanmukhartificialgrass.com/og-image.jpg',
  type = 'website',
  author = 'Shanmukh Artificial Grass'
}) => {
  const location = useLocation()
  const siteUrl = 'https://shanmukhartificialgrass.com'
  const currentUrl = `${siteUrl}${location.pathname}`

  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title
    }

    // Update or create meta tags
    const updateMetaTag = (property, content, isProperty = false) => {
      if (!content) return
      
      const attribute = isProperty ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${property}"]`)
      
      if (element) {
        element.setAttribute('content', content)
      } else {
        element = document.createElement('meta')
        element.setAttribute(attribute, property)
        element.setAttribute('content', content)
        document.head.appendChild(element)
      }
    }

    // Update standard meta tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    updateMetaTag('author', author)
    updateMetaTag('title', title)

    // Update Open Graph tags
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:type', type, true)
    updateMetaTag('og:url', currentUrl, true)
    updateMetaTag('og:image', image, true)

    // Update Twitter Card tags
    updateMetaTag('twitter:title', title, true)
    updateMetaTag('twitter:description', description, true)
    updateMetaTag('twitter:image', image, true)
    updateMetaTag('twitter:url', currentUrl, true)

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', currentUrl)
    } else {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      canonical.setAttribute('href', currentUrl)
      document.head.appendChild(canonical)
    }
  }, [title, description, keywords, image, type, author, currentUrl])

  return null
}

export default SEO
