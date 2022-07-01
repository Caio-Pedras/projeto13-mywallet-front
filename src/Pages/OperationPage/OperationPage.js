import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../userContext/userContext";
import axios from "axios";
import Loading from "../../components/Loading";
import Input from "../../components/Input";

export default function OperationPage() {
  const { operationType } = useParams();
  const [type, setType] = React.useState("");
  function checkType() {
    if (operationType === "withdraw") {
      setType("saída");
    } else {
      setType("entrada");
    }
  }
  useEffect(() => checkType(), []);

  const [value, setValue] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  return (
    <Container>
      <h1 onClick={() => console.log(value)}>Nova {type}</h1>
      <Box opacity={isLoading ? 0.5 : 1}>
        <Input
          type="number"
          placeholder="Valor"
          disabled={isLoading}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Descrição"
          disabled={isLoading}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>
          <p>Salvar {type}</p>
        </Button>
      </Box>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  padding: 30px 30px 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: 400;
    font-size: 30px;
    color: #ffffff;
    margin-bottom: 30px;
    max-width: 600px;
    width: 100%;
    text-align: left;
  }
`;
const Button = styled.div`
  text-align: center;
  background-color: #a328d6;
  color: #ffffff;
  width: 100%;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 400;
  padding: 10px 0;
  margin-bottom: 40px;
  cursor: pointer;
  max-width: 600px;
`;
const Box = styled.div`
  opacity: ${(props) => props.opacity};
  max-width: 600px;
`;
