import React from "react";
import { Card, Typography, Input, Button } from "@material-tailwind/react";
const AuthPage = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    alert("Clicked");
  };

  return (
    <Card className="flex flex-col justify-start items-center w-96 h-96">
      <Typography className="mt-8 font-bold text-2xl">Login</Typography>
      <form action="" className="mt-8 space-y-5">
        <div className="w-72">
          <Input size="lg" label="Username" />
        </div>
        <div>
          <Input type="password" size="lg" label="Password" />
        </div>
        <div>
          <Button className="w-72">Login</Button>
        </div>
      </form>
      <div className="flex flex-row mt-8 space-x-2 justify-center items-center">
        <Typography className="text-sm">
          Don't have an account?{" "}
          <a
            href="#"
            className="text-gray-90 font-bold hover:underline"
            onClick={(e) => {
              handleSignUp(e);
            }}
          >
            Sign Up
          </a>
        </Typography>
      </div>
    </Card>
  );
};

export default AuthPage;
