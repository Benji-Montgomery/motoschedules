import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate()
  const addNote = () =>{
    console.log('hiii')
    navigate("/")
  }
return (
	<div>
	<form name="contact" onSubmit={addNote}>
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
  	<button id="submitButton" type="submit" >submit</button>
  </p>
</form>

	</div>
);
};

export default Contact;
