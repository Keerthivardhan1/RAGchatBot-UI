import React, { useEffect, useState } from "react";
import loginimg1 from "../assets/loginimg1.svg";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({});
  const [selectedRole, setSelectedRole] = useState("Admin");
  const [inputFields, setInputFields] = useState([]);
  const [errors, setErrors] = useState({}); // <-- error state
  const OPTIONS = ["Admin", "Customer", "User"];
  const USER_FORM_FIELDS = ["user_name", "user_email", "user_password"];
  const ADMIN_FORM_FIELDS = ["admin_name", "admin_email", "admin_password"];
  const CUSTOMER_FROM_FIELDS = [
    "customer_name",
    "customer_email",
    "customer_password",
  ];
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRadio = (e) => {
    setSelectedRole(e.target.value);
  };

  useEffect(() => {
    if (selectedRole === "Admin") {
      setInputFields(ADMIN_FORM_FIELDS);
    } else if (selectedRole === "Customer") {
      setInputFields(CUSTOMER_FROM_FIELDS);
    } else {
      setInputFields(USER_FORM_FIELDS);
    }
    setUser({});
    setErrors({});
  }, [selectedRole]);

  const handleFormChange = (e) => {
    setUser((prevSt) => ({
      ...prevSt,
      [e.target.name]: e.target.value,
    }));

    setErrors((prevErr) => ({
      ...prevErr,
      [e.target.name]: "",
    }));
  };

  const validateForm = () => {
    let tempErrors = {};
    inputFields.forEach((field) => {
      if (!user[field] || user[field].trim() === "") {
        tempErrors[field] = "This field is required";
      } else if (field.includes("email") && !/\S+@\S+\.\S+/.test(user[field])) {
        tempErrors[field] = "Invalid email format";
      } else if (field.includes("password") && user[field].length < 6) {
        tempErrors[field] = "Password must be at least 6 characters";
      }
    });
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    let username = "";
    for (let key in user) {
      if (key.includes("name")) {
        username = user[key];
      }
    }

    login(username, selectedRole);
    console.log(user);

  };

  return (
    <div className="flex gap-3 justify-between">
      <img src={loginimg1} alt="login" className="max-w-[50%]" />
      <div className="flex flex-col gap-3 min-h-[40%] m-auto max-w-[50%] rounded-2xl p-2">
        <h1 className="font-bold text-2xl text-center">Login Form</h1>

        <div className="flex gap-3 justify-center">
          {OPTIONS.map((option) => (
            <label
              key={option}
              className={`relative cursor-pointer px-2 py-1 transition-all duration-75 ${
                selectedRole === option ? "selectedOption" : ""
              }`}
            >
              <input
                type="radio"
                value={option}
                checked={selectedRole === option}
                onChange={handleRadio}
                name="role"
                className="hidden"
              />
              {option}
            </label>
          ))}
        </div>

        <h1 className="font-extrabold text-xl">{selectedRole}</h1>
        <div className="min-w-[30vw] max-w-sm overflow-x-hidden overflow-y-scroll max-h-[60vh]">
          {inputFields.map((field) => (
            <div className="mb-5" key={field}>
              <label
                htmlFor={field}
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                {`${field}`}
              </label>
              <input
                id={field}
                type={
                  field.includes("password")
                    ? "password"
                    : field.includes("email")
                    ? "email"
                    : "text"
                }
                name={field}
                value={user[field] || ""}
                onChange={handleFormChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              {errors[field] && (
                <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            onClick={handleLogIn}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;


