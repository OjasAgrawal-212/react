import React from 'react'

export default function Footer() {
  let footerCSS = {
    position: "relative",
    top: "70vh",
    width: "100%",
  }
  return (
    <footer className="bg-dark text-light py-3" style={footerCSS}>
      <p className="text-center">
      Copyright &copy; TodoList.com
      </p>
    </footer>
  )
}
