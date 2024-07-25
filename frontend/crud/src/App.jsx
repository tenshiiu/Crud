import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form.jsx";
import Grid from "./components/Grid";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  

  return (
    <>
      <Container>
        <Title>USUÁRIOS</Title>
        <Form />
        <Grid />
      </Container>
      {/* <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} /> */}
      <GlobalStyle />
    </>
  )
}

export default App
