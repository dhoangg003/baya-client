import { FallOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import UpdateProductForm from "../../component/UpdateProductForm/UpdateProductForm";
import { fetchDishList } from "../../redux/DishList/dishListAction";
import ProductAPI from "../../services/productAPI";

const MenuItem = ({
  id,
  maHangHoa,
  tenHang,
  nhomHang,
  loai,
  giaBan,
  giaVon,
  hinhAnh,
}) => {
  const [showUpdateForm, setShowUpdateFrom] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const dispatch = useDispatch();

  const dishInfo = {
    id,
    maHangHoa,
    tenHang,
    nhomHang,
    loai,
    giaBan,
    giaVon,
    hinhAnh,
  };
  const handleFileChange = (e) => {
    if (e) {
      const file = e.target.files[0];
      setPreviewImage(URL.createObjectURL(file));
      setSelectedFile(file);
    } else {
      return;
    }
  };
  const onHandleCloseForm = () => {
    setShowUpdateFrom(false);
    setPreviewImage(null);
  };

  const handleSubmit = async (values) => {
    try {
      setUploading(true);
      setError(null);
      if (selectedFile) {
        const formData = new FormData();
        formData.append("hinhAnh", selectedFile);
        formData.append("body", JSON.stringify(values));
        const response = await ProductAPI.update(formData, id);
        dispatch(fetchDishList());
        setShowUpdateFrom(false);
      } else {
        const newValues = { ...values, hinhAnh: hinhAnh };
        const formData = new FormData();

        formData.append("body", JSON.stringify(values));
        const response = await ProductAPI.update(formData, id);
        dispatch(fetchDishList());
        setShowUpdateFrom(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  const onShowUpdateForm = () => {
    setShowUpdateFrom(!showUpdateForm);
  };
  const onHandleDelete = async (id) => {
    try {
      const response = await ProductAPI.delete(id);
      dispatch(fetchDishList());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="">
      <div className="">
        <div className="container mx-auto px-8 py-4 ">
          <div className=" flex justify-start gap-10 ">
            <div className="mr-2 text-yellow-700">Thông tin</div>
            <div className="mr-2 text-yellow-700">Thẻ kho</div>
            <div className="mr-2 text-yellow-700">Tồn kho</div>
            <div className="mr-2 text-yellow-700">Món thêm</div>
          </div>
        </div>
        <div className="px-8 py-4 text-2xl text-yellow-700 " id={id}>
          {tenHang}
        </div>
        <div className="  flex  items-center px-8   gap-20  ">
          <div className="w-[350px] h-[350px] object-cover">
            <img
              src={hinhAnh}
              alt="product"
              className="w-full h-full object-cover rounded-bl-3xl rounded-br-3xl rounded-tr-3xl rounded-tl-3xl"
            />
          </div>

          <div>
            <div className="bigger-text ">Mã hàng hoá: {maHangHoa}</div>
            <div className="bigger-text mt-5">Loại thực đơn: {loai}</div>
            <div className="bigger-text mt-5">Nhóm hàng: {nhomHang}</div>
            <div className="bigger-text mt-5 ">Giá vốn: {giaVon}</div>
            <div className="bigger-text mt-5 ">Giá bán: {giaBan}</div>
          </div>
        </div>
        <div className="flex items-center justify-end mt-10 py-2 px-4 gap-2">
          <button
            type="button"
            onClick={onShowUpdateForm}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            Cập Nhật
          </button>

          {showUpdateForm && (
            <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              {" "}
              <UpdateProductForm
                onSubmitHandler={handleSubmit}
                onHandleCloseForm={onHandleCloseForm}
                onChangeFile={handleFileChange}
                previewImage={previewImage}
                setPreviewImage={setPreviewImage}
                uploading={uploading}
                dishInfo={dishInfo}
              />{" "}
            </div>
          )}

          <button
            type="button"
            onClick={() => onHandleDelete(id)}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          >
            Xoá
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
