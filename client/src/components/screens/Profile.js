import React from "react"

const Profile = () => {
    return(
        <div style={{maxWidth:"550px", margin:"0px auto"}}>
            <div style={{

                    display:"flex",
                    justifyContent: "space-around",
                    margin:"18px 0px",
                    borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width: "160", height:"160px", borderRadius: "80px"}} 
                    src="https://unsplash.com/photos/pg_WCHWSdT8" alt="girl" />
                </div>
                <div>
                    <h4>Vera Anderson</h4>
                    <div style={{display:"flex", justifyContent:"space-between", width:"108%"}}>
                        <h6>40 posts</h6>
                        <h6>40 followers</h6>
                        <h6>40 following</h6>

                    </div>
                </div>


            </div>
            
            <div className="gallery">
                <img className="item" src="https://unsplash.com/photos/pg_WCHWSdT8" alt="girl"  />
                <img className="item" src="https://unsplash.com/photos/pg_WCHWSdT8" alt="girl"  />
                <img className="item" src="https://unsplash.com/photos/pg_WCHWSdT8" alt="girl"  />
                <img className="item" src="https://unsplash.com/photos/pg_WCHWSdT8" alt="girl"  />

            </div>
        </div>
    )
       
    
}

export default Profile