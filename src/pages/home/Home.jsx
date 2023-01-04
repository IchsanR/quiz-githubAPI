import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { getRepos } from "../../redux/action/git";

const Home = () => {
	const dispatch = useDispatch();
	const [queryParam] = useSearchParams();
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const name = queryParam.get("username");

	const submitHandler = (e) => {
		e.preventDefault();
		navigate(`/?username=${username}`);

		dispatch(getRepos(name));
	};
	return (
		<div className="container-fluid row">
			<div className="my-2">
				{name ? (
					<h2 className="text-center">Result for {name}</h2>
				) : (
					<h2 className="text-center">Search Github Repository</h2>
				)}
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
