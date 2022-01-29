import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import { db } from "../../firebase";
function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <Container fluid className="contact-section">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={6}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <form className="form" onSubmit={handleSubmit}>
              <h1>Contact Me 🤳</h1>

              <label>Name</label>
              <input
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>Email</label>
              <input
                required
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Message</label>
              <textarea
                required
                placeholder="Write a message..."
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <button type="submit">Submit</button>
            </form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contacts;
