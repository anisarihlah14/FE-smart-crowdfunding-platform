import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Index';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import BuatCampaign from './pages/BuatCampaign';
import CampaignSaya from './pages/CampaignSaya';
import DetailCampaign from './pages/DetailCampaign';
import PengaturanSistem from './pages/PengaturanSistem';
import RiwayatDonasi from './pages/RiwayatDonasi';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/buat-campaign" element={<BuatCampaign />} />
        <Route path="/campaign-saya" element={<CampaignSaya />} />
        <Route path="/detail-campaign" element={<DetailCampaign />} />
        <Route path="/pengaturan-sistem" element={<PengaturanSistem />} />
        <Route path="/riwayat-donasi" element={<RiwayatDonasi />} />
      </Routes>
    </Router>
  );
}

export default App;
