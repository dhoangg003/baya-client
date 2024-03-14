import { EyeInvisibleFilled, EyeOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import Button from "../../component/Button.jsx/Button.jsx";
import FieldTextInput from "../../component/FieldTextInput/FieldTextInput.jsx";
import { useFormik } from "formik";
import AuthApi from "../../services/authAPI.js";
import { TOKEN_TYPES } from "../../constant/constant.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/Auth/authSlice.js";
import CustomErrorMessage from "../../component/CustomErrorMessage/CustomErrorMessage.jsx";
import { validationSchema } from "../../validationSchema/auth.validation.js";
import Loading from "../../component/Loading/Loading.jsx";

const LoginPage = () => {
  // const [showPassword, setShowPassword] = useState(false);
  // const [showToggleIcon, setShowToggleIcon] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const handleClick = () => {
    navigate("/");
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        setError(null);
        const response = await AuthApi.login(values);
        const accessToken = response.data.accessToken;
        if (accessToken) {
          localStorage.setItem(TOKEN_TYPES.ACCESS_TOKEN, accessToken);
          const currentUserResponse = await AuthApi.fetchCurrentUser();
          const currentUserData = currentUserResponse.data;
          const payload = {
            user: currentUserData,
          };
          dispatch(login(payload));
          navigate("/mainpage");
        }
      } catch (error) {
        setError(error.response.data?.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    validationSchema: validationSchema.LoginValidationSchema,
  });
  const { handleChange, handleSubmit, errors } = formik;
  // const setInputType = (showPassword) => {
  //   if (showPassword) {
  //     return "text";
  //   } else {
  //     return "password";
  //   }
  // };
  // const inputType = setInputType(showPassword);
  if (isAuthenticated) {
    return navigate("/mainpage");
  }
  return (
    <div className="w-full h-full relative">
      <img
        className="w-full max-h-screen opacity-10"
        src="images/loginbg.jpg"
        alt="background"
      />

      <div className="display-flex text-center w-[440px] h-auto absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-white text-black rounded-lg p-2">
        <p className="Ali font-extrabold text-2xl mt-4 mb-2 text-yellow-700">
          MAYME
        </p>

        <p className="text-xl mb-3 font-bold">Đăng nhập</p>
        <form onSubmit={handleSubmit}>
          {/* {error && <p className="text-red-500 my-1">{error}</p>} */}
          <FieldTextInput
            id="email"
            name="email"
            placeholder="Tên đăng nhập"
            handleChange={handleChange}
          />
          {errors.email && <CustomErrorMessage content={errors.email} />}
          <FieldTextInput
            placeholder="Mật khẩu"
            id="password"
            name="password"
            type={"password"}
            // showPassword={showPassword}
            // value={showToggleIcon}
            // setShowToggleIcon={setShowToggleIcon}
            handleChange={handleChange}
          />
          <Button type="submit" name={"Đăng nhập"} />
          {/* {showToggleIcon ? (
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-[20px] bottom-[88px] cursor-pointer"
                  >
                    {showPassword ? <EyeOutlined /> : <EyeInvisibleFilled />}
                  </span>
                ) : (
                    ""
                  )} */}
        </form>
        <Button
          type="button"
          name="X"
          className="text-gray-500 text-2xl font-semibold"
          style={{ position: "absolute", top: "0", right: "0" }}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default LoginPage;
