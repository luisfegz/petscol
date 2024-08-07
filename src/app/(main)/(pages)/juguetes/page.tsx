import Navbar from '@/components/global/Navbar'
import { LampComponentJuguete } from '@/components/global/lampJuguete'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <main className="flex items-center justify-center flex-col">
        <Navbar />
        <section className="w-full mt-0 inset-0 h-screen">
          <LampComponentJuguete />
        </section>
      </main>
    </>
  )
}

export default page