import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { getRepos } from "../../redux/action/git";

const Search = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [queryParam] = useSearchParams();
	const name = queryParam.get("username");
	const user = useSelector((state) => {
		return state.git;
	});

	useEffect(() => {
		dispatch(getRepos(name));
	}, [name]);

	console.log(user.data);

	const submitHandler = (e) => {
		e.preventDefault();
		navigate(`/search?username=${username}`);

		dispatch(getRepos(username));
	};
	return (
		<div className="container-fluid row">
			<div className="my-2">
				<h2 className="text-center">{name}'s Github Repository</h2>
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
				{user.data.length === 0 ? (
					<h2 className="text-center">No repository found</h2>
				) : (
					user.data.map((item, index) => (
						<a href={item.html_url} key={index}>
							<div className={`col-12 rounded border my-3`}>
								<h3 className={`text-dark`}>{item.name}</h3>
								<p className="text-secondary">{item.description}</p>
							</div>
						</a>
					))
				)}
			</div>
		</div>
	);
};

export default Search;
