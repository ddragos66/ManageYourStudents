import "./oneTest.css"

export default function OneTest() {
    return (
        <div>
            <div className="testWrapperInside">
                    <div className="testTop">
                        <div className="testTitle">
                            aici e titlul
                    </div>
                    
                    <div className="testMiddle"></div>
                        <div className="testTimer">
                            aici e timer
                        </div>
                    </div>
                        <hr className="testHr"></hr>
                        <div className="testBottom">
                            <div className="bottom">
                                <div className="testResponses">
                                    raspunsuri aici
                                </div>
                            
                                <div className="bottomSpacer">
                                </div>
                                    <div className="testSettings">
                                        <div className="testStart">
                                            start
                                        </div>
                                        <div className="testEdit">
                                            edit
                                        </div>
                                        <div className="testDelete">
                                            Delete
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}
