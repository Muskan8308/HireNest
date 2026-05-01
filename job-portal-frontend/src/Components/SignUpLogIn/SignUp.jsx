import {
  Anchor,
  Button,
  Checkbox,
  Group,
  LoadingOverlay,
  PasswordInput,
  Radio,
  TextInput,
} from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../../Services/UserService";
import { signupValidation } from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";

const form = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  accountType: "APPLICANT",
};

const SignUp = () => {
  const [data, setData] = useState(form);
  const [formError, setFormError] = useState(form);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleChange = (event) => {
    if (typeof event == "string") {
      setData({ ...data, accountType: event });
      return;
    }

    let name = event.target.name,
      value = event.target.value;
    setData({ ...data, [name]: value });
    setFormError({ ...formError, [name]: signupValidation(name, value) });

    if (name === "password" && data.confirmPassword !== "") {
      let err = "";
      if (data.confirmPassword !== value) err = "Passwords do not match.";

      setFormError({
        ...formError,
        [name]: signupValidation(name, value),
        confirmPassword: err,
      });
    }

    if (name == "confirmPassword") {
      if (data.password !== value)
        setFormError({ ...formError, [name]: "Passwords do not match." });
      else setFormError({ ...formError, confirmPassword: "" });
    }
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
      if (key == "accountType") continue;
      if (key != "confirmPassword")
        newFormError[key] = signupValidation(key, data[key]);
      else if (data[key] != data["password"])
        newFormError[key] = "Passwords do not match.";
      if (newFormError[key]) valid = false;
    }
    setFormError(newFormError);
    console.log(valid);

    if (valid) {
      setLoading(true);
      registerUser(payload)
        .then((res) => {
          console.log(res);
          setData(form);
          notifications.show({
            title: "Registered Successfully",
            message: "Redirecting to login page...",
            withCloseButton: true,
            icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
            color: "green",
            withBorder: true,
            className: "!border-green-500",
          });
          setTimeout(() => {
            setLoading(false);
            navigate("/login");
          }, 4000);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err.response.data);
          notifications.show({
            title: "Registeration Failed",
            message: "Some error occurred...",
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
    <LoadingOverlay
          visible={loading}
          className="translate-x-1/2"
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'orient.4', type: 'bars' }}
        />
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-2xl font-semibold">Create your Account </div>
      <TextInput
        name="name"
        error={formError.name}
        value={data.name}
        onChange={handleChange}
        label="Full Name"
        placeholder="Your name"
        withAsterisk
      />
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
      <PasswordInput
        name="confirmPassword"
        error={formError.confirmPassword}
        value={data.confirmPassword}
        onChange={handleChange}
        leftSection={<IconLock size={18} stroke={1.5} />}
        label="Confirm Passsword"
        placeholder="Confirm your password"
        withAsterisk
      />

      <Radio.Group
        value={data.accountType}
        onChange={handleChange}
        label="You are an ?"
        withAsterisk
      >
        <Group mt="xs">
          <Radio
            className="py-4 px-6 border has-[:checked]:border-orient-400 border-mine-shaft-800 rounded-lg has-[:checked]:bg-orient-400/5"
            autoContrast
            value="APPLICANT"
            label="Applicant"
          />
          <Radio
            className="py-4 px-6 border has-[:checked]:border-orient-400 has-[:checked]:bg-orient-400/5 border-mine-shaft-800 rounded-lg"
            autoContrast
            value="EMPLOYEE"
            label="Employee"
          />
        </Group>
      </Radio.Group>
      <Checkbox
        autoContrast
        label={
          <>
            I accept <Anchor>terms & conditions</Anchor>{" "}
          </>
        }
      />

      <Button loading={loading} onClick={handleSubmit} className="!font-bold" variant="filled">
        SignUp
      </Button>
      <div className="mx-auto">
        Have an account ?{" "}
        <span
          className="text-orient-400 hover:underline cursor-pointer"
          onClick={() => {
            navigate("/login");
            setFormError(form);
            setData(form);
          }}
        >
          {" "}
          Login
        </span>
      </div>
    </div>
    </>
  );
};

export default SignUp;
