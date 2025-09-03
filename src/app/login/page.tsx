import Footer from "@/components/elements/Footer";
import Header from "@/components/elements/Header";
import Login from "@/components/elements/Login";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Login />
      </main>
      <Footer />
    </div>
  );
};

export default RegisterPage;
