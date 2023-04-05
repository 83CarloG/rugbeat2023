import Logo from "../img/Rugbeat_Logo_Ananas_Data.svg";

const Header = () => {
  return (
    <header>
      <div className="footer-logo">
        <img src={Logo} alt="Festival Rugby logo" />
      </div>
      <div className="footer-social">
        <ul>
          <li>
            <a href="https://www.facebook.com/festivalrugby">
              <i className="fa-regular fa-envelope fa-2xl"></i>
              <span className="sr-only">Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/festivalrugby">
              <i className="fa-brands fa-instagram fa-2xl"></i>
              <span className="sr-only">Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
