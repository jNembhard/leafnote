import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright ⓒ Jason Nembhard {year}</p>
    </footer>
  );
}

export default Footer;
