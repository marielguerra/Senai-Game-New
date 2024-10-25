import Onboarding from '@/components/Onboarding'
import { Stack, router } from 'expo-router'
import React from 'react'


const index = () => {
  return (
    <>
    <Stack.Screen options={{headerShown: false}}/>
    <Onboarding 
        caminho_imagem='Trust'
        texto='Trusted by millions of people, part of one part'
        proxima_pagina={()=>router.push('/second-')}
    ></Onboarding>
    </>
    
  )
}


export default index