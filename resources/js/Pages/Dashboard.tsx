// src/App.tsx
import React, { useEffect, useState } from 'react';
import Theme from '@/Themes';
import Main from './Dashboard/Main';

const App: React.FC = () => {

  return (
    <Theme>
        <Main/>
    </Theme>
  );
};

export default App;
