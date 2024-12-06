import React from "react";
import { Card, Typography, Input, Button } from "@material-tailwind/react";
import { useState } from "react";

// Components
import AuthForm from "../components/AuthForm";

const AuthPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
  });
  const [isNewUser, setIsNewUser] = useState(false);

  const handleUserCategory = (e) => {
    setIsNewUser(!isNewUser);
    e.preventDefault();
    // alert("Clicked");
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
    <Card className="flex flex-col justify-start items-center w-96 h-auto border border-lined border-gray-500 rounded-lg shadow-none">
      <Typography className="mt-8 font-bold text-2xl">Login</Typography>
      <AuthForm
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        handleUserCategory={handleUserCategory}
        setUserCategory={setIsNewUser}
        isNewUser={isNewUser}
      />
    </Card>
  );
};

export default AuthPage;
