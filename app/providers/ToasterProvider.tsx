'use client'; 

import React from 'react'
import { Toaster } from 'react-hot-toast';


// we have to have toasterProvider be the client parent to allow toaster to work because its a foreign package for next.js
const ToasterProvider = () => {
  return (
    <Toaster />
  );
}

export default ToasterProvider;