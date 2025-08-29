import Footer from "@/components/elements/Footer";
import Header from "@/components/elements/Header";
import Register from "@/components/elements/Register";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Register />
      </main>
      <Footer />
    </div>
  );
};

export default RegisterPage;
