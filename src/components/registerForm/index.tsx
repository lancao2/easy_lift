import { registerUser } from "@/services/post";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IRegisterUser } from "@/interfaces/forms";
import { toast } from "react-hot-toast";

const RegisterForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatorio"),
    email: yup.string().required("Campo obrigatorio"),
    password: yup
      .string()
      .required("Campo obrigatorio")
      .min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: yup
      .string()
      .required("Campo obrigatorio")
      .oneOf([yup.ref("password"), ""], "Senhas divergente"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IRegisterUser> = (data, event) => {
    event?.preventDefault();

    const { confirmPassword, ...newData } = data;
    registerUser(newData)
      .then((res) => {
        toast("USUARIO CADASTRADO COM SUCESSO", {
          style: {
            borderRadius: "50px",
            background: "#F4F3F7",
            color: "#3C2F58",
            fontSize: "1.3rem",
            fontWeight: "bolder",
          },
        });
      })
      .catch((err) => {
        const errorMessage = err.message;
        toast(errorMessage.toUpperCase(), {
          style: {
            borderRadius: "50px",
            background: "#e70000",
            color: "#f7f3f3",
            fontSize: "1.3rem",
            fontWeight: "bolder",
          },
        });
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
      <label>
        Name
        <input type="text" {...register("name")} />
      </label>
      <label>
        Email
        <input type="email" {...register("email")} />
      </label>
      <label>
        Senha
        <input type="password" {...register("password")} />
      </label>
      <label>
        Confirmar Senha
        <input type="password" {...register("confirmPassword")} />
      </label>
      <button type="submit">Registrar-se</button>
    </form>
  );
};
export default RegisterForm;
