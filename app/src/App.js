import './App.css'
import Character from "./component/Character"
import { Container, Row, Col } from "react-bootstrap"
import React, { useState } from "react"

function App() {
  const [quiz, setQuiz] = useState("home")

  function renderQuiz() {
    switch (quiz) {
      case "home":

        return (
          <Container className="box">
            <Row>
              <Col>
                <h1>Avatar Quiz</h1>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col>
                <button className="option" onClick={() => setQuiz("character")}>Which Character Are You?</button>
              </Col>
            </Row>
          </Container>
        )

      case "character":
        return <Character setQuiz={setQuiz}/>

      default:
        break
    }
  }

  return (
    <div className="App">
      {renderQuiz()}
    </div>
  );
}

export default App;
