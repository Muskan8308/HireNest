import { useState } from "react";
import { Button, Modal, PasswordInput, PinInput, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { changePass, sendOtp, verifyOtp } from "../../Services/UserService";
import { signupValidation } from "../../Services/FormValidation";
import { errorNotification, successNotification } from "../../Services/NotificationService";
import { useInterval } from "@mantine/hooks";

const ResetPassword = (props) => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpSending, setOtpSending] = useState(false);
  const [verified, setVerified] = useState(false);
  const [password, setPassword] = useState("");
  const [passErr, setPassErr] = useState("");
  const [resendLoader, setResendLoader] = useState(false);
  const [seconds, setSeconds] = useState(60);


  const interval = useInterval(() => {
    if(seconds === 0)
    {
      setResendLoader(false);
      setSeconds(60);
      interval.stop();
    }
    else 
      setSeconds((s) => s-1)
  }, 1000);


  const handleSendOtp = () => {
    setOtpSending(true)
    sendOtp(email)
      .then((res) => {
        console.log(res);
        successNotification("OTP sent successfully.", "Enter OTP to reset password.")
        setOtpSent(true);
        setOtpSending(false)
        setResendLoader(true)
        interval.start()
      })
      .catch((err) =>{console.log(err)
        setOtpSending(false);
        errorNotification("OTP sending Failed.", err.response.data.errorMessage);
      });
  };

   const handleResetPassword = () => {

    changePass(email, password).then(res => {
      console.log(res)
      successNotification("Password Changed", "Login with new password.");
      props.close();
    })
    .catch(err => {
      console.log(err);
      errorNotification(
        "Password Reset Failed",
        err.response.data.errorMessage
      );
      
    })
   };

  const handleVerifyOtp = (otp) => {
    verifyOtp(email, otp)
      .then((res) => {
        console.log(otp);
        successNotification("OTP Verified", "Enter new password.")
        setVerified(true);
      })
      .catch((err) => {
        console.log(err);
        errorNotification(
          "OTP Verification Failed.",
          err.response.data.errorMessage
        );

      });
  };

  const resendOtp = (otp) => {
    console.log(otp);
    if(resendLoader) return;
    handleSendOtp();
  };

  const changeEmail = (otp) => {
    console.log(otp);
    setOtpSent(false);
    setResendLoader(false);
    setSeconds(60)
    setVerified(false)
    interval.stop()
  };

  return (
    <Modal opened={props.opened} onClose={props.close} title="Reset Password">
      <div className="flex flex-col gap-6">
        <TextInput
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          rightSection={
            <Button
              onClick={handleSendOtp}
              className=" mr-1 "
              variant="filled"
              autoContrast
              size="xs"
              disabled={email === "" || otpSent}
              loading={otpSending && !otpSent}
            >
              Reset
            </Button>
          }
          rightSectionWidth="xl"
          leftSection={<IconAt size={16} />}
          label="Email"
          placeholder="Your email"
          withAsterisk
        />
        {otpSent && (
          <PinInput
            length={6}
            className="mx-auto"
            size="md"
            gap="lg"
            type="number"
            onComplete={handleVerifyOtp}
          />
        )}
        {otpSent && !verified && (
          <div className="flex gap-2">
            <Button
              onClick={resendOtp}
              variant="light"
              fullWidth
              autoContrast
              loading={otpSending}
            >
              {resendLoader ? seconds : "Resend"}
            </Button>
            <Button
              onClick={changeEmail}
              fullWidth
              variant="filled"
              autoContrast
              loading={otpSending}
            >
              Change email
            </Button>
          </div>
        )}
        {verified && (
          <PasswordInput
            name="password"
            error={passErr}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPassErr(signupValidation("password", e.target.value));
            }}
            leftSection={<IconLock size={18} stroke={1.5} />}
            label="Password"
            placeholder="Create your password"
            withAsterisk
          />
        )}
        {verified && (
          <Button
            onClick={handleResetPassword}
            fullWidth
            variant="filled"
            autoContrast
          >
            Reset
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default ResetPassword;
