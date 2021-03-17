import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../components/navbar.component';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import '../styles/mainPage.styles.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
