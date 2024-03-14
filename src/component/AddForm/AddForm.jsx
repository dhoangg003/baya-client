import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTypeMenu } from "../../redux/TypeMenu/typeMenuAction";
import TypeMenuApi from "../../services/typeMenuAPI";
const AddForm = ({ closeMenuType }) => {
  const [typeMenu, setTypeMenu] = useState("");
  const [loading, setLoading] = useState(false);
  const onHandleChange = (e) => {
    setTypeMenu(e.target.value);
  };
  const dispatch = useDispatch();
  const onHandleSubmit = async () => {
    try {
      setLoading(true);
      const newTypeMenu = {
        loaiThucDon: typeMenu,
      };
      console.log("newTypeMenu", newTypeMenu);
      const response = await TypeMenuApi.create(newTypeMenu);
      console.log("menuType", response.data);
      dispatch(fetchTypeMenu());

      closeMenuType();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="col-span-2 bg-white on p-2 rounded on ">
        <label
          htmlFor="loaiThucDon"
          className="block text-sm font-medium leading-6"
        >
          Nhập nội dung
        </label>

        <input
          type="text"
          name="loaiThucDon"
          id="loaiThucDon"
          value={typeMenu}
          onChange={onHandleChange}
          autoComplete="family-name"
          className="block w-full rounded-md border-0 py-1.5 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />

        <div className="mt-6 mb-6  flex items-center justify-end gap-x-6">
          <button
            type="button"
            onClick={closeMenuType}
            className="text-sm font-semibold leading-6"
          >
            Hủy
          </button>
          <button
            type="button"
            onClick={onHandleSubmit}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Thêm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
