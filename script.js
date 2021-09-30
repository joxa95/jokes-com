const joke = document.querySelector('.joke');
const btn = document.querySelector('.btn');

const getjoke = function () {
	fetch('https://icanhazdadjoke.com/', {
		method: 'GET',
		headers: { Accept: 'application/json' },
	})
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
			const markup = `	
        <p class="joke-p display-flex">
        ${data.joke}
        <span class = "smile">😆</span>
    </p>
    `;
			joke.insertAdjacentHTML('afterbegin', markup);
		});
};
btn.addEventListener('click', () => {
	getjoke();
});
