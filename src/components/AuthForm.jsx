import React from "react";
import { Button, Typography, Input } from "@material-tailwind/react";

const AuthForm = ({ formData, onInputChange, onSubmit, SignUp }) => {
  return (
    <form action="" onSubmit={onSubmit} className="mt-8 space-y-5">
      <div className="w-72">
        <Input
          size="lg"
          label="Username"
          name="username"
          value={formData.username}
          onChange={onInputChange}
        />
      </div>
      <div>
        <Input
          type="password"
          size="lg"
          label="Password"
          name="password"
          value={formData.password}
          onChange={onInputChange}
        />
      </div>
      <div>
        <Button type="submit" className="w-72">
          Login
        </Button>
      </div>
      <div className="flex flex-row mt-8 space-x-2 justify-center items-center">
        <Typography className="text-sm">
          Don't have an account?{" "}
          <a
            href="#"
            className="text-gray-90 font-bold hover:underline"
            onClick={SignUp}
          >
            Sign Up
          </a>
        </Typography>
      </div>
    </form>
  );
};
export default AuthForm;
