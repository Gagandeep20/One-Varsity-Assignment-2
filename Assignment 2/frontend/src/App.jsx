import React, { useState } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";
import Input from "./components/Input";
import Table from "./components/Table";
import { Plus } from "lucide-react";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [data, setData] = useState([]);

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
  ];

  const handleAdd = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return alert("All fields required");
    setData([...data, formData]);
    setFormData({ name: "", email: "" });
    setModalOpen(false);
  };

  return (
    <div className="p-10 space-y-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800">
        Reusable Components Demo
      </h1>

      <Button onClick={() => setModalOpen(true)} size="md" variant="primary">
        <Plus className="w-5 h-5 text-white mr-2" /> Add User
      </Button>

      <Table columns={columns} data={data} striped />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Add New User"
      >
        <form onSubmit={handleAdd} className="flex flex-col gap-4">
          <Input
            label="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter name"
            required
          />
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Enter email"
            required
          />
          <div className="flex justify-end gap-3 mt-6">
            <Button
              variant="secondary"
              size="md"
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="md">
              Save
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default App;
