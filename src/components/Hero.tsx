import React from 'react'
import { client } from '../../sanity/lib/client'
import Image from 'next/image'
import { urlForImage } from '../../sanity/lib/image'


type Props = {}

async function getImage() {
    const query = "*[_type == 'heroImage'][0]"
    const data = await client.fetch(query)

    return data
}

const Hero = async (props: Props) => {
    const data = await getImage()
   
  return (
    <section className="mx-auto max-w-2xl px-4 sm: pb-6 lg:max-w-7xl lg:px-8">
    <div className="mb-8 flex flex-wrap justify-between md:mb-16">
    <div className="mb-4 flex w-full flex-col justify-center lg:mb-0 lg:w-1/3 ">
    <h1 className="mb-4 text-4xl tracking-tighter font-bold text-primary md:mb-8">
    Style Redefined.. <br/> Stay On Budget & Stay In Vogue!
    </h1>
    <p className="max-w-md leading-relaxed text-muted-foreground xl: text-lg">
    We sell only the most exclusive and high quality products for you.
    Elevate your wardrobe with our fashion-forward pieces that make a statement without breaking the bank. 
    </p>
    </div>
          <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
              <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
              <Image alt="hero images" src={ urlForImage(data.secondaryImage).url() } width={ 300 } height={ 300}  className='h-full w-full object-cover object-center '/>
</div>
<div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                  <Image alt="hero images" src={ urlForImage(data.primaryImage).url() } className='h-full w-full object-cover object-center ' width={ 300 } height={ 300 } />
                  </div>
              </div>
              </div>
    </section>
  )
}

export default Hero