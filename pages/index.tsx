import Head from 'next/head'
import Link from 'next/link'

import HomeBanner from "../components/Home/HomeBanner"
import HomeSolution from "../components/Home/HomeSolution"
import ExclusiveProducts from "../components/Home/ExclusiveProducts"
import SphereOfActivity from "../components/Home/SphereOfActivity"
import HomeCommentSlider from "../components/Home/HomeCommentSlider"
import HomePosts from "../components/Home/HomePosts"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Môi Trường T&T</title>
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
      <div>
        <div className="home_comment">
          <HomeCommentSlider />
        </div>
        <div className="home_background_posts">
          <div className="home_posts">
            <HomePosts />
          </div>
        </div>
      </div>
    </div>
  )
}
