import React from "react";
import "./Network.css";
require("dotenv").config();


const handleSubmit = event => {
  event.preventDefault();
  const modal = document.getElementById("modal1");
  const emailField = document.getElementById("tboxEmail");
  const errorMsgField = document.getElementById("errMsg");
  const msgField = document.getElementById("tboxMsg");
  const nameField = document.getElementById("tboxName");
  //validation
  if(nameField.value.trim() === ''){
    errorMsgField.innerText = 'Please include your name'
    modal.className += " modalOpen";
    return;
  }
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!regex.test(emailField.value.toLowerCase())) {
    errorMsgField.innerText = 'Please include a valid email address'
    modal.className += " modalOpen";
    return;
  }
  if(msgField.value.trim() === ''){
    errorMsgField.innerText = 'Please include your message'
    modal.className += " modalOpen";
    return;
  }

  const {
    REACT_APP_EMAILJS_RECEIVER: receiverEmail,
    REACT_APP_EMAILJS_TEMPLATEID: template
  } = process.env;
  
  sendFeedback(
    template,
    emailField.value,
    receiverEmail,
    msgField.value,
    nameField.value
  );
};

const sendFeedback = (
  templateId,
  senderEmail,
  receiverEmail,
  feedback,
  senderName
) => {  
  const modal = document.getElementById("modal1");
  const emailField = document.getElementById("tboxEmail");
  const errorMsgField = document.getElementById("errMsg");
  const msgField = document.getElementById("tboxMsg");
  const nameField = document.getElementById("tboxName");
  errorMsgField.innerText = 'Message Delivered'
  modal.className += " modalOpen";
  emailField.value = "";
  msgField.value = "";
  nameField.value = "";
  let emailParams = {
    reply_to: senderEmail,
    message_html: feedback,
    from_name: senderName
  };
  window.emailjs
    .send("mailgun", templateId, emailParams)
    .then(res => {
      let modal = document.getElementById("modal1");
      modal.className += " modalOpen ";
    })
    .catch(err => console.error("Failed to send feedback. Error: ", err));
};

const hideModal= () =>{  
  let modal = document.getElementById("modal1");
  modal.className = modal.className.replace("modalOpen", "");
}

export default function Network() {
  return (
    <div className="mainContent col">
      
      <h4>Networking</h4>
      <form className="col m12 l7" id="contactMe" action="contact">
        <div className="input-field">
          <i className="material-icons prefix">person</i>
          <input
            id="tboxName"
            name="tboxName"
            type="text"
            className="validate"
            required="required"
          />
          <label htmlFor="tboxName">Full Name</label>
        </div>
        <div className="input-field">
          <i className="material-icons prefix">email_circle</i>
          <input
            id="tboxEmail"
            name="tboxEmail"
            type="email"
            className="validate"
          />
          <label htmlFor="tboxEmail">Email</label>
        </div>
        <div className="input-field">
          <i className="material-icons prefix">insert_comment</i>
          <textarea
            id="tboxMsg"
            name="tboxMsg"
            className="materialize-textarea"
          />
          <label htmlFor="tboxMsg">Message</label>
        </div>
        <div className="center-align">
          <button type="submit"
            className="waves-effect waves-light btn"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <div className="show-on-medium-and-down " style={{paddingTop:"32px", display:"none"}}>
          <div className="col s6 center-align"><a href="https://www.linkedin.com/in/kurtcooney/" target="_blank"><img src="./images/linkedin.png"/></a></div>
          <div className="col s6 center-align"><a href="https://github.com/krtcotmo2" target="_blank"><img src="./images/gitHub.png"/></a></div>
        </div>
      </form>
     
      <div className="mernQuad hide-on-med-and-down">
        <div className="row">
          <img alt="MERN Stack" src="./images/mernQuads.png" />
        </div>
        <div className="row">
          <div className="col s6 center-align"><a href="https://www.linkedin.com/in/kurtcooney/" target="_blank"><img src="./images/linkedin.png"/></a></div>
          <div className="col s6 center-align"><a href="https://github.com/krtcotmo2" target="_blank"><img src="./images/gitHub.png"/></a></div>
        </div>
      </div>
      <div className="tagLine">Node js</div>

      {/* MODAL WINDOOW */}
      <div id="modal1" className="modal center-align">
        <div className="modal-content">
          
          <p id='errMsg'></p>
        </div>
        <div className="modal-footer ">
          <button className="btn white waves-effect waves-green darken-2 btn-flat" onClick={hideModal}>
            OK
          </button>
        </div>
       
      </div>
    </div>
  );
}
