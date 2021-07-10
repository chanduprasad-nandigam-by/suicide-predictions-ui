import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { SuicideForm } from './SuicideForm';

export const App : React.FC = () => <ChakraProvider>
  <SuicideForm/>
</ChakraProvider>
