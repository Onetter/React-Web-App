import React from "react";
import { Button, Typography, Input } from "@material-tailwind/react";

const AuthForm = ({
  formData,
  onInputChange,
  onSubmit,
  handleUserCategory,
  setUserCategory,
  isNewUser,
}) => {
  return (
    <form action="" onSubmit={onSubmit} className="mt-8 space-y-5">
      {isNewUser ? (
        <>
          <div>
            <Input
              size="lg"
              label="First Name"
              name="first_name"
              value={formData.first_name}
              onChange={onInputChange}
            />
          </div>
          <div>
            <Input
              size="lg"
              label="Last Name"
              name="last_name"
              value={formData.last_name}
              onChange={onInputChange}
            />
          </div>
        </>
      ) : null}
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
      <div className="flex flex-row mt-8 p-8 space-x-2 justify-center items-center">
        <Typography className="text-sm">
          Don't have an account?
          <a
            href="#"
            className="text-gray-90 font-bold hover:underline"
            onClick={handleUserCategory}
          >
            Sign Up
          </a>
        </Typography>
      </div>
    </form>
  );
};
export default AuthForm;
