import "./oneClass.css"
import { useEffect, useState } from "react";
import axios from "axios";

export function dellClass(){
    const targetDiv = document.getElementById("hide");
    console.log("a mers dellClass");
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
      } else {
        targetDiv.style.display = "inline-block";
}
}

export default function OneClass({classComponent}) { 
    console.log(classComponent);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user,setUser] = useState({});

    useEffect(()=>{
        const fetchUser = async() =>{
            const res = await axios.get(`user/${classComponent.userId}`);
            console.log(res);
            setUser(res.data);
        }
        fetchUser();
    },[])

    console.log(localStorage["id"]);
   
    const deleteClass = async (e) =>{
        e.preventDefault();
        console.log(classComponent._id);
        const newClass = {
            "id": classComponent._id,
            "userId":"612bfdc880c6f9b0b82fcdb5",
        }
        try{
            await axios.delete("/class/"+classComponent._id,newClass)
        }catch(err){
            console.log(err);
        }
    }
    
    return (
        <div className="oneClass" id="hide">
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"/>
            <script src="https://kit.fontawesome.com/f51dada446.js" crossOrigin="anonymous"></script>
           <div className="oneClassWrapper">
            <div className="oneClassTop">
                    <div type="text" className="classTitle">{classComponent.className}</div>
                    <div className="imgDiv">
                        <img className="oneClassPicture" src={classComponent.classPicture || PF+"avatar.jpg"} alt=""></img>
                    </div>
                </div> 

                <hr className="oneClassHr"></hr>
                
                <div className="oneClassMiddle">
                    <div className="desc"></div>
                </div>

                <hr className="oneClassHr"></hr>


                <div className="oneClassBottom">
                <div className="classCode">class code: {classComponent.classCode}</div>
                    <form className="buttonForm" onSubmit={deleteClass} >
                        <button type="submit" className="buttonClass">Delete</button>
                    </form>

            </div>
           </div>
        </div>
    )


}
