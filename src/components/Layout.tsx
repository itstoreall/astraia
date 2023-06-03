const Layout = ({ children }: any) => {
  // Logic for your layout component, e.g., header, footer, etc.
  return (
    <div>
      <header>Header L</header>
      <main>{children}</main>
      <footer>Footer L</footer>
    </div>
  );
};

export default Layout;
