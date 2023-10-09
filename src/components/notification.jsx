import { toast } from "react-toastify";

const notify = (type, text) => {
  if (type === "error") {
    toast.error(text, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
};
export { notify };
