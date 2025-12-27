import fetch from 'node-fetch';

const data = await fetch('http://jsonplaceholder.typicode.com/posts')
const json = await data.json();

console.log(json);
