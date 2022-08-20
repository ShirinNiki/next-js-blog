import { useContext, useState } from "react";
import NotificationContext from "../../store/notification-context";
import Notification from "../ui/notification";

async function sendContactData(contactDetais) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetais),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log("res", response);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "something went wrong");
  }
}

function ContactForm() {
  const [enterEmail, setEnterEmail] = useState("");
  const [enterName, setEnterName] = useState("");
  const [enterMessage, setEnterMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState();
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notificatin;

  async function sendMessageHander(event) {
    event.preventDefault();
    notificationCtx.showNotification({
      status: "pending",
      title: "Sending message ......",
      message: "Your message is on its way",
    });
    try {
      await sendContactData({
        email: enterEmail,
        name: enterName,
        message: enterMessage,
      });

      notificationCtx.showNotification({
        status: "success",
        title: "success!",
        message: "message send successfuly",
      });
      setEnterEmail("");
      setEnterName("");
      setEnterMessage("");
    } catch (error) {
      setErrorMsg(error.message);
      notificationCtx.showNotification({
        status: "error",
        title: "error!",
        message: errorMsg,
      });
    }
  }
  return (
    <div className="col-md-12 pb-5">
      <div className="contact-form">
        <div id="success"></div>
        <form name="sentMessage" id="contactForm" onSubmit={sendMessageHander}>
          <div className="control-group">
            <input
              type="text"
              className="form-control"
              id="name"
              value={enterName}
              onChange={(event) => setEnterName(event.target.value)}
              placeholder="Your Name"
              required="required"
              data-validation-required-message="Please enter your name"
            />
            <p className="help-block text-danger"></p>
          </div>
          <div className="control-group">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your Email"
              required="required"
              value={enterEmail}
              onChange={(event) => setEnterEmail(event.target.value)}
              data-validation-required-message="Please enter your email"
            />
            <p className="help-block text-danger"></p>
          </div>
          <div className="control-group">
            <textarea
              className="form-control"
              rows="8"
              id="message"
              placeholder="Message"
              required="required"
              value={enterMessage}
              onChange={(event) => setEnterMessage(event.target.value)}
              data-validation-required-message="Please enter your message"
            ></textarea>
            <p className="help-block text-danger"></p>
          </div>
          <div>
            <button
              className="btn btn-primary"
              type="submit"
              id="sendMessageButton"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </div>
  );
}

export default ContactForm;
