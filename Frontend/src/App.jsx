import React from "react";
import Navbar from "./Components/Navbar";
import { useLocation, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import AllRoom from "./pages/AllRoom";
import RoomDetails from "./pages/RoomDetails";
import MyBookings from "./pages/MyBookings";
import HotelReg from "./Components/HotelReg";
import Layout from "./pages/hotelOwner/Layout";
import Listroom from "./pages/hotelOwner/Listroom";
import AddRoom from "./pages/hotelOwner/AddRoom";

import Dashboard from "./pages/hotelOwner/Dashboard";
import { Toaster } from "react-hot-toast";
import { useAppContext } from "./context/AppContext";
const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  const { showHotelReg } = useAppContext();

  return (
    <>
      <div>
        <Toaster />
        {!isOwnerPath && <Navbar />}
        {showHotelReg && <HotelReg />}
        <div className="min-h-[70vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<AllRoom />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/owner" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="add-room" element={<AddRoom />} />
              <Route path="list-room" element={<Listroom />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;

//usee prebuiltUI
