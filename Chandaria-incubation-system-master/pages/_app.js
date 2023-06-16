
import "../styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-gradient-to-tr from-cyan-50/25 to-white'>
  
      <Component {...pageProps} />


    </div>
  );
}

export default MyApp;
