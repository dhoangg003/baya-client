import React, { useState, useEffect } from "react";
import { UserOutlined, LoginOutlined, FileOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/Auth/authSlice.js";
import AddProductForm from "../../component/AddProductForm/AddProductForm.jsx";
import ProductAPI from "../../services/productAPI.js";
import { useNavigate } from "react-router-dom";
import MenuListItem from "../../component/MenuListItem/MenuListItem.jsx";
import Loading from "../../component/Loading/Loading.jsx";
import { fetchDishList } from "../../redux/DishList/dishListAction.js";
const MainPage = () => {
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [isMenuItemVisible, setIsMenuItemVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchDishList());
  }, []);
  // const fetchMenuItem = async () => {
  //   try {
  //     setUploading(true);
  //     const fetchItem = await ProductAPI.get();
  //     setGetMenuListItem(fetchItem.data);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setUploading(false);
  //   }
  // };
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const getDishList = useSelector((state) => state.dishList.dishList);
  const loadingState = useSelector((state) => state.dishList.loading);
  const id = useSelector((state) => state.auth.currentUser._id);
  const onHandleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  const handleClick = (_id) => {
    if (_id === isMenuItemVisible) {
      setIsMenuItemVisible(null);
    } else {
      setIsMenuItemVisible(_id);
    }
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPreviewImage(URL.createObjectURL(file));
    setSelectedFile(file);
  };
  const handleSubmit = async (values) => {
    try {
      setUploading(true);
      setError(null);

      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("body", JSON.stringify(values));
      const response = await ProductAPI.create(formData);
      dispatch(fetchDishList());
      setShowAddProductForm(false);
      setPreviewImage(null);
    } catch (error) {
      console.error(error);
    } finally {
      setUploading(false);
    }
  };
  const onHandleCloseForm = () => {
    setShowAddProductForm(false);
    setPreviewImage(null);
    setSelectedFile(null);
  };
  const cancelPreviewImage = () => {
    setPreviewImage(null);
    setSelectedFile(null);
  };
  const handleButtonClick = () => {
    setShowAddProductForm(true);
  };

  const handleMenuButtonClick = () => {
    // Navigate to the ListMenu page
    navigate(`/listmenu/${id}`);
  };
  const handleBackToHome = () => {
    navigate("/");
  };
  return (
    <div className="  items-center min-h-screen bg-gray-100">
      <div className=" sticky top-0 flex w-full justify-between items-center mb-4   px-4 py-2 bg-white shadow-md">
        <div
          onClick={handleBackToHome}
          className="flex items-center justify-center gap-3 cursor-pointer "
        >
          <img className="w-[50px] h[50px] rounded-xl " src="https://flexfit.vn/wp-content/uploads/2020/05/Baya-logo-%C4%91%C3%A1-scaled-e1594723552610.jpg" />

          
        </div>
        <div className=" border-2 border-yellow-700 w-auto p-2 rounded-2xl flex items-center hover:bg-yellow-500 transition-all duration-300 relative group cursor-default justify-center text-lg ">
          <div className="text-right mr-2">{currentUser.tenNhaHang}</div>
          <UserOutlined />
          <ul className="p-2 shadow-[0px_3px_8px_rgba(0,0,0,0.24)] w-[150px] h-auto rounded-md opacity-0  group-hover:opacity-100 transition-all duration-300  absolute -bottom-[90%] z-10 text-black text-[13px] bg-white">
            <li
              onClick={onHandleLogout}
              className="flex  justify-center gap-2 items-center cursor-pointer hover:bg-gray-100 rounded-md "
            >
              <span> Đăng xuất </span>
              <LoginOutlined />
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-8 py-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-yellow-600 ">Hàng Hoá</h1>
          <div className="flex gap-5">
            <button
              className="border-yellow-700 shadow-[0px_3px_8px_rgba(0,0,0,0.24)]  w-32 text-yellow-600 hover:bg-gray-300  hover:border-transparent font-semibold py-2 px-4 rounded"
              onClick={handleMenuButtonClick}
            >
              Menu
            </button>
            <button
              className="border-yellow-700 shadow-[0px_3px_8px_rgba(0,0,0,0.24)] w-32 text-yellow-600 hover:bg-gray-300  hover:border-transparent font-semibold py-2 px-4 rounded"
              onClick={handleButtonClick}
            >
              + Thêm Mới
            </button>
          </div>
        </div>

        <table className="w-full shadow-[0px_3px_8px_rgba(0,0,0,0.24)] border-collapse border border-yellow-700">
          <thead>
            <tr className="border-yellow-700">
              <th className="p-2 border border-yellow-700 text-yellow-600">
                Mã Hàng Hoá
              </th>
              <th className="p-2 border border-yellow-700 text-yellow-600">
                Tên Hàng
              </th>
              <th className="p-2 border border-yellow-700 text-yellow-600">
                Nhóm Hàng
              </th>
              <th className="p-2 border border-yellow-700 text-yellow-600">
                Loại
              </th>
              <th className="p-2 border border-yellow-700 text-yellow-600">
                Giá khuyến mãi
              </th>
              <th className="p-2 border border-yellow-700 text-yellow-600">
                Giá gốc
              </th>
            </tr>
          </thead>
          <tbody>
            {loadingState && <Loading />}
            {getDishList ? (
              <MenuListItem
                getMenuListItem={getDishList}
                isMenuItemVisible={isMenuItemVisible}
                handleClick={handleClick}
              />
            ) : (
              // <div className="w-full h-[200px] bg-gray-100 flex items-center justify-center ">
              //   <div className="w-1/2 h-1/2  text-gray-400 text-center">
              //     <FileOutlined className="text-lg" />
              //     <p>Bạn chưa có sản phẩm nào</p>
              //   </div>
              // </div>
              ""
            )}
          </tbody>
        </table>
      </div>
      {showAddProductForm && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <AddProductForm
            showAddProductForm={showAddProductForm}
            onSubmitHandler={handleSubmit}
            onHandleCloseForm={onHandleCloseForm}
            onChangeFile={handleFileChange}
            previewImage={previewImage}
            closeImage={cancelPreviewImage}
            uploading={uploading}
          />
        </div>
      )}
    </div>
  );
};

export default MainPage;
