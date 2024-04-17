import React, { useState, useEffect } from "react";
import { UserOutlined, LoginOutlined, BellOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/Auth/authSlice.js";
import AddProductForm from "../../component/AddProductForm/AddProductForm.jsx";
import ProductAPI from "../../services/productAPI.js";
import { useNavigate } from "react-router-dom";
import MenuListItem from "../../component/MenuListItem/MenuListItem.jsx";
import Loading from "../../component/Loading/Loading.jsx";
import { Button, Modal } from "antd";
import orderApi from "../../services/orderAPI.js";
import { fetchDishList } from "../../redux/DishList/dishListAction.js";

const MainPage = () => {
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [orders, setOrders] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [orderCount, setOrderCount] = useState(0); // Thêm state mới
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const getDishList = useSelector((state) => state.dishList.dishList);
  const loadingState = useSelector((state) => state.dishList.loading);
  const id = useSelector((state) => state.auth.currentUser._id);

  useEffect(() => {
    dispatch(fetchDishList());
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await orderApi.get();
      const ordersData = response.data;
      setOrders(ordersData);
      setOrderCount(ordersData.length); // Cập nhật số lượng đơn hàng
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteOrder = async (orderId) => {
    try {
      await orderApi.delete(orderId);
      fetchOrders();
      handleCloseOrderDetail();
    } catch (error) {
      console.error(error);
    }
  };

  const handleOrderClick = (orderId) => {
    setSelectedOrderId(selectedOrderId === orderId ? null : orderId);
  };

  const handleNotificationButtonClick = () => {
    setNotificationVisible(true);
  };

  const handleNotificationClose = () => {
    setNotificationVisible(false);
  };

  const handleCloseOrderDetail = () => {
    setSelectedOrderId(null);
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  const onHandleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleClick = (_id) => {
    setSelectedOrderId(_id === selectedOrderId ? null : _id);
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
    navigate(`/listmenu/${id}`);
  };

  return (
    <div className="items-center min-h-screen bg-gray-100">
      <div className="sticky top-0 flex w-full justify-between items-center mb-4 px-4 py-2 bg-white">
        <div onClick={handleBackToHome} className="flex items-center justify-center gap-3 cursor-pointer">
          <img className="w-[50px] h[50px] rounded-xl" src="https://flexfit.vn/wp-content/uploads/2020/05/Baya-logo-%C4%91%C3%A1-scaled-e1594723552610.jpg" alt="logo" />
        </div>
        <div className="flex items-center gap-3">
          <Button type="text" icon={<BellOutlined />} onClick={handleNotificationButtonClick} className="border-2 border-yellow-700 w-auto p-2 rounded-2xl flex items-center hover:bg-yellow-500 transition-all duration-300 relative group cursor-default justify-center text-lg">
          <span className="mr-1 ">{orderCount}</span>thông báo  {/* Hiển thị số lượng đơn hàng */}
          </Button>
          <div className="border-2 border-yellow-700 w-auto p-2 rounded-2xl flex items-center hover:bg-yellow-500 transition-all duration-300 relative group cursor-default justify-center text-lg">
            <div className="text-right mr-2">{currentUser.tenNhaHang}</div>
            <UserOutlined />
            <ul className="p-2 shadow-[0px_3px_8px_rgba(0,0,0,0.24)] w-[150px] h-auto rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 absolute -bottom-[90%] z-10 text-black text-[13px] bg-white">
              <li onClick={onHandleLogout} className="flex justify-center gap-2 items-center cursor-pointer hover:bg-gray-100 rounded-md ">
                <span> Đăng xuất </span>
                <LoginOutlined />
              </li>
            </ul>
          </div>
        </div>
        <Modal
          title="Bạn có đơn hàng chưa xử lý "
          visible={notificationVisible}
          onCancel={handleNotificationClose}
          footer={null}
          className="w-full  h-full"
        >
          <div className="flex w-full h-full">
            <div className="w-1/3">
              {orders.map((order) => (
                <div key={order._id} className="flex items-center justify-between border-b py-2">
                  <p className="text-lg font-medium cursor-pointer whitespace-nowrap overflow-hidden overflow-ellipsis">{order._id}</p>
                  <button  onClick={() => handleOrderClick(order._id)}>xem chi tiết</button>
                </div>
                
              ))}
            </div>

            {selectedOrderId && (
              <div className="w-2/3 bg-gray-100 p-4 rounded-md shadow-md">
                {orders.map((order) =>
                  order._id === selectedOrderId ? (
                    <div key={order._id} className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">Thông tin đơn hàng</h3>
                      <p><strong>ID:</strong> {order._id}</p>
                      <p><strong>Tên khách hàng:</strong> {order.name}</p>
                      <p><strong>Số điện thoại:</strong> {order.phoneNumber}</p>
                      <p><strong>Địa chỉ:</strong> {order.address}</p>
                      <p><strong>Shop:</strong> {order.shopName}</p>
                      <p><strong>Tổng số tiền:</strong> {order.totalAmount}</p>
                      <h4 className="text-lg font-semibold mt-4 mb-2">Danh sách hàng:</h4>
                      <ul>
                        {order.cartItems.map((cartItem) => (
                          <li key={cartItem._id} className="border-b py-2">
                            <p><strong>Mã hàng hóa:</strong> {cartItem.maHangHoa}</p>
                            <p><strong>Tên hàng:</strong> {cartItem.tenHang}</p>
                            {/* Thêm các thông tin khác của cartItem nếu cần */}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex justify-end">
                        <Button type="default" className="mr-2" onClick={handleCloseOrderDetail}>
                          Đóng
                        </Button>
                        <Button type="danger" onClick={() => handleDeleteOrder(order._id)} className="bg-green-600">
                          Hoàn thành đơn
                        </Button>
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            )}
          </div>
        </Modal>
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
              <th className="p-2 border border-yellow-700 text-yellow-600">Mã Hàng Hoá</th>
              <th className="p-2 border border-yellow-700 text-yellow-600">Tên Hàng</th>
              <th className="p-2 border border-yellow-700 text-yellow-600">Nhóm Hàng</th>
              <th className="p-2 border border-yellow-700 text-yellow-600">Loại</th>
              <th className="p-2 border border-yellow-700 text-yellow-600">Giá khuyến mãi</th>
              <th className="p-2 border border-yellow-700 text-yellow-600">Giá gốc</th>
            </tr>
          </thead>
          <tbody>
            {loadingState && <Loading />}
            {getDishList ? (
              <MenuListItem getMenuListItem={getDishList} isMenuItemVisible={selectedOrderId} handleClick={handleClick} />
            ) : (
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
