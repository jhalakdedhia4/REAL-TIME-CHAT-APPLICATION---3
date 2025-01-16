import "./detail.css"

const Detail = () => {
    return (
        <div className='detail'>
            <div className="user">
                <img src="./mini.jpeg" alt="" />
                <h2>Minnie Mouse</h2>
                <p>Always choose joy</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt=""/>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt=""/>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & help</span>
                        <img src="./arrowUp.png" alt=""/>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowDown.png" alt=""/>
                    </div>
                    <div className="photo">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img 
                                  src="./mini.jpeg" 
                                  alt="" 
                                />
                                <span>photo_2025_1.png</span>
                            </div> 
                            <img src="./download.png" alt="" className="icon" />    
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img 
                                  src="./daisy.png" 
                                  alt="" 
                                />
                                <span>photo_2025_2.png</span>
                            </div> 
                            <img src="./download.png" alt="" className="icon" />    
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img 
                                  src="./donald.jpg" 
                                  alt="" 
                                />
                                <span>photo_2025_3.png</span>
                            </div> 
                            <img src="./download.png" alt="" className="icon" />    
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img 
                                  src="./pluto.jpg" 
                                  alt="" 
                                />
                                <span>photo_2025_4.png</span>
                            </div> 
                            <img src="./download.png" alt="" className="icon" />    
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt=""/>
                    </div>
                </div>
            </div>
            <button>Block User</button>
            <button className="logout">Logout</button>
        </div>
    );
};

export default Detail;