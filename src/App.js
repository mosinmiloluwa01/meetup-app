import { Route, Routes } from "react-router-dom";

import AllMeetups from "./pages/AllMeetups/AllMeetups";
import NewMeetups from "./pages/NewMeetup/NewMeetups";
import Favorites from "./pages/Favorites/Favorites";
import Layout from "./components/layout/Layout/Layout";
import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetups></AllMeetups>} />
        <Route path="/new-meetup" element={<NewMeetups></NewMeetups>} />
        <Route path="/favorites" element={<Favorites></Favorites>} />
      </Routes>
    </Layout>
  );
}

export default App;
