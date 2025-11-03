import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderBar from "./HeaderBar";
import Video from "./Video";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HeaderBar />} />
                <Route path="/video/:id" element={<Video />} />
            </Routes>
        </Router>
    );
}
