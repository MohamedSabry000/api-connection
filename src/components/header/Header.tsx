import React from 'react'
import { Alert } from 'react-bootstrap'

const Header: React.FC = () => {
  return (
    <div>
      <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        API Connection is a simple app as a simple web simulation for softwares like Postman,
        Swagger, etc.
        <br />
        At much the same time, it is a tool for developers to test their APIs.
        solve the problem of testing the API from web browser, that I control the API options
        specially CORS, headers, etc.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>
    </div>
  )
}

export default Header