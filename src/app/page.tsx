import React from 'react'
import Header from '../components/Header';
import Hero from '@/components/Hero';
import Latest from '@/components/Latest';

type Props = {}

function page({}: Props) {
  return (
    <>
      <Header />
      <Hero />
      <Latest/>
    </>
  )
}

export default page