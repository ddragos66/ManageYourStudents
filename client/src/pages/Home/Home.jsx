import Topbar from "../../components/topbar/Topbar";
import Classes from "../../components/classes/Classes";
import "./home.css";
import { useEffect, useState } from "react";
import axios from "axios";


export default function home() {
    return (
        <>
        <Topbar/>
        <div  className="homeContainer">
        <Classes/>
        </div>
        
        </>
    );
}
