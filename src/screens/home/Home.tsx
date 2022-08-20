import React from 'react'
import APIForm from '../../components/api-form/APIForm'
import Header from '../../components/header/Header'

import Container from 'react-bootstrap/Container';
import Output from '../../components/output/Output';
import JsonToHTMLTable from '../../components/json-to-html-table/JsonToHTMLTable';

export type ApiDataType = {
  url: string,
  method: string,
  mode: RequestMode,
  cache: RequestCache,
  credentials: RequestCredentials,
  headers: string,
  redirect: RequestRedirect,
  referrerPolicy: ReferrerPolicy,
  body?: string,
}

const Home: React.FC = () => {

  const [error, setError] = React.useState<any>('');
  const [out, setOut] = React.useState<string>('');
  const goConnect = (api: ApiDataType) => {
    const res = postData({...api});
    res.then(data => {
      console.log(data);
      setOut(data);
    }).catch(err => {
      console.log(err);
      setError(err);
    }).finally(() => {
      console.log('finally');
    })
  }

  // Example POST method implementation:
async function postData({ url, method, mode, cache, credentials, headers, redirect, referrerPolicy, body }: ApiDataType) {
  // Default options are marked with *
  let options = {
    method, // *GET, POST, PUT, DELETE, etc.
    mode, // no-cors, *cors, same-origin
    cache, // *default, no-cache, reload, force-cache, only-if-cached
    credentials, // include, *same-origin, omit
    headers: JSON.parse(headers),
    redirect, // manual, *follow, error
    referrerPolicy, // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body // body data type must match "Content-Type" header
  }

  method.toUpperCase() === 'GET' ? delete options.body : options.body = body;
  const response = await fetch(url, options);
  return response.json(); // parses JSON response into native JavaScript objects
}


  return (
    <Container>
      <Header />
      <APIForm goConnect={goConnect} setError={setError} />
      {
        error ?
          <div className="alert alert-danger" role="alert">
            {typeof error === 'string' ? error : error.name + ' ' + error.message + ', Please open the debugger console for more details.'}
          </div>
        :
          out && <Output out={JSON.stringify(out)} /> && <JsonToHTMLTable json={JSON.stringify(out)} />
      }
    </Container>
  )
}

export default Home