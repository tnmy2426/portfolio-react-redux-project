export const getPeople = () => {

    const getBio = fetch("http://localhost:3004/people")
        .then(res => res.json())

    return {
        type: "GET_PEOPLE",
        payload: getBio
    }
};

export const getPersonDetail = (name) => {

    const getDetail = fetch(`http://localhost:3004/people?name=${name}`, { method: "GET" })
        .then(res => res.json())

    return {
        type:"PERSON_DETAIL",
        payload: getDetail
    }
};

