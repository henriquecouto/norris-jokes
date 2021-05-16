const jokes = "http://api.icndb.com/jokes";

const randomJokes = (quantity?: number) => `${jokes}/random/${quantity}`;
const randomJoke = () => `${jokes}/random`;

const urls = { randomJokes, randomJoke };

export default urls;
