import React from "react";
import { Card, Typography, Input, Button } from "@material-tailwind/react";
import { useState } from "react";

// Components
import AuthForm from "../components/AuthForm";

const AuthPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleSignUp = (e) => {
    e.preventDefault();
    alert("Clicked");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Card className="flex flex-col justify-start items-center w-96 h-96">
      <Typography className="mt-8 font-bold text-2xl">Login</Typography>
      <AuthForm
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        SignUp={handleSignUp}
      />
    </Card>
  );
};

export default AuthPage;
