import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../components/navbar.component';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
