import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Headerbar from "./components/Headerbar";
import Login from "./components/Login";
import SubOption1 from "./components/Sub-Option1";
import SubOption2 from "./components/Sub-Option2";
import SubOption3 from "./components/Sub-Option3";
import SubOption4 from "./components/Sub-Option4";
import SubOption5 from "./components/Sub-Option5";
import Option2SubOption1 from "./components/Option2SubOption1";
import Option2SubOption2 from "./components/Option2SubOption2";
import Option2SubOption3 from "./components/Option2SubOption3";
import Option2SubOption4 from "./components/Option2SubOption4";
import Option2SubOption5 from "./components/Option2SubOption5";
import Option3SubOption1 from "./components/Option3SubOption1";
import Option3SubOption2 from "./components/Option3SubOption2";
import Option3SubOption3 from "./components/Option3SubOption3";
import Option3SubOption4 from "./components/Option3SubOption4";
import Option3SubOption5 from "./components/Option3SubOption5";
import "./index.css";

const Welcome = () => (
  <div>
    <h1>Welcome</h1>
    <p>The sidebar slides perfectly now. Click a menu item to change the content.</p>
  </div>
);

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeComponent, setActiveComponent] = useState("Welcome"); // Default view after login
  const [user, setUser] = useState(null); // No user logged in initially
  const [loginError, setLoginError] = useState('');

  const handleLogin = (userId, password) => {
    // In a real app, this would be an API call
    if (password === "1234") {
      if (userId === "option") {
        setUser({ id: userId, role: 'admin' }); // Admin user with access to all
        setLoginError('');
        setActiveComponent("Welcome"); // Reset to welcome page on login
        return;
      }
      if (userId === "option1" || userId === "option2" || userId === "option3") {
        setUser({ id: userId, role: userId });
        setLoginError('');
        setActiveComponent("Welcome"); // Reset to welcome page on login
        return;
      }
    }
    setLoginError("Invalid User ID or Password.");
  };

  const handleLogout = () => {
    setUser(null);
  };

  // If no user is logged in, show the Login page
  if (!user) {
    return <Login onLogin={handleLogin} error={loginError} />;
  }

  // --- Logged-in View ---
  const renderComponent = () => {
    switch (activeComponent) {
      case "Sub-Option1":
        return <SubOption1 />;
      case "Sub-Option2":
        return <SubOption2 />;
      case "Sub-Option3":
        return <SubOption3 />;
      case "Sub-Option4":
        return <SubOption4 />;
      case "Sub-Option5":
        return <SubOption5 />;
      case "Option2SubOption1":
        return <Option2SubOption1 />;
      case "Option2SubOption2":
        return <Option2SubOption2 />;
      case "Option2SubOption3":
        return <Option2SubOption3 />;
      case "Option2SubOption4":
        return <Option2SubOption4 />;
      case "Option2SubOption5":
        return <Option2SubOption5 />;
      case "Option3SubOption1":
        return <Option3SubOption1 />;
      case "Option3SubOption2":
        return <Option3SubOption2 />;
      case "Option3SubOption3":
        return <Option3SubOption3 />;
      case "Option3SubOption4":
        return <Option3SubOption4 />;
      case "Option3SubOption5":
        return <Option3SubOption5 />;
      default:
        return <Welcome />;
    }
  };

  return (
    <div>
      <Headerbar onToggleSidebar={() => setIsOpen(!isOpen)} onLogout={handleLogout} user={user} />

      <Sidebar isOpen={isOpen} onNavigate={setActiveComponent} user={user} />

      <div className={isOpen ? "content shifted" : "content"}>
        {renderComponent()}
      </div>
    </div>
  );
}
