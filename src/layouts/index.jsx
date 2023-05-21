import { useState } from "react";
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Modal } from "components/Modal";
import { Menu } from "components/Menu";
import { ToastContainer } from 'react-toastify';
import styled from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
  height: ${p => p.showModal ? '100vh' : 'auto'};
  overflow: ${p => p.showModal ? 'hidden' : 'visible'};
`;

const Layout = () => {
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container showModal={showModal || showMenu}>
      <Header onShowModal={() => setShowModal(true)} onShowMenu={() => setShowMenu(true)} />
      <main>
        <Outlet />
      </main>
      <Footer />
      {showModal ? <Modal onClose={() => setShowModal(false)} /> : null}
      {showMenu ? <Menu onClose={() => setShowMenu(false)} /> : null}
      <ToastContainer
        position="top-center" theme="colored" autoClose={2000} hideProgressBar={true}
        newestOnTop={false} closeOnClick rtl={false} draggable
      />
    </Container>
  );
};

export default Layout;