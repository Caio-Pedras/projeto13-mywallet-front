import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../userContext/userContext";
import axios from "axios";
import Loading from "../../components/Loading";
import Input from "../../components/Input";

export default function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [transactions, setTransactions] = React.useState([
    { date: "30/11", description: "teste", value: 39.01, type: "deposit" },
    { date: "01/07", description: "teste2", value: 29.01, type: "withdraw" },
    { date: "01/07", description: "teste2", value: 29.01, type: "withdraw" },
    { date: "01/07", description: "teste2", value: 29.01, type: "withdraw" },
    { date: "01/07", description: "teste2", value: 29.01, type: "withdraw" },
    { date: "01/07", description: "teste2", value: 29.01, type: "withdraw" },
    { date: "01/07", description: "teste2", value: 29.01, type: "withdraw" },
    { date: "01/07", description: "teste2", value: 29.01, type: "withdraw" },
    { date: "01/07", description: "teste2", value: 29.01, type: "withdraw" },
    { date: "01/07", description: "teste2", value: 29.01, type: "withdraw" },
    { date: "01/07", description: "teste2", value: 29.01, type: "withdraw" },
    { date: "01/07", description: "teste2", value: 29.01, type: "withdraw" },
    { date: "01/07", description: "teste2", value: 29.01, type: "withdraw" },
    { date: "01/07", description: "teste2", value: 29.01, type: "withdraw" },
    { date: "01/07", description: "teste2", value: 29.01, type: "withdraw" },
    { date: "01/07", description: "teste2", value: 29.01, type: "withdraw" },
    { date: "01/07", description: "teste2", value: 29.01, type: "withdraw" },
    { date: "01/07", description: "teste2", value: 29.01, type: "withdraw" },
    { date: "01/07", description: "teste2", value: 29.01, type: "withdraw" },
    { date: "01/07", description: "teste2", value: 29.01, type: "withdraw" },
    { date: "01/07", description: "teste2", value: 29.01, type: "withdraw" },
    { date: "01/07", description: "teste2", value: 29.01, type: "withdraw" },
    { date: "01/07", description: "teste2", value: 29.01, type: "withdraw" },
    { date: "01/07", description: "teste2", value: 29.01, type: "withdraw" },
    { date: "01/07", description: "teste2", value: 29.01, type: "withdraw" },
    { date: "01/07", description: "teste2", value: 29.01, type: "withdraw" },
  ]);
  const teste = [
    { date: "30/11", description: "teste", value: 39.01, type: "deposit" },
    { date: "01/07", description: "teste2", value: 29.01, type: "withdraw" },
  ];
  const navigate = useNavigate();
  const user = "Teste";
  function logIn() {
    setIsLoading(true);
    const body = {
      email,
      password,
    };
    alert("estou funcionando", body);
    setIsLoading(false);
    navigate("/main");
  }
  function boxContent() {
    if (transactions.length === 0) {
      return (
        <EmptyTransactions>
          <h2>Não há registros de entrada ou saída</h2>
        </EmptyTransactions>
      );
    } else {
      return (
        <>
          <TransactionsWrapper>
            {transactions.map(({ date, description, value, type }, index) => (
              <Transaction key={index}>
                <LeftInfo>
                  <p>{date}</p>
                  <h1>{description}</h1>
                </LeftInfo>
                <RightInfo>
                  <h2 className={type}>
                    {value.toFixed(2).toString().replace(".", ",")}
                  </h2>
                  <ion-icon name="close-outline"></ion-icon>
                </RightInfo>
              </Transaction>
            ))}
          </TransactionsWrapper>
          <BoxFooter>
            <p>Saldo</p>
            <h1>1,00</h1>
          </BoxFooter>
        </>
      );
    }
  }
  return (
    <Container>
      <TopBanner>
        <h1>Olá, {user}</h1>
        <ion-icon name="exit-outline"></ion-icon>
      </TopBanner>
      <Box>{boxContent()}</Box>
      <Footer>
        <Button>
          <Link to="/operations/deposit">
            <ButtonContentWrapper>
              <ion-icon name="add-circle-outline"></ion-icon>
              <p>Nova Entrada</p>
            </ButtonContentWrapper>
          </Link>
        </Button>

        <Button>
          <Link to="/operations/withdraw">
            <ButtonContentWrapper>
              <ion-icon name="remove-circle-outline"></ion-icon>
              <p>Nova Saída</p>
            </ButtonContentWrapper>
          </Link>
        </Button>
      </Footer>
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
  justify-content: center;

  h1 {
    font-weight: 400;
    font-size: 40px;
    color: #ffffff;

    text-align: center;
  }
`;
const TopBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  font-weight: 700;
  color: #ffffff;
  width: 100%;
  max-width: 600px;
`;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
`;
const Button = styled.div`
  background-color: #a328d6;
  color: #ffffff;
  height: 120px;
  width: 45%;
  border-radius: 10px;
  font-size: 24px;
  font-weight: 400;
  padding: 10px;
  margin-bottom: 40px;
  cursor: pointer;
`;
const ButtonContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const Box = styled.div`
  /* opacity: ${(props) => props.opacity}; */
  height: 100%;
  width: 100%;
  max-height: 100%;
  overflow-y: hidden;
  max-width: 600px;
  border-radius: 10px;
  background-color: #ffffff;
  margin-top: 10px;
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const EmptyTransactions = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  h2 {
    max-width: 200px;
    color: #868686;
    font-size: 22px;
    text-align: center;
  }
`;
const Transaction = styled.div`
  display: flex;
  color: black;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
  p {
    color: #c6c6c6;
    font-size: 16px;
    font-weight: 400;
  }
  h1 {
    color: #000000;

    font-size: 16px;
    font-weight: 400;
  }
  h2 {
    color: ${(props) => props.color};
    font-size: 16px;
    font-weight: 400;
  }
`;
const LeftInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 15px;
`;
const RightInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 15px;
  ion-icon {
    color: #c6c6c6;
    font-size: 15px;
    font-weight: 400;
  }
  .deposit {
    color: #03ac00;
  }
  .withdraw {
    color: #c70000;
  }
`;
const BoxFooter = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    color: "black";
    font-size: 18px;
    font-weight: 700;
  }
  h1 {
    color: #03ac00;
    font-size: 18px;
  }
`;
const TransactionsWrapper = styled.div`
  max-height: 100%;
  overflow-y: scroll;
  margin-bottom: 5px;
`;
