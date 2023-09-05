import Button from "../components/inputs/Button";
import TextInput from "../components/inputs/TextInput";
import MainLayout from "../components/layouts/MainLayout";
import { useState } from "react";
import { registerUser } from "../services/client";

const RegisterPage = () => {
  
  const [formState,setFormState] = useState({
      userName:"",
      firstName:"",
      lastName:"",
      password:"",
      email:""
  })
  

 const registerUserFunction = async () => {
  try{
    await registerUser(formState)

  }catch(e){
    console.log(e)
  }
 }
  



  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerUserFunction()
  };

  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
      setFormState({
        ...formState,
        [name]:e.target.value
      })

  }

  return (
    <MainLayout>
      <div>
        <form className="input-form" onSubmit={handleSubmit}>
          <TextInput
            placeholder="Username"
            value={formState.userName}
            name="userName"
            onChange={handleOnChange}
          />
          <TextInput
            placeholder="First Name"
            value={formState.firstName}
            name="firstName"
            onChange={handleOnChange}
          />
          <TextInput
            placeholder="Last name"
            value={formState.lastName}
            name="lastName"
            onChange={handleOnChange}
          />
          <TextInput
            placeholder="Password"
            value={formState.password}
            name="password"
            onChange={handleOnChange}
            type="password"
          />
          <TextInput
            placeholder="Email"
            value={formState.email}
            name="email"
            onChange={handleOnChange}
            type="email"
          />

          <Button>SUBMIT</Button>
        </form>
      </div>
    </MainLayout>
  );
};

export default RegisterPage;
