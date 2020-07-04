import React from "react";
import { ToastContainer, toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";

function Alert() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnVisibilityChange
      draggable
      pauseOnHover
    />
  );
}

function InsertSucces() {
  return toast.info("✅ Employee saved", {
    position: "top-right",
    autoClose: "5000",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}

function DeleteSucces() {
  return toast.warning("Employee Deleted", {
    position: "top-right",
    autoClose: "5000",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}

function UpdateSuccess() {
  return toast.dark("🚀 Updated Employee ", {
    position: "top-right",
    autoClose: "5000",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}

function ErrorAlert() {
  return toast.error("🙆An error occured ", {
    position: "top-right",
    autoClose: "5000",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}

export { Alert, UpdateSuccess, InsertSucces, ErrorAlert, DeleteSucces };
