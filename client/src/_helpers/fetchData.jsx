const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer refreshToken',
    },
    body: JSON.stringify()
};

const fetchData = async (url) => {
    await fetch(url, requestOptions)

}

export default fetchData;