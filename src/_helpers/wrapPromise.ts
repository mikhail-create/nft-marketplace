function wrapPromise<T>(promise: Promise<T>) {
  let status: 'pending' | 'success' | 'error' = 'pending';
  let response: T | any; // Using "any" for simplicity, you can provide a more specific type for "response" if needed.

  const suspender = promise.then(
    (res: T) => {
      status = 'success';
      response = res;
    },
    (err: any) => {
      status = 'error';
      response = err;
    },
  );

  const handler: { [key: string]: () => T | any } = {
    pending: () => {
      throw suspender;
    },
    error: () => {
      throw response;
    },
    default: () => response,
  };

  const read = () => {
    const result = handler[status] ? handler[status]() : handler.default();
    return result;
  };

  return { read };
}

export default wrapPromise;
