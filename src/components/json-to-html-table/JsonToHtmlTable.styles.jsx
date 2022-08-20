import styled from 'styled-components';

export const Wrapper = styled.div`
  .input-file-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  input[type="file"] {
    padding: 10px;
    border: 1px solid #CCC;
    border-radius: 5px;
    outline: none;
  }

  tabla {
    border-collapse: collapse;
    width: 100%;
  }

  th, td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even){background-color: #f2f2f2}

  .button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }

  button {
    flex: 1;
    padding: 10px;
    border: none;
    background-color: #4CAF50;
    color: white;
    font-size: 20px;
    cursor: pointer;
  }

  @media print {
    tabla {
      border-collapse: collapse;
      width: 100%;
    }

    th, td {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }

    tr:nth-child(even){background-color: #f2f2f2}
  }
`;