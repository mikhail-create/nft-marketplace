import wrapPromise from '_helpers/wrapPromise';
import axios from 'axios';

export function getUsers() {
  const url = 'https://nft-marketplace-server.vercel.app/user'
  const promise = axios.get(url).then(({ data }) => data);
  console.log(promise);
  
  return wrapPromise(promise);
}

export function getUsersDelayed() {
  const url = 'https://nft-marketplace-server.vercel.app/user';

  const delayedPromise = new Promise((resolve) => {
    setTimeout(() => {
      axios.get(url).then(({ data }) => resolve(data));
    }, 1000);
  });

  return wrapPromise(delayedPromise);
}