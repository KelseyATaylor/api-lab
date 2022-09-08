let btn = document.querySelector("button");

const btnClick = () => {
	// console.log("button clicked");
	axios.get("https://swapi.dev/api/planets/?search=alderaan").then((res) => {
		// console.log(res.data.results[0].residents)
		const { residents } = res.data.results[0];

		for (let i = 0; i < residents.length; i++) {
			axios.get(residents[i]).then((res) => {
				// console.log(res.data);
				const { name } = res.data;
				const residentNames = document.createElement("h2");
				residentNames.textContent = name;
				document.querySelector("body").appendChild(residentNames);
			});
		}
	});
};

btn.addEventListener("click", btnClick);

// const baseURL = 'https://swapi.dev/api/planets'
