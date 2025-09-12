import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Pricing14 from '../components/pricing14'
import Testimonial17 from '../components/testimonial17'
import Footer4 from '../components/footer4'
// import Product from '../components/product'
import './home.css'

const Home = () => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Rental Outdoor | Beranda</title>
        <meta property="og:title" content="Rental Outdoor" />
      </Helmet>

      {/* navbar */}
      <Navbar8/>
      {/* end navbar */}

      {/* hero17 */}
      <Hero17/>
      {/* end hero17 */}

      {/* feature24 */}
      <Features24/>
      {/* end feature24 */}

      {/* product */}
      {/* <Product/> */}
      {/* end product */}

      {/* pricing  */}
      <Pricing14/>
      {/* end pricing  */}

      {/* testimonial  */}
      <Testimonial17/>
      {/* end testimonial  */}
      
      {/* call to action  */}
      <CTA26/>
      {/* end call to action  */}

      {/* footer  */}
      <Footer4/>
      {/* end footer  */}

    </div>
  )
}

export default Home
