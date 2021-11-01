import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import data from "../data/character.json"

export default function Character(props) {
  const [quizQuestion, setQuizQuestion] = useState(1)
  const [answer, setAnswer] = useState("")
  const [newData, setNewData] = useState([])
  
  useEffect(() => {
    //Clears the localstorage on mount only.
    localStorage.clear();
    sessionStorage.clear();
  }, [])

  useEffect(() => {
    //keys = []
    
    if (quizQuestion === data.length + 1) {
      const keys = Object.keys(sessionStorage)
      let res = 0
      for (let index = 0; index < keys.length; index++) {
        if (sessionStorage.getItem(keys[index]) > res) {
          res = sessionStorage.getItem(keys[index])
          setAnswer(sessionStorage.key(index))
        }
      }
    }

    try {
      setNewData(generateData(data[quizQuestion - 1]))
    } catch (error) {
      console.log(error)
    }

  }, [quizQuestion])

  function generateData(data) {
    const newData = Object.keys(data).reduce((result, currentKey) => {
      if (typeof data[currentKey] === 'string' || data[currentKey] instanceof String) {
        if (currentKey !== 'question') {
          localStorage.setItem(result.length, data[currentKey])
          result.push(currentKey)
        }

      } else {
        const nested = generateData(data[currentKey])
        result.push(...nested)
      }
      return result
    }, [])
    return newData
  }

  function renderQuestion() {
    try {
      return <h5>{data[quizQuestion - 1].question}</h5>
    } catch (e) {
      console.log(e)
    }
  }

  function clickAnswer(key) {
    const answer = localStorage.getItem(key)
    let number = 0;
    //Get the number of times if exists
    number = sessionStorage.getItem(answer)
    if (number === null) number = 0
    number = parseInt(number) + 1
    sessionStorage.setItem(answer, number)

    setQuizQuestion(quizQuestion + 1)
  }

  function renderAnswers() {
    return (
      newData.map((answers, key) => {
        return (
          <Row key={key}>
            <button className="option" onClick={() => clickAnswer(key)}>{answers.toString()}</button>
          </Row>
        )
      })
    )
  }

  return (
    <Container className="box">
      <Row>
        <Col md="auto">
          <button className="back" onClick={() => props.setQuiz("home")}>Back</button>
        </Col>
        <Col>
          <h1>Which Character Are You?</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
      {answer ? answer.toString() :

        <Container>
          <Row>
            <Col md="auto">
              <h4>Question {quizQuestion.toString()}<span>/{data.length}</span> </h4>
            </Col>
            <Col>
              {renderQuestion()}
            </Col>
          </Row>
          <Row>
            <Col>
              <hr />
            </Col>
          </Row>
          {renderAnswers()}
        </Container>
      }

    </Container>
  )
}
