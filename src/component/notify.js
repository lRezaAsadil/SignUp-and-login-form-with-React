import { toast } from "react-toastify";
export const notify = (type, me) => {
  if (type === "s") {
    toast.success(me, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  } else {
    toast.error("Invalid data!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClic: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  }
};
