import OneClass from "../oneClass/OneClass"
import "./class.css"
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import { Class } from "../../pages/dummyData";
import { useEffect, useRef, useState } from "react";
import axios from "axios"
import { dellClass } from "../oneClass/OneClass";



export default function Classes() {
    const [classes,setClasses] = useState([]);
    const cn = useRef()

    useEffect(()=>{
        const fetchClasses = async() =>{
            const res = await axios.get("class/user/all/612bfdc880c6f9b0b82fcdb5");
            console.log(res);
            setClasses(res.data);
        }
        fetchClasses();
    },[])

    function showClass(){
        const targetDiv = document.getElementById("hide");
        console.log("a mers dellClass");
        if (targetDiv.style.display !== "none") {
            targetDiv.style.display = "none";
          } else {
            targetDiv.style.display = "inline-block";
    }}

    const addClass = async()=>{
        //e.preventDefault();
        console.log(cn.current.value);
        const newClass = {
            "className": cn.current.value,
            "classCode":"7",
            "userId":"612bfdc880c6f9b0b82fcdb5",
        }
        try{
            await axios.post("/class",newClass)
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className="allClasses">
            <div className="buttons">
                <div className="buttonsBox">
                    <div className="classOption">
                        <AddIcon htmlColor="red" onClick={addClass} className="classOptionIcon"/><input ref={cn}  className="classOptionText" placeholder="Enter Class Name"/>
                    </div>
                    <div className="classOption">
                        <SearchIcon onClick={showClass} className="classOptionIcon"/><input  className="classOptionText" placeholder="join a class"/>
                    </div>
                </div>
            </div>
           <div className="classWrapper">
               {classes.map(c=>(
                <OneClass key={c._id} classComponent={c} />
                
               ))}
           </div>
        </div>
    )
}
 