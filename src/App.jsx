import React from 'react';
import ReferModal from './components/ReferModal';
import { ModalProvider } from './context/ModalContext';
import NavSection from './components/NavSection';
import ReferSection from './components/ReferSection';
import FooterSection from './components/FooterSection';
import './App.css';
 
const App = () => {
  return (
      <ModalProvider>
         <NavSection/>
        <ReferSection />
        <FooterSection/>
        <ReferModal />
     </ModalProvider>
  );
};
export default App;
