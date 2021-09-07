import React, { useEffect, useState } from 'react'
import { RiFolderTransferFill } from 'react-icons/ri'
import { isAuthenticated } from '../../auth/helper'
import Header from '../Header'
import { createPatient } from './Helper/patientApi'

function Patient() {
    const [selectPatient, setSelectPatient] = useState(false)
    const [selectAddress, setSelectAddress] = useState(false)
    const [address, setAddress] = useState([])
    const [values, setValues] = useState({
        name: "",
        age: "",
        gender: "",
        contactName: "",
        flatNo: "",
        streetName: "",
        pincode: "",
        city: "",
        mobileNo: "",
        addressType: "",
        error: "",
        pSuccess: false,
        aSuccess: false,
        success: false,
        loading: "",
        didRedirect: false
    })

    useEffect(() => {
        const { user } = isAuthenticated()
        setAddress(user.patientDetails)
    }, [])

    const { name, age, gender, contactName, flatNo, streetName, pincode, city, mobileNo, addressType, error, success , loading, didRedirect } = values
    const { user, token } = isAuthenticated()

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    }

    const onSubmitPat = (e) => {
        e.preventDefault()
        if(name == "" || age == "" || gender == "") {
            console.log("add all fields")
        }
        else {
            setValues({...values, pSuccess: true})
            setSelectPatient(false)
        }
    }

    const onSubmitAdd = (e) => {
        e.preventDefault()
        if(contactName == "" || flatNo == "" || streetName == "" ||
            pincode == "" || mobileNo == "" || addressType == "" ) {
            console.log("add all fields")
        }
        else {
            setValues({...values, aSuccess: true})
            setSelectAddress(false)
        }
    }

    const patientShow = () => {
        return (
            <>
                <h1>Name: {name}</h1>
                <h2>Age: {age}</h2>
                <h2>Gender: {gender}</h2>
            </>
        )
    }

    const addressShow = () => {
        return (
            <>
                <h1>{addressType}</h1>
                <h2>{contactName}</h2>
                <h2>{flatNo}</h2>
                <h2>{streetName}</h2>
                <h2>{city} - {pincode}</h2>
                <h2>{mobileNo}</h2>
            </>
        )
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const patientDetails = {
            name,
            age,
            gender,
            address: {
                contactName,
                flatNo,
                streetName,
                pincode,
                city,
                mobileNo,
                addressType
            }
        }
        createPatient(user._id, token, patientDetails)
        .then(data => {
            if(data.error) {
                console.log(data.error)
            } else {
                console.log(data)
                setValues({...values, success: true,
                    name: "",
                    age: "",
                    gender: "",
                    contactName: "",
                    flatNo: "",
                    streetName: "",
                    pincode: "",
                    city: "",
                    mobileNo: "",
                    addressType: "",
                    aSuccess: false,
                    pSuccess: false,
                    success: true
                })
                setSelectAddress(false)
                setSelectPatient(false)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    const PatientDrawer = () => {
        return (
            <>
                <br></br>
                <h1>Select Patient</h1>
                <br></br>
                {address?.map((add) => (
                    <>
                        <h1>{add.name}</h1>
                        <h2>{add.age}</h2>
                        <h2>{add.gender}</h2>
                        <br></br>
                    </>
                ))}
            </>
        )
    }

    const AddressDrawer = () => {
        return (
            <>
                <br></br>
                <h1>Select Address</h1>
                <br></br>
                {address?.map((add) => (
                    <>
                        <h1>{add.address.addressType}</h1>
                        <h2>{add.address.contactName}</h2>
                        <h2>{add.address.flatNo}</h2>
                        <h2>{add.address.streetName}</h2>
                        <h2>{add.address.city} - {add.address.pincode}</h2>
                        <h2>{add.address.mobileNo}</h2>
                        <br></br>
                    </>
                ))}
            </>
        )
    }

    console.log(address)

    return (
        <div>
            <Header />
            <h1>Register Patient</h1>
            <br/>
            <button onClick={() => setSelectPatient(!selectPatient)}>Select Patient</button>
            {selectPatient && (
                <>
                    <form>
                        <div>
                            <label className="text-light">Full Name</label>
                            <input value={name} onChange={handleChange("name")}  type="text" />
                        </div>
                        <div>
                            <label className="text-light">Age</label>
                            <input value={age} onChange={handleChange("age")}  type="number" />
                        </div>
                        <div>
                            <label className="text-light">Gender</label>
                            <input value={gender} onChange={handleChange("gender")}  type="text" />
                        </div>
                        <button onClick={onSubmitPat} className="btn btn-success btn-block mt-2">Add</button>
                    </form>
                    {PatientDrawer()}
                </>
            )}
            {values.pSuccess && (
                <div>
                    {patientShow()}
                    <button onClick={() => {
                        setSelectPatient(!selectPatient)
                        setValues({...values, pSuccess: false})}}>Edit</button>
                </div>
            )}
            <br/>
            <br/>
            <button onClick={() => setSelectAddress(!selectAddress)}>Select Address</button>
            {selectAddress && (
                <>
                    <form>
                        <div>
                            <label className="text-light">Contact Name</label>
                            <input value={contactName} onChange={handleChange("contactName")}  type="text" />
                        </div>
                        <div>
                            <label className="text-light">Building Name and Flat Number</label>
                            <input value={flatNo} onChange={handleChange("flatNo")}  type="text" />
                        </div>
                        
                        <div>
                            <label className="text-light">Street Name</label>
                            <input value={streetName} onChange={handleChange("streetName")}  type="text" />
                        </div>
                        <div>
                            <label className="text-light">Pincode</label>
                            <input value={pincode} onChange={handleChange("pincode")}  type="number" />
                        </div>
                        <div>
                            <label className="text-light">City</label>
                            <input value={city} onChange={handleChange("city")}  type="text" />
                        </div>
                        <div>
                            <label className="text-light">Mobile Number</label>
                            <input value={mobileNo} onChange={handleChange("mobileNo")}  type="number" />
                        </div>
                        <div>
                            <label className="text-light">Address Type</label>
                            <input value={addressType} onChange={handleChange("addressType")}  type="text" />
                        </div>
                        <button onClick={onSubmitAdd} className="btn btn-success btn-block mt-2">Add</button>
                    </form>
                    {AddressDrawer()}
                </>
            )}
            {values.aSuccess && (
                <div>
                    {addressShow()}
                    <button onClick={() => {
                        setSelectAddress(!selectAddress)
                        setValues({...values, aSuccess: false})}}>Edit</button>
                </div>
            )}
            <br></br>
            {values.aSuccess && values.pSuccess && (
                <button onClick={onSubmit}>Select Appointment Time</button>
            )}
            {values.success && (
                <h1>Appointment Booked Successfully</h1>
            )}
        </div>
    )
}

export default Patient