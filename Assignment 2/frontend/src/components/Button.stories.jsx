import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Primary = () => (
  <Button variant="primary" size="md" onClick={() => alert("Clicked!")}>
    Primary Button
  </Button>
);

export const Secondary = () => (
  <Button variant="secondary" size="md">
    Secondary Button
  </Button>
);

export const Disabled = () => (
  <Button variant="primary" size="md" disabled>
    Disabled Button
  </Button>
);
