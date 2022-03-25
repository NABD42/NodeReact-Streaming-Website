import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers:{
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2RlMTAzOTUyOWRlNDNhNDNjNjdjOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODIyMjU2OSwiZXhwIjoxNjQ4NjU0NTY5fQ.XwyDGpIdj77ivJfXeAI6sDwB22HwWhFI5iNP4Gr-e_Q"
            }
          }
        );
       console.log(res); 
      //setLists(res.data);
      }catch(err){
        console.log(err);
      }
    };
    getRandomLists();
  },[type, genre]);
  

  return (
    <div className="home">
        <Navbar/>
        <Featured type={type}/>
        {lists.map((list) => (
          <List list={list}/>
        ))}
    </div>
  )
};

export default Home;