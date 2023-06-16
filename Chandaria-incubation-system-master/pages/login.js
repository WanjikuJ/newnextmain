import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";

export default function contactUs() {
  return (
    <div>
      <Meta title="Inovators Login" />
      <NavBar />
      <br />

      <LoginForm />

      <Footer />
    </div>
  );
}
