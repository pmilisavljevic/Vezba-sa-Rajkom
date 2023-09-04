import Button from "../components/inputs/Button";
import TextInput from "../components/inputs/TextInput";
import MainLayout from "../components/layouts/MainLayout";
import { useState } from "react";

const RegisterPage = () => {
  const [userName, setUserName] = useState("");
  console.log(userName);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <MainLayout>
      <div>
        <form className="input-form" onSubmit={handleSubmit}>
          <TextInput
            placeholder="Username"
            value={userName}
            onChange={setUserName}
          />

          <TextInput placeholder="First Name" />

          <TextInput placeholder="Last Name" />

          <TextInput placeholder="Password" type={"password"} />

          <TextInput placeholder="Email" type={"email"} />
          <Button>SUBMIT</Button>
        </form>
      </div>
    </MainLayout>
  );
};

export default RegisterPage;
