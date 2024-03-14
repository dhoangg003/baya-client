import * as yup from "yup";

const addProduct = yup.object().shape({
  maHangHoa: yup.string(),
  tenHang: yup.string().required("Vui lòng điền đầy đủ thông tin"),
  //   nhomHang: yup.string().required("Vui lòng điền đầy đủ thông tin"),
  //   loai: yup.string().required("Vui lòng điền đầy đủ thông tin"),
  giaBan: yup.string().required("Vui lòng điền đầy đủ thông tin"),
  giaVon: yup.string().required("Vui lòng điền đầy đủ thông tin"),
});
const updateProduct = yup.object().shape({
  maHangHoa: yup.string(),
  tenHang: yup.string().required("Vui lòng điền đầy đủ thông tin"),
  //   nhomHang: yup.string().required("Vui lòng điền đầy đủ thông tin"),
  //   loai: yup.string().required("Vui lòng điền đầy đủ thông tin"),
  giaBan: yup.string().required("Vui lòng điền đầy đủ thông tin"),
  // giaVon: yup.string().required("Vui lòng điền đầy đủ thông tin"),
});

const productValidationSchema = {
  addProduct,
  updateProduct,
};

export default productValidationSchema;
