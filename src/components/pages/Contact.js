import React from 'react';

export default function Contact() {
  return (
    
    <div>
      <h1 className=' header header-contact'>Contact Me</h1>
      <div className='bg-dark'>
      <div className='scrolldown'>
          <form action="/action_page.php">
            <label>First Name</label>
            <input type="text"id="fname"name="firstname"placeholder="Your name.."/>
              <label>Last Name</label>
            <input type="text"id="lname" name="lastname" placeholder="Your last name.."/>
              <label>Email</label>
            <input type="email"id="email"name="email"placeholder="Your email"/>
              <label>Subject</label>
            <textarea id="subject"name="subject"placeholder="Write something.."></textarea>
            <input type="submit"value="Submit"/>
        </form>
    </div>
    </div>
  </div>
  );
}
