import React from 'react'
import {useLocation, Routes, Route} from 'react-router-dom';
import Me from '../me/Me';
import Home from '../home/Home';
import About from '../about/About';
import ContactDuplikat from '../contact/ContactDuplikat';
import Project from '../project/Project';
import Email from '../email/Email';
import Send from '../sendmail/Send';

import { AnimatePresence } from 'framer-motion';

const Animated = () => {
    const location = useLocation();

  return (
    <AnimatePresence>
         <Routes location={location} key={location.pathname}>
            <Route exact path="/profile-web" element={<><Home /><About /><Email /><Send /></>}/>
            <Route path="/me" element={<Me />} />
            <Route path="/contact" element={<ContactDuplikat />} />
            <Route path="/project" element={<Project />} />
        </Routes>
    </AnimatePresence>
  )
}

export default Animated