import React from 'react';
import "../../src/App.css"

function Contact() {
  return (
   
    <div id="contact" class="contact">
        <div className="heading">
        <h1 style={{ color: 'black' }}>contact us</h1>
        <img src="images/header-img.png" alt="" />
      </div>

      <form action="">
        <div className="inputBox">
          <input type="text" placeholder="your name" />
          <input type="email" placeholder="your email" />
        </div>
        <div className="inputBox">
          <input type="number" placeholder="your number" />
          <input type="text" placeholder="your address" />
        </div>
        <textarea placeholder="say something" name="" id="" cols="30" rows="10"></textarea>
        <input type="submit" value="send message" className="btn" />
      </form>
  </div>
       

   
  );
}

export default Contact;