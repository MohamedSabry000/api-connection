import React, { useEffect, useState } from 'react'
import JsonToHtml from '../json-to-html/JsonToHtml'
import {Wrapper} from './JsonToHtmlTable.styles';

export default function JsonToHTMLTable({json}) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const js = JSON.parse(json);
      setError(null);
      setData(js);
    } catch (e) {
      console.log('invalid json');
      setError("Invalid json format");
    }
  } , [json]);

  return (
    error ?
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    :
    <Wrapper>
      <table data-testid="json-to-html-table">
        <JsonToHtml json={data} />
      </table>
    </Wrapper>
  )
}
