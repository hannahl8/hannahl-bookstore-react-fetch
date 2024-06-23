import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import WelcomePage from "./pages/WelcomePage";
import CategoryPage from "./pages/CategoryPage";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import {useState, useEffect} from "react";
import {apiUrl} from "./utils.ts";
import axios from "axios";

export default function App() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`${apiUrl}/categories`)
            .then((result) => setCategories(result.data))
            .catch(console.error);
    }, []);

    return (
        <div className="app">
            <AppHeader categories={categories}/>
            <Routes>
                <Route path="/" element={<WelcomePage categories={categories}/>}/>
                <Route path="/category/:categoryName" element={<CategoryPage categories={categories}/>}/>
            </Routes>
            <AppFooter/>
        </div>
    );
}
