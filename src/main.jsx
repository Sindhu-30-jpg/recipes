import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Insta from "./insta.jsx";
//import Items from "./functional_components/items.jsx";//
import Counterapp from "../class components.jsx";
import Counter from "./assets/functional_components/counter.jsx";
import Customnavbar from "./assets/functional_components/customnavbar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Customcarousels from "./assets/functional_components/customcarousels.jsx";
import Getproducts from "./assets/functional_components/getproducts.jsx";


const items = [
  {
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtXTTFRJAnCB6MJjV2h_ObwX8bCbkBRzYZvdjI-87ms_7MHrde77nWTjo5&s=10",
    username: "sruthi",
    followers: 1200,
    following: 350,
  },
  {
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxV7_ow2dhE3e9EcIZuSS6-N51e7htliuU64bPUVWScJpb6D8YPztzpC6R&s=10",
    username: "sindhu",
    followers: 2500,
    following: 420,
  },
  {
    profile: "https://wallpaperaccess.com/full/9460165.jpg",
    username: "thriveni",
    followers: 5600,
    following: 600,
  },
 
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Customnavbar></Customnavbar>
    <Customcarousels></Customcarousels>
    <Getproducts></Getproducts>
    {/* <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {items.map((user) => (
        <Insta
          key={user.username}
          profile={user.profile}
          username={user.username}
          followers={user.followers}
          following={user.following}
        />
      ))}
    </div> */}
{/* 
    <Items></Items>  */}
    {/* <Counter/> */}
  </StrictMode>
);
