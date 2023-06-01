import React, { ReactNode } from 'react';

import { Wrapper } from "./LayoutStyles";


export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}