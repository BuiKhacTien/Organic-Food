import Head from 'next/head'
import Link from 'next/link'

import HomeBanner from "../components/Home/HomeBanner"
import HomeSolution from "../components/Home/HomeSolution"
import ExclusiveProducts from "../components/Home/ExclusiveProducts"
import SphereOfActivity from "../components/Home/SphereOfActivity"
import HomeCommentSlider from "../components/Home/HomeCommentSlider"



export default function Home() {
  return (
    <div>
      <Head>
        <title>Organic Food</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home_banner_solution">
        <div className='home_container'>
          <HomeBanner />
          <HomeSolution />
        </div>
      </div>
      <div className="home_exclusive_products">
        <div className='home_container'>
          <ExclusiveProducts />
          <SphereOfActivity />
        </div>
      </div>
      <div className="home_comment">
        <HomeCommentSlider />
      </div>
    </div>
  )
}
