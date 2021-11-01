import Topbar from "../../components/topbar/Topbar";
import OneTest from "../OneTest/OneTest";
import "./test.css"


export default function Tests() {
    return (
        <>
        <Topbar/> 
        <div className="testContainer">
            <div className="testLeft">

            </div>

             <div className="testWrapper">
                 <ul className="testList">
                    <li >
                        <OneTest />
                    </li>
                    <li>
                        <OneTest />
                    </li>
                    <li>
                        <OneTest />
                    </li>
                    <li>
                        <OneTest />
                    </li>
                    <li>
                        <OneTest />
                    </li>
                 </ul>
             </div>
             
            <div className="testRight">
                
                </div>
        </div>
        </>
    );
}
