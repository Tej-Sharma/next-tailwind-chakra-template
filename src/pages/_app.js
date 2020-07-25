import React from 'react';
import App from 'next/app';
import { ThemeProvider } from '@chakra-ui/core';
import '../assets/styles/tailwind.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
