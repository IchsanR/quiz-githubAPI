import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRepos } from "../../redux/action/git";

const Home = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [username, setUsername] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		navigate(`/search?username=${username}`);

		dispatch(getRepos(username));
	};
	return (
		<div className="container-fluid row">
			<div className="my-2">
				<h2 className="text-center">Search Github Repository</h2>
			</div>
			<div className="mb-3 col-md-7 mx-auto">
				<form onSubmit={(e) => submitHandler(e)}>
					<input
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						placeholder="Type username here"
						onChange={(e) => setUsername(e.target.value)}
					/>
				</form>
			</div>
		</div>
	);
};

export default Home;
