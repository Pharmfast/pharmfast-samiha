export const createPatient = (userId, token, patientDetails) => {
    return fetch(`http://localhost:8000/api/createpatient/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(patientDetails)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}