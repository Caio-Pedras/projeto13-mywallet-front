import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../userContext/userContext";
import axios from "axios";
import Loading from "../../components/Loading";
import Input from "../../components/Input";

export default function EditPage() {
  const { operationType, operationID } = useParams();

  const { URL, token } = useContext(UserContext);
  const [type, setType] = useState("");
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  function checkType() {
    if (operationType === "withdraw") {
      setType("saída");
    } else {
      setType("entrada");
    }
  }
  useEffect(() => checkType(), []);
  function editTransaction() {
    setIsLoading(true);
    setValue(Number(value));
    if (value <= 0) {
      alert("prencha um valor valido");
      setIsLoading(false);
      return;
    }
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const body = {
      value,
      type: operationType,
      description,
    };
    axios
      .put(`${URL}/transactions/${operationID}`, body, config)
      .then((res) => {
        setIsLoading(false);
        navigate("/main");
      })
      .catch((err) => {
        alert("preencha todos os dados corretamente");
        setIsLoading(false);
      });
  }

  if (!token) {
    return <Loading></Loading>;
  }
  return (
    <Container>
      <h1>Atualizar {type}</h1>
      <Box opacity={isLoading ? 0.5 : 1}>
        <Input
          type="number"
          placeholder="Valor"
          disabled={isLoading}
          value={value}
          min="1"
          onChange={(e) => setValue(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Descrição"
          disabled={isLoading}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button onClick={() => editTransaction()}>
          <p>Atualizar {type}</p>
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
    max-width: 500px;
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
  padding: 15px 0;
  margin-bottom: 40px;
  cursor: pointer;
  max-width: 600px;
`;
const Box = styled.div`
  opacity: ${(props) => props.opacity};
  max-width: 600px;
`;
