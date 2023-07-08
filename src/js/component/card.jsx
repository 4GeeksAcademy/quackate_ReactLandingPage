import React from "react";

const Card = (props) => {
    return (
        <div className="card text-bg-light m-2 text-center">
            <img src="https://ro-camper.ro/imgs/inchiriat-camper-romania-rulota.jpg.png" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">{props.description}</p>
            </div>
            <div className="card-footer">
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    )
};

export default Card;