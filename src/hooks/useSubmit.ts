import { useState } from "react";
import { BACKEND_URL } from "../utils/constant";
import axios from "axios";
interface Data {
  email: string;
  password: string;
}

const useSubmit = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState([]);
  const [formData, setFormData] = useState();

  const HandleInput = (event: any) => {
    let { name, value } = event.target;
    console.log(name, value);
    setFormData((preVState) => ({
      ...preVState,
      [name]: value,
    }));
  };

  const HandleCategoryForm = async (formData: any, type = "POST", id = "") => {
    setLoading(true);
    var url = `${BACKEND_URL}/category`;
    var method = type;
    if (type === "DELETE") {
      var url = `${url}?id=${id}`;
      method = "DELETE";
      await axios
        .delete(url, {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token"),
          },
          method: method,
        })
        .then((result: any) => {
          if (result.data.status == "200") setLoading(false);
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
    if (type === "POST") {
      await axios
        .post(url, formData, {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token"),
          },
          method: method,
        })
        .then((result: any) => {
          if (result.data.status == "200") setLoading(false);
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  };

  const SignUp = async (formData: any) => {
    setLoading(true);
    await axios
      .post(`${BACKEND_URL}/sign-up`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
      })
      .then((result: any) => {
        if (result.data.status == "200") setLoading(false);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const Login = async (formData: any) => {
    setLoading(true);
    let email: string = formData.email;
    let password: string = formData.password;
    await axios
      .post(
        `${BACKEND_URL}/login`,
        {
          email,
          password,
        },

        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "post",
        }
      )
      .then((result: any) => {
        if (result.data.status == "200") {
          const token: string = result.data.token;
          localStorage.setItem("token", token);
          localStorage.setItem("userData", JSON.stringify(result.data.data));
          setLoading(false);
          setMessage(result.data.message);
          setUser(result.data.data);
        }
        if (result.data.status == 500) {
          setLoading(false);
          setMessage(result.data.message);
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  return {
    Login,
    SignUp,
    loading,
    message,
    user,
    HandleInput,
    formData,
    HandleCategoryForm,
  };
};

export default useSubmit;
