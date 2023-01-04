import axios from "axios";

export const getRepos = (username) => {
	return {
		type: "GET_LIST_REPO",
		payload: new Promise((resolve, reject) => {
			axios({
				url: `https://api.github.com/users/${username}/repos`,
				method: "GET",
			})
				.then((response) => {
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		}),
	};
};
