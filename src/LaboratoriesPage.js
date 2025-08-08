import React, { useState, useEffect } from "react";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownItems = [
    { label: "Thrust Area", key: "thrust-area", href: "#" },
    {
      label: "On Going Research Projects",
      key: "ongoing-research-projects",
      href: "#",
    },
    {
      label: "Completed Research Projects",
      key: "completed-research-projects",
      href: "#",
    },
    { label: "Joint Project", key: "joint-project", href: "#" },
    {
      label: "Important Laboratories",
      key: "important-laboratories",
      href: "/laboratories",
    },
    {
      label: "Departmental Committees",
      key: "departmental-committees",
      href: "#",
    },
    { label: "Alumni Relations", key: "alumni-relations", href: "#" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".dropdown-toggle") &&
        !e.target.closest(".dropdown-menu")
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <style>{`
        .amu-header-horizontal {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #ffffff;
          border-radius: 20px;
          padding: 12px 20px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          flex-wrap: wrap;
        }

        .amu-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .amu-left img {
          height: 45px;
        }

        .amu-title {
          font-weight: bold;
          font-size: 1.2em;
          color: #004d40;
        }

        .amu-nav {
          display: flex;
          gap: 16px;
          align-items: center;
          flex-wrap: wrap;
        }

        .amu-nav a, .dropdown-toggle {
          text-decoration: none;
          color: #004d40;
          font-weight: 600;
          font-size: 0.95em;
          cursor: pointer;
          transition: color 0.2s ease-in-out;
        }

        .amu-nav a:hover, .dropdown-toggle:hover {
          color: #00796b;
        }

        .dropdown-wrapper {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          background: white;
          border: 1px solid #ccc;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          padding: 10px;
          top: 100%;
          right: 0;
          z-index: 999;
          min-width: 250px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .dropdown-menu a {
          display: block;
          padding: 8px;
          color: #004d40;
          text-decoration: none;
          font-size: 14px;
          transition: background-color 0.2s ease-in-out;
        }

        .dropdown-menu a:hover {
          background: #e0f2f1;
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .amu-header-horizontal {
            flex-direction: column;
            align-items: flex-start;
            padding: 15px;
          }
          .amu-left {
            margin-bottom: 15px;
          }
          .amu-nav {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            width: 100%;
          }
          .amu-nav a, .dropdown-toggle {
            width: 100%;
            text-align: left;
            padding: 8px 0;
          }
          .dropdown-wrapper {
            width: 100%;
          }
          .dropdown-menu {
            position: static;
            width: 100%;
            box-shadow: none;
            border: none;
            padding: 0;
            margin-top: 5px;
            background: #f8f8f8;
          }
          .dropdown-menu a {
            padding-left: 15px;
          }
        }

        @media (max-width: 480px) {
          .amu-title {
            font-size: 1em;
            text-align: center;
            width: 100%;
          }
          .amu-left {
            flex-direction: column;
          }
          .amu-left img {
            height: 35px;
          }
        }
      `}</style>
      <header className="amu-header-horizontal">
        <div className="amu-left">
          <img
            src="https://amubuddy.com/wp-content/uploads/2023/06/amu-logo.jpg"
            alt="AMU Logo"
            className="amu-logo"
          />
          <span className="amu-title">Aligarh Muslim University</span>
        </div>
        <nav className="amu-nav">
          <a
            href="/"
            style={{
              color: "#004d40",
              textDecoration: "none",
              fontWeight: "600",
              cursor: "pointer",
              transition: "color 0.2s ease-in-out",
            }}
          >
            Home
          </a>
          <a
            href="/about"
            style={{
              color: "#004d40",
              textDecoration: "none",
              fontWeight: "600",
              cursor: "pointer",
              transition: "color 0.2s ease-in-out",
            }}
          >
            About
          </a>
          <a
            href="/programs"
            style={{
              color: "#004d40",
              textDecoration: "none",
              fontWeight: "600",
              cursor: "pointer",
              transition: "color 0.2s ease-in-out",
            }}
          >
            Programs
          </a>
          <a
            href="/faculty"
            style={{
              color: "#004d40",
              textDecoration: "none",
              fontWeight: "600",
              cursor: "pointer",
              transition: "color 0.2s ease-in-out",
            }}
          >
            Faculty
          </a>
          <a
            href="/contact"
            style={{
              color: "#004d40",
              textDecoration: "none",
              fontWeight: "600",
              cursor: "pointer",
              transition: "color 0.2s ease-in-out",
            }}
          >
            Contact
          </a>
          <div className="dropdown-wrapper">
            <span
              className="dropdown-toggle"
              onClick={() => setShowDropdown(!showDropdown)}
              style={{
                color: "#004d40",
                textDecoration: "none",
                fontWeight: "600",
                cursor: "pointer",
                transition: "color 0.2s ease-in-out",
              }}
            >
              Links ▼
            </span>
            {showDropdown && (
              <div className="dropdown-menu">
                {dropdownItems.map((item) => (
                  <a
                    href={item.href}
                    key={item.key}
                    style={{
                      display: "block",
                      padding: "8px",
                      color: "#004d40",
                      textDecoration: "none",
                      fontSize: "14px",
                      transition: "background-color 0.2s ease-in-out",
                    }}
                    onMouseEnter={(e) =>
                      Object.assign(e.target.style, {
                        backgroundColor: "#e0f2f1",
                        borderRadius: "4px",
                      })
                    }
                    onMouseLeave={(e) =>
                      Object.assign(e.target.style, {
                        backgroundColor: "transparent",
                        borderRadius: "0",
                      })
                    }
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>
      </header>
      <div className="amu-underline"></div>
    </>
  );
};

// The Footer component, now self-contained within this file.
const Footer = () => {
  return (
    <>
      <style>{`
        .amu-footer {
          background-color: #ffffff;
          color: #004d40;
          padding: 20px 0;
          margin-top: auto;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        }

        .footer-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .footer-logo {
          height: 50px;
        }

        .footer-text {
          font-size: 0.9em;
          line-height: 1.6;
          color: #004d40;
        }

        .footer-right {
          text-align: right;
          font-size: 0.85em;
          color: #004d40;
        }

        @media (max-width: 768px) {
          .amu-footer {
            padding: 15px 0;
          }
          .footer-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 0 15px;
          }
          .footer-left {
            flex-direction: column;
            gap: 10px;
            margin-bottom: 10px;
          }
          .footer-logo {
            margin-bottom: 5px;
          }
        }
      `}</style>
      <footer className="amu-footer">
        <div className="footer-container">
          <div className="footer-left">
            <p className="footer-text">
              &copy; {new Date().getFullYear()} Aligarh Muslim University. All
              Rights Reserved.
            </p>
          </div>
          <div className="footer-right">
            <p>Designed and Developed by Department of Computer Science</p>
            <p>Contact: info@amu.ac.in</p>
          </div>
        </div>
      </footer>
    </>
  );
};

// The Layout component, now self-contained within this file.
const Layout = ({ children }) => {
  return (
    <>
      <style>{`
        /* Global Styles (apply to the entire page body) */
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: #f7f8f6;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Main content area styling */
        .main-content-wrapper {
          flex-grow: 1;
          max-width: 1100px;
          margin: 20px auto;
          padding: 0 20px;
          width: 100%;
        }

        .amu-underline {
          height: 4px;
          background: #004d40;
          width: 100%;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          margin-bottom: 20px;
        }
      `}</style>
      <Header />
      <main className="main-content-wrapper">{children}</main>
      <Footer />
    </>
  );
};

// The LaboratoriesPage component, now self-contained within this file.
const LaboratoriesPage = () => {
  const laboratories = [
    {
      name: "Multimedia & Web Technology Lab",
      description:
        "Equipped with advanced multimedia systems and web servers. Provides a hands-on environment for web application development, graphics, video processing, and more.",
    },
    {
      name: "Database & Software Engineering Lab",
      description:
        "Dedicated to providing a practical environment for database management, software development life cycle methodologies, and object-oriented programming concepts.",
    },
    {
      name: "Operating System & Computer Networks Lab",
      description:
        "Supports hands-on experience in the working of various operating systems like Linux, network administration, network security, and cryptography.",
    },
    {
      name: "General Purpose Computer Lab",
      description:
        "Primarily used for practical work in C/C++ programming, data structures, and a wide range of other general computing and programming assignments.",
    },
    {
      name: "Research & Project Lab",
      description:
        "A specialized lab providing a dedicated space for students to work on their final year projects, research papers, and thesis, equipped with high-end systems and specific software.",
    },
  ];

  return (
    <Layout>
      <style>{`
        .laboratories-container {
          max-width: 100%;
          padding: 20px;
        }
        .laboratories-title {
          font-size: 2rem;
          font-weight: bold;
          color: #004d40;
          text-align: center;
          margin-bottom: 2rem;
        }
        .lab-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }
        .lab-card {
          background-color: #ffffff;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }
        .lab-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
        }
        .lab-name {
          font-size: 1.25rem;
          font-weight: bold;
          color: #004d40;
          margin-bottom: 10px;
        }
        .lab-description {
          font-size: 1rem;
          color: #333333;
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .laboratories-title {
            font-size: 1.8rem;
          }
        }
        @media (max-width: 600px) {
          .lab-list {
            grid-template-columns: 1fr;
          }
          .laboratories-title {
            font-size: 1.5rem;
          }
          .lab-card {
            padding: 20px;
          }
          .lab-name {
            font-size: 1.1rem;
          }
          .lab-description {
            font-size: 0.95rem;
          }
        }
      `}</style>
      <div className="laboratories-container">
        <h1 className="laboratories-title">Important Laboratories</h1>
        <div className="lab-list">
          {laboratories.map((lab, index) => (
            <div key={index} className="lab-card">
              <h2 className="lab-name">{lab.name}</h2>
              <p className="lab-description">{lab.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

const App = () => {
  return <LaboratoriesPage />;
};

export default App;
