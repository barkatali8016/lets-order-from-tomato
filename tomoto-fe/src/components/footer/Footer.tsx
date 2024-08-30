import Logo from "../utility/Logo/Logo";
import "./footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Logo />

        <hr />
        <p className="all-right-reserve">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2024 © Tomato™ Ltd. All
          rights reserved.{" "}
        </p>
      </div>
    </footer>
  );
}
