import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { useState } from 'react';

function EffectSection() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={openModal}>Some information</Button>

      <Modal open={modal}>
        <h3>Hello from Modal</h3>
        <p style={{ color: 'black' }}>
          You will build a small tic-tac-toe game during this tutorial. This
          tutorial does not assume any existing React knowledge. The techniques
          you’ll learn in the tutorial are fundamental to building any React
          app, and fully understanding it will give you a deep understanding of
          React.
        </p>
        <Button onClick={() => setModal(false)}>Close modal</Button>
      </Modal>
    </section>
  );
}

export default EffectSection;
