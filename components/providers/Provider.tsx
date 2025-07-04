"use client";

import { ThemeProvider } from "next-themes";
import React, { ReactNode } from 'react';


interface ProviderProps {
  children: ReactNode;
}

export default function Provider({ children }: ProviderProps) {
  return <ThemeProvider attribute="class" defaultTheme="system" enableSystem>{children}</ThemeProvider>;
}