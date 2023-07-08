import React from "react";
import Jumbotron from "./jumbotron.jsx"
import Navbar from "./navbar.jsx"
import Card from "./card.jsx"
import Footer from "./footer.jsx"

const Main = () => {
	return (
		<div className="container-fluid p-0 m-0">
			<Navbar />
			<div className="container text-center w-75">
				<Jumbotron />
				<div className="card-group mb-3">
                <Card description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde illo culpa assumenda molestiae in."/>
                <Card description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae sapiente libero."/>
                <Card description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde illo culpa assumenda molestiae in."/>
                <Card description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae sapiente libero."/>
            </div>
			</div>
			<Footer />
		</div>
	);
};

export default Main;
