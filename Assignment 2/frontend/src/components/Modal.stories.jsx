import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

export default {
  title: "Components/Modal",
  component: Modal,
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Example Modal"
      >
        <p>This is a sample modal body.</p>
      </Modal>
    </div>
  );
};
