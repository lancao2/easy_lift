import RegisterForm from "@/components/registerForm";
import { NextPage } from "next";

const Register: NextPage = (): JSX.Element => {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <RegisterForm />
    </main>
  );
};
export default Register;
