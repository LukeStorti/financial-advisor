const Footer = () => {
  return (
    <footer className="bg-muted px-8 h-14 flex flex-col sm:flex-row items-center justify-evenly py-2">
      <h4>Financial Advisor</h4>
      <h4>Copyright {new Date().getFullYear()}</h4>
    </footer>
  );
};

export default Footer;
