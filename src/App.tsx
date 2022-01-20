import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createServer } from 'miragejs';
import ModalReact from 'react-modal';
import { useState } from 'react';
createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'Deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })
  }
})

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true)
    }
    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false)
    }
  return (
    <>
      <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <ModalReact isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>
                    <h2>Cadastrar transação</h2>
                </ModalReact>
      <GlobalStyle/>

    </>
  );
}

