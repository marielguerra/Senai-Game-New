import Onboarding from '@/components/Onboarding'
import { Stack, router } from 'expo-router'
import React from 'react'

const Onbordiang2 = () => {
  return (
    <>
    <Stack.Screen options={{headerShown: false}}/>
    <Onboarding 
        caminho_imagem='Lupa'
        texto='Spend money abroad, and track your expense'
        proxima_pagina={()=>router.push('/third')}
    ></Onboarding>
    </>
    
  )
}

export default Onbordiang2