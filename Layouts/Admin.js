import Footer from '../components/Footers/Footer'
import HeaderAdmin from '../components/Headers/HeaderAdmin';
import Navigation from '../components/Headers/Navigation';



const Admin = ({ children }) => {
  return (
    <>
      <HeaderAdmin />
      <Navigation />
      <p>여긴 admin 페이지!!</p>
      {children}
      <Footer />
    </>
  );
};

export default Admin;
