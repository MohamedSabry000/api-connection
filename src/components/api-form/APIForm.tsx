import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { ApiDataType } from "../../screens/home/Home";

const APIForm = ({goConnect, setError}: {goConnect: (api: ApiDataType) => void, setError: (message: string)=> void}) => {
  const [api, setApi] = React.useState<ApiDataType>({
    url: "",
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: JSON.stringify({
      "Content-Type": "application/json",
    }),
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body  : "",
    params: "",
  });

  const [showAdvanced, setShowAdvanced] = React.useState(false);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    try {
      JSON.parse(api.headers);
      api.method.toUpperCase() !== "GET" && api.body !== undefined && JSON.parse(api.body);
      setError("");
      goConnect(api);
    } catch (e) {
      setError("Invalid JSON");
    }
  }

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>, type: string) => {
  //   const { name, value } = event.target;
  //   try {
  //     const parsed = JSON.parse(value);
  //     setError("");
  //     goConnect(api);
  //     setApi({ ...api, [type]: parsed });
  //   } catch (e) {
  //     setError("Invalid JSON in " + type);
  //   }

  // }

  return (
    <Form style={{borderBottom: "2px dashed #CCC", marginBottom: "5px"}}>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="url">
            <Form.Label>API URL:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Api Url"
              value={api.url}
              onChange={(e) => setApi({ ...api, url: e.target.value })}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="method">
            <Form.Label>API URL:</Form.Label>
            <Form.Control
              as="select"
              value={api.method}
              onChange={(e) => setApi({ ...api, method: e.target.value })}
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="headers">
            <Form.Label>Headers:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Headers"
              value={api.headers}
              onChange={(e) =>
                setApi({ ...api, headers: e.target.value })
              }
            />
          </Form.Group>
        </Col>
        {
          api.method.toUpperCase() !== "GET" && (
          <Col>
            <Form.Group className="mb-3" controlId="params">
              <Form.Label>Params:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Params"
                value={api.params}
                onChange={e => setApi({ ...api, params: e.target.value })}
              />
            </Form.Group>
          </Col>
          )
        }
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="body">
            <Form.Label>Body:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Body"
              value={api.body}
              onChange={(e) => setApi({ ...api, body: e.target.value })}
            />
          </Form.Group>
        </Col>
      </Row>
      {showAdvanced && (
        <>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="mode">
                <Form.Label>Mode:</Form.Label>
                <Form.Control
                  as="select"
                  value={api.mode}
                  onChange={(e) => setApi({ ...api, mode: e.target.value as RequestMode })}
                >
                  <option value="cors">cors</option>
                  <option value="no-cors">no-cors</option>
                  <option value="same-origin">same-origin</option>
                  <option value="navigate">navigate</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="cache">
                <Form.Label>Cache:</Form.Label>
                <Form.Control
                  as="select"
                  value={api.cache}
                  onChange={(e) => setApi({ ...api, cache: e.target.value as RequestCache })}
                >
                  <option value="default">default</option>
                  <option value="no-store">no-store</option>
                  <option value="reload">reload</option>
                  <option value="no-cache">no-cache</option>
                  <option value="force-cache">force-cache</option>
                  <option value="only-if-cached">only-if-cached</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="credentials">
                <Form.Label>Credentials:</Form.Label>
                <Form.Control
                  as="select"
                  value={api.credentials}
                  onChange={(e) =>
                    setApi({ ...api, credentials: e.target.value as RequestCredentials })
                  }
                >
                  <option value="omit">omit</option>
                  <option value="same-origin">same-origin</option>
                  <option value="include">include</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="redirect">
                <Form.Label>Redirect:</Form.Label>
                <Form.Control
                  as="select"
                  value={api.redirect}
                  onChange={(e) => setApi({ ...api, redirect: e.target.value as RequestRedirect })}
                >
                  <option value="follow">follow</option>
                  <option value="error">error</option>
                  <option value="manual">manual</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="referrerPolicy">
                <Form.Label>Referrer Policy:</Form.Label>
                <Form.Control
                  as="select"
                  value={api.referrerPolicy}
                  onChange={(e) =>
                    setApi({ ...api, referrerPolicy: e.target.value as ReferrerPolicy })
                  }
                >
                  <option value="no-referrer">no-referrer</option>
                  <option value="no-referrer-when-downgrade">
                    no-referrer-when-downgrade
                  </option>
                  <option value="origin">origin</option>
                  <option value="origin-when-cross-origin">
                    origin-when-cross-origin
                  </option>
                  <option value="same-origin">same-origin</option>
                  <option value="strict-origin">strict-origin</option>
                  <option value="strict-origin-when-cross-origin">
                    strict-origin-when-cross-origin
                  </option>
                  <option value="unsafe-url">unsafe-url</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
        </>
      )}
      <Row>
        <Col>
      <Button className={"text-center"} variant="primary" type="button" onClick={handleSubmit}>
        Submit
      </Button>
        </Col>
          <Col>
      <Form.Group className="mb-3 text-center" controlId="advanced">
        <Button
          variant="primary"
          type="button"
          onClick={() => setShowAdvanced((prev) => !prev)}
        >
          {`${showAdvanced? "Hide" : "Show" } Advanced`}
        </Button>
      </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default APIForm;
