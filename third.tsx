import Onboarding from '@/components/Onboarding'
import { Stack, router } from 'expo-router'
import React from 'react'

const third = () => {
  return (
    <>
    <Stack.Screen options={{headerShown: false}}/>
    <Onboarding 
        caminho_imagem='Celular'
        texto='Receive Money 
        From Anywhere In 
        The World'
        proxima_pagina={()=>router.push('/explore')}
    ></Onboarding>
    </>
  )
}

export default third