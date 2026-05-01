import { Button, LoadingOverlay, PasswordInput, TextInput } from "@mantine/core";
import { IconAt, IconLock, IconX, IconCheck } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../Services/UserService";
import { loginValidation } from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";
import ResetPassword from "./ResetPassword";
import { useDisclosure } from "@mantine/hooks";
import { useDispatch } from "react-redux";
import { setUser } from "../../Slices/UserSlice";

const form = {
  email: "",
  password: "",
};

const LogIn = () => {
  const [data, setData] = useState(form);
  const [formError, setFormError] = useState(form);
  const [opened, { open, close }] = useDisclosure(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setFormError({ ...formError, [event.target.name]: "" });
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      accountType: data.accountType,
    };

    
    let valid = true,
      newFormError = {};

    for (let key in data) {
      newFormError[key] = loginValidation(key, data[key]);

      if (newFormError[key]) valid = false;
    }
    setFormError(newFormError);
    console.log(valid);

    if (valid) {
      setLoading(true);
      loginUser(payload)
        .then((res) => {
          console.log(res);
          setData(form);
          notifications.show({
            title: "Login Successfully",
            message: "Redirecting to home page...",
            withCloseButton: true,
            icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
            color: "green",
            withBorder: true,
            className: "!border-green-500",
          });
          setTimeout(() => {
            setLoading(false);
            dispatch(setUser(res.data));
            navigate("/");
          }, 4000);
        })
        .catch((err) => {
          const errorMessage =
            err?.response?.data?.errorMessage || "Something went wrong";
          setLoading(false);
          console.log(err.response);
          notifications.show({
            title: "Login Failed",
            message: errorMessage,
            withCloseButton: true,
            position: "top-center",
            icon: <IconX style={{ width: "90%", height: "90%" }} />,
            color: "red",
            withBorder: true,
            className: "!border-red-500",
          });
        });
    }
  };

  return (
    <>
      <div className="w-1/2 px-20 flex flex-col justify-center gap-6">
        <LoadingOverlay
          visible={loading}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'orient.4', type: 'bars' }}
        />
        <div className="text-2xl font-semibold">Create your Account </div>
        <TextInput
          name="email"
          error={formError.email}
          value={data.email}
          onChange={handleChange}
          leftSection={<IconAt size={16} />}
          label="Email"
          placeholder="Your email"
          withAsterisk
        />
        <PasswordInput
          name="password"
          error={formError.password}
          value={data.password}
          onChange={handleChange}
          leftSection={<IconLock size={18} stroke={1.5} />}
          label="Password"
          placeholder="Create your password"
          withAsterisk
        />

        <Button
          onClick={handleSubmit}
          className="!text-mine-shaft-950 !font-bold"
          variant="filled"
          loading={loading}
        >
          Login
        </Button>
        <div className="mx-auto">
          Don't have an account ?{" "}
          <span
            className="text-orient-400 hover:underline cursor-pointer"
            onClick={() => {
              navigate("/signup");
              setFormError(form);
              setData(form);
            }}
          >
            {" "}
            SignUp
          </span>
          <div
            onClick={open}
            className="text-orient-400 mt-3 hover:underline cursor-pointer text-center"
          >
            Forget Password
          </div>
        </div>
      </div>
      <ResetPassword opened={opened} close={close} />
    </>
  );
};

export default LogIn;
