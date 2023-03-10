import Head from 'next/head'

import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import { Newsletter } from '@/components/Newsletter'
import { Heroimage } from '@/components/Heroimage'
import { Navigation } from '@/components/Navigation'

export default function Home() {
  return (
    <>
      <Head>
        <title>Shri Shantaveri Gopala Gowda</title>
        <meta
          name="description"
          content="A socialist politician who was thrice elected to Karnataka Vidhanasabha, the Legislative Assembly of Karnataka, in 1952, 1962 and 1967 "
        />
      </Head>
      <Navigation />
      {/* <Hero /> */}
      <Heroimage />
      {/* <Introduction /> */}
      {/* <NavBar /> */}
      {/* <TableOfContents /> */}
      {/* <Testimonial
        id="tommy-stroman-testimonial-1"
        author={{
          name: 'Tommy Stroman',
          role: 'Front-end developer',
          image: avatarImage1,
        }}
      >
        <p>
        </p>
      </Testimonial> */}
      {/* <Screencasts />
      <Testimonial
        id="gerardo-stark-testimonial-2"
        author={{
          name: 'Gerardo Stark',
          role: 'Creator of Pandemicons',
          image: avatarImage2,
        }}
      >
        <p>
          “I’ve tried to create my own icons in the past but quickly got
          frustrated and gave up. Now I sell my own custom icon sets online.”
        </p>
      </Testimonial>
      <Resources />
      <FreeChapters />
      <Pricing />
      <Testimonials />
      <Author /> */}
      {/* <Newsletter /> */}
      <Footer />
    </>
  )
}
