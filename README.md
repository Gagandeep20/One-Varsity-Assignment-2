
# 🎯 One Varsity Assignment 2 – Reusable Components Library

This project demonstrates the creation of **clean, reusable React components** styled with **TailwindCSS**.  
It includes a small demo project and an optional **Storybook** setup for exploring components in isolation.


## Features

- ✅ Reusable UI Components:
  - Button
  - Modal
  - Input
  - Table / Data Grid
- ✅ TailwindCSS Styling
- ✅ Props & Validation
- ✅ Demo Project
- ⚡ Optional Storybook Integration


## Tech Stack

- **React** – Frontend library  
- **TailwindCSS** – Utility-first CSS framework  
- **Lucide-react** – Modern icons  
- **Storybook** – UI component explorer (optional) 


## Getting Started
### 1. Clone the repo
```bash
git clone https://github.com/Gagandeep20/One-Varsity-Assignment-2.git
cd One-Varsity-Assignment-2
```
### 2. Install dependencies
```bash
npm install
```
### 3. Run the project
```bash
npm run dev
```
Visit 👉 http://localhost:5173
## 📖 Component Usage Guide
### 🔹 Button
```bash
<Button variant="primary" size="md" onClick={() => alert("Clicked!")}>
  Save
</Button>
```
### 🔹 Modal
```bash
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Example">
  <p>This is a modal</p>
</Modal>
```
### 🔹 Input
```bash
<Input label="Name" value={name} onChange={(e) => setName(e.target.value)} />
```
### 🔹 Table
```bash
<Table
  columns={[
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" }
  ]}
  data={[
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" }
  ]}
/>
```
## 📕 Storybook (Optional)
### Install
```bash
npx storybook@latest init
```
### Run
```bash
npm run storybook
```
Visit 👉 http://localhost:6006
## Demo



https://one-varsity-assignment-2.vercel.app/
