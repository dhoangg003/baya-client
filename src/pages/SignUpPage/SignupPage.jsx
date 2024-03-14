import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { validationSchema } from "../../validationSchema/auth.validation.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthApi from "../../services/authAPI.js";
import CustomErrorMessage from "../../component/CustomErrorMessage/CustomErrorMessage";
import Loading from "../../component/Loading/Loading.jsx";
import Button from "../../component/Button.jsx/Button.jsx";

function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleClick = () => {
    navigate("/");
  };
  const formik = useFormik({
    initialValues: {
      hoTen: "",
      tenNhaHang: "",
      sdt: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        setError(null);
        await AuthApi.signUp(values);
        navigate("/login");
      } catch (error) {
        setError(error.response.data?.message);
      } finally {
        setLoading(false);
      }
    },
    validationSchema: validationSchema.signupValidationSchema,
  });
  const { handleChange, handleSubmit, errors } = formik;
  if (isAuthenticated) {
    return navigate("/mainpage");
  }
  return (
    <div className="h-screen md:flex">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="w-[45%] h-full">
            <div className="w-full  h-full">
              <img
                src="images\signUpbg.jpg"
                alt="cafe"
                className=" w-full object-fill  h-full "
              />
            </div>
          </div>

          <div className="flex w-[55%]  justify-center  items-center text-center bg-white">
            <form className="bg-white" onSubmit={handleSubmit}>
              <h1 className="text-yellow-700 font-bold text-2xl mb-1">MAYME</h1>
              <p className="text-sm font-normal text-gray-600 mb-7"></p>
              <label htmlFor="hoTen">
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    className="pl-2 w-[300px]  outline-none border-none bg-inherit text-black"
                    type="text"
                    name="hoTen"
                    id="hoTen"
                    onChange={handleChange}
                    placeholder="Họ tên"
                  />
                </div>
              </label>
              <div className="relative h-6 ">
                {errors.hoTen && (
                  <CustomErrorMessage
                    style={"absolute left-1/2 -translate-x-1/2 w-full "}
                    content={errors.hoTen}
                  />
                )}
              </div>
              <label htmlFor="tenNhaHang">
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                  <input
                    className="pl-2 outline-none border-none bg-inherit text-black"
                    type="text"
                    name="tenNhaHang"
                    id="tenNhaHang"
                    onChange={handleChange}
                    placeholder="Tên nhà hàng "
                  />
                </div>
              </label>
              <div className="relative h-6 ">
                {errors.tenNhaHang && (
                  <CustomErrorMessage
                    style={"absolute left-1/2 -translate-x-1/2 w-full "}
                    content={errors.tenNhaHang}
                  />
                )}
              </div>
              <label htmlFor="sdt">
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                  <input
                    className="pl-2 outline-none border-none bg-inherit text-black"
                    type="text"
                    name="sdt"
                    id="sdt"
                    onChange={handleChange}
                    placeholder="Số điện thoại "
                  />
                </div>
              </label>
              <div className="relative h-6 ">
                {errors.sdt && (
                  <CustomErrorMessage
                    style={"absolute left-1/2 -translate-x-1/2 w-full "}
                    content={errors.sdt}
                  />
                )}
              </div>
              <label htmlFor="email">
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                  <input
                    className="pl-2 outline-none border-none bg-inherit text-black"
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    placeholder="Địa chỉ email"
                  />
                </div>
              </label>
              <div className="relative h-6 ">
                {errors.email && (
                  <CustomErrorMessage
                    style={"absolute left-1/2 -translate-x-1/2 w-full "}
                    content={errors.email}
                  />
                )}
              </div>
              <label htmlFor="password">
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    className="pl-2 outline-none border-none bg-inherit text-black"
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    placeholder="Mật khẩu"
                  />
                </div>
              </label>
              <div className="relative h-6 ">
                {errors.password && (
                  <CustomErrorMessage
                    style={"absolute left-1/2 -translate-x-1/2 w-full "}
                    content={errors.password}
                  />
                )}
              </div>
              <button
                type="submit"
                className="block w-full bg-yellow-700 hover:opacity-70 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
              >
                Signup
              </button>
              <Button
                type="button"
                name="X"
                className="text-gray-500 text-2xl font-semibold  "
                // Thêm các thuộc tính CSS tùy chỉnh để định vị nút button
                style={{ position: "absolute", top: "0", right: "0" }}
                onClick={handleClick}
              />
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default SignupPage;
