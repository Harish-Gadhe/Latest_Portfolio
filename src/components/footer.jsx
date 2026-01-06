const Footer = () => {
  return (
    <footer className="py-6 text-center border-t border-gray-200 dark:border-gray-800">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Harish Gadhe. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
