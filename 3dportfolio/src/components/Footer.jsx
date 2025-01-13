import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 mt-16">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-accent">
          © {new Date().getFullYear()} XXXX. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
