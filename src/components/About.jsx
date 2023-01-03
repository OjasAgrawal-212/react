import React from 'react'

export default function About() {
  let paraStyle = {
    fontSize: "28px",
    marginTop: "100px"
  }
  return (
    <>
    <div class="container">
      <p style={paraStyle}>Hello! Welcome to the TodoList app, I made this as a practise project while i was still learning reactJS so this might not seem like the perfect application. But i spent a lot of time figuring out the bugs so yeah lmao.</p>
      <h2>Instagram:</h2>
      <h4>dogee_212</h4>
      <a href="https://www.instagram.com/dogee_212/"><button>Click me!</button></a>
      <br></br>
      <br></br>
      <h2>Discord:</h2>
      <h4>OversizedSweetDoge#4441</h4>
      <a href="https://discord.gg/3VXnvVfs"><button>Click me!</button></a>
      <br></br>
      <br></br>
      <h2>Github:</h2>
      <h4>OjasAgrawal-212</h4>
      <a href="https://www.github.com/OjasAgrawal-212/OjasAgrawal-212"><button>Click me!</button></a>
    </div> 
    </>
  )
}
