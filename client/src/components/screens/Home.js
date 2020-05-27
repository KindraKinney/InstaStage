import React from "react"

const Home = () => {
    return (
        <div className="home">
            <div className="card home-card">
                <h5>Vera</h5>
                <div className="card-image">
                    <img src="https://unsplash.com/photos/JgOeRuGD_Y4" alt="canyon"/>
                </div>
                <div className="card-content">
                    <i class="material-icons">favorite_border</i>
                    <h6>title</h6>
                    <p>this is amazing</p>
                    <input type="text" placeholder="add comment" />
                </div>
            </div>


        </div>
    )
}

export default Home