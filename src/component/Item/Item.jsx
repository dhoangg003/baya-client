import React from "react";

const Item = ({
  _id,
  tenHang,
  nhomHang,
  loai,
  giaBan,
  giaVon,
  hinhAnh,
  onAddToCart,
}) => {
  return (
    <div
      id={_id}
      className="p-4 w-auto rounded-lg shadow-md bg-white text-black border border-solid border-yellow-700  "
    >
      <img
        src={hinhAnh}
        alt={tenHang}
        className=" object-cover mb-4 rounded-lg w-48 h-52 "
      />
      {/* nếu muốn chiếm 2 hàng : line-clamp-2 h-[4.5rem]*/}
      <h3 className="text-xl mt-0 font-semibold  ">
        {tenHang}
      </h3>
      <p className="text-gray-600 mb-2 ">{nhomHang}</p>
      <div className="flex justify-between">
      <div>
  <div className="block text-yellow-700 font-bold line-through mb-2">{giaVon}</div>
  <div className="block text-yellow-700 font-bold">{giaBan}</div>
</div>


        <button
          type="submit"
          className=" bg-white border border-solid border-yellow-700 "
          onClick={() => onAddToCart(_id)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Item;
