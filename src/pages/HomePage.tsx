import style from "./styles/Homepage.module.css";
import { Link } from "react-router-dom";
import image from "../assets/FMS-logo-photoaidcom-cropped.png";
import sideImage from "../assets/side-image.png";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const navigateToOptionsPage = () => {
    navigate("/options");
  };
  return (
    <div className={style.parentDiv}>
      <div className={style.container}>
        {/* LEFT: Company name + logo */}
        <div className={style.companyNameWithLogo}>
          <img src={image} alt="FMS Logo" />
          <Link to="/" className={`${style.navLink} ${style.companyName}`}>
            FMS
          </Link>
        </div>

        {/* RIGHT: Nav links + buttons */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <nav className={style.navbar}>
            <Link to="/home" className={style.navLink}>
              Home
            </Link>
            <Link to="/dashboard" className={style.navLink}>
              Dashboard
            </Link>
          </nav>
          <div className={style.buttonContainer}>
            <span>Login</span>
            <button>Sign up</button>
          </div>
        </div>
      </div>

      <div className={style.contentSection}>
        <div className={style.bodyDiv}>
          <p className={style.highlight}>Welcome to FMS</p>
          <p className={style.mainText}>
            Effortlessly manage, upload, create, and organize all your important
            documents in one convenient place. With our intuitive interface, you
            can easily upload files, create folders, and add detailed
            descriptions, keeping your digital workspace clutter-free and highly
            organized. Whether you need to view or permanently delete files,
            every action is just a few clicks away, making it easier than ever
            to stay productive.
          </p>
          <button className={style.bodyButton} onClick={navigateToOptionsPage}>
            Get Started
          </button>
        </div>

        {/* Bottom content - Upload files Section */}
        <div className={style.bottomContent}>
          <div className={style.bottomImageDiv}>
            <img
              src={sideImage}
              alt="Side Visual"
              className={style.bottomImage}
            />
          </div>
          <div className={style.uploadTextSection}>
            <p className={style.highlight}>Upload Files</p>
            <p className={style.mainText}>
              Seamlessly upload files from your device into the system with a
              simple file selection process. The interface allows you to browse
              and upload various file types efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
