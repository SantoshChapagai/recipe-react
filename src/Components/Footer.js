import React from 'react'
import './styles.css'

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear()
  return (
    <footer>&copy; Santosh {year}</footer>
  )
}
