const url = "http://localhost:3001/services";

function getService(serviceID) {
  // eslint-disable-next-line no-undef
  return fetch(`${url}/${serviceID}`)
    .then((response) => response.json())
    .then((res) => {
      if (!Object.keys(res).length) {
        throw new Error("no more service");
      }
      return res;
    });
}

export default getService;
