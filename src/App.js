import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router';
import MainPageEn from './Pages/MainPageEn'
import MainPagePT from './Pages/MainPagePT'
import Language from './Provider/Language';
import AboutEn from './Pages/AboutEn';
import AboutPT from './Pages/AboutPT';
import ContactEn from './Pages/ContactEn';
import ContactPT from './Pages/ContactPT';
import ProjectEn from './Pages/ProjectEn';
import ProjectDetail from './Pages/ProjectDetail';
import ProjectPt from './Pages/ProjectPt';
import ProjectDetailPT from './Pages/ProjectDetailPT';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Language>
          <Routes>
            <Route path="/projects/:id/pt" element={<ProjectDetailPT />} />
            <Route path="/projects/pt" element={<ProjectPt />} />
            <Route path="/contact/pt" element={<ContactPT />} />
            <Route path="/about/pt" element={<AboutPT />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/pt" element={<MainPagePT />} />
            <Route path="/about" element={<AboutEn />} />
            <Route path="/contact" element={<ContactEn />} />
            <Route path="/projects" element={<ProjectEn />} />
            <Route path="/" element={<MainPageEn />} />


          </Routes>
        </Language>
      </BrowserRouter>
    </div>
  )
}
