import React, { useEffect, useState } from 'react'
import { RiFolderTransferFill } from 'react-icons/ri'
import { isAuthenticated } from '../../auth/helper'
import Header from '../Header'
import { createPatient } from './Helper/patientApi'
import Drawer from "react-modern-drawer";
import 'react-modern-drawer/dist/index.css'

function Patient() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    }
    const [addressIsOpen, setaddressIsOpen] = useState(false);
    const toggleAddressDrawer = () => {
        setaddressIsOpen((prevState) => !prevState);
    }
    const [selectPatient, setSelectPatient] = useState(false)
    const [selectAddress, setSelectAddress] = useState(false)
    const [addPat, setAddPat] = useState(false)
    const [addAddress, setAddAddress] = useState(false)
    const [address, setAddress] = useState([])
    const [values, setValues] = useState({
        _id: "",
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
        // e.preventDefault()
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

    const selectDrawerPat = (add) => {
        setValues({
            ...values,
            name: add.name,
            gender: add.gender,
            age: add.age,
            _id: add._id,
            pSuccess: true
        })
    }

    const PatientDrawer = () => {
        return (
            <>
                <br></br>
                <h1>Select Patient</h1>
                <br></br>
                {address?.map((add) => (
                    <div onClick={() => selectDrawerPat(add)}>
                        <h1>{add.name}</h1>
                        <h2>{add.age}</h2>
                        <h2>{add.gender}</h2>
                        <br></br>
                    </div>
                ))}
            </>
        )
    }

    const selectDrawerAdd = (add) => {
        setValues({
            ...values,
            contactName: add.address.contactName,
            flatNo: add.address.flatNo,
            streetName: add.address.streetName,
            pincode: add.address.pincode,
            mobileNo: add.address.mobileNo,
            addressType: add.address.addressType,
            city: add.address.city,
            aSuccess: true
        })
    }

    const AddressDrawer = () => {
        return (
            <>
                <br></br>
                <h1>Select Address</h1>
                <br></br>
                {address?.map((add) => (
                    <div onClick={() => selectDrawerAdd(add)}>
                        <h1>{add.address.addressType}</h1>
                        <h2>{add.address.contactName}</h2>
                        <h2>{add.address.flatNo}</h2>
                        <h2>{add.address.streetName}</h2>
                        <h2>{add.address.city} - {add.address.pincode}</h2>
                        <h2>{add.address.mobileNo}</h2>
                        <br></br>
                    </div>
                ))}
            </>
        )
    }

    // console.log(address)

    return (
        <div className="flex flex-col">
        <header>
             <div className="bg-red-500 flex  flex-row justify-between items-center p-1 flex-grow py-2">
                        <img
                        className="w-36 m-2 mx-20 h-12 object-contain"
                        src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
                        alt="" />

                        <div className="_3Qlzl text-white mx-20"><svg className="a6G4b " width="20" height="20" viewBox="0 0 20 20"><path fill="white" d="M13.007 9.395L11.82 10.61l.281 1.688a.449.449 0 0 1-.189.438.516.516 0 0 1-.264.082.52.52 0 0 1-.218-.047l-1.417-.782-1.422.782a.505.505 0 0 1-.218.047.528.528 0 0 1-.265-.082.455.455 0 0 1-.188-.438l.281-1.688-1.183-1.215c-.125-.113-.155-.293-.109-.456a.441.441 0 0 1 .357-.305l1.623-.245.7-1.494a.455.455 0 0 1 .406-.259c.172 0 .328.1.408.259l.7 1.494 1.622.245c.172.03.31.146.357.305a.48.48 0 0 1-.075.456M9.943 2C9.81 2.056 3 4.62 3 4.623v4.819c0 3.34.977 7.705 6.943 9.329 5.951-1.624 6.928-6.065 6.928-9.33.014-1.647.014-4.818.014-4.818 0-.004-6.77-2.557-6.942-2.623"></path></svg>100% Secure Payments</div>
             </div>
        </header>
        <div className="sULA5  px-20 text-3xl font-bold text-gray-600 "><div tabindex="0" role="button" className="_2tdEn _1pXi6 _1-ycP  -mx-8 -mb-8 mt-10"><svg viewBox="0 0 22 15" width="22" height="15"><path fill="currentColor" fill-rule="evenodd" d="M21.263 6.77H2.515l5.57-5.523a.726.726 0 0 0 0-1.033.742.742 0 0 0-1.041 0L.216 6.984A.73.73 0 0 0 0 7.5c0 .195.079.38.216.517l6.828 6.77a.738.738 0 0 0 1.041 0 .725.725 0 0 0 0-1.033L2.515 8.23h18.748A.733.733 0 0 0 22 7.5c0-.404-.33-.73-.737-.73"></path></svg></div>Patient Details</div>
        <div className="flex flex-row">
        <img className="RW3Cr w-6/12 h-2/3 p-8 mx-36 " src="https://assets.pharmeasy.in/web-assets/dist/f3e7c28c.png" alt=""/>
      <div className=" w-4/12 h-96 flex flex-col -ml-20 pr-14 mr-4 justify-evenly">
      <div className="w-full h-72 bg-gray-200 text-left p-4 flex flex-col justify-between align-center">
            <div className="text-gray-600 font-bold text-lg pt-4 ">Booking For</div>
            {values.pSuccess == true ? (
                <>
                    {patientShow()}
                    <button onClick={toggleDrawer}>Edit</button>
                </>
            ) : (
                <>
                    <div tabindex="0" role="button" className="_2tdEn _1pXi6 _3RFSy w-full bg-red-50 flex flex-row justify-between px-2 py-4 shadow-md text-lg text-red-500" onClick={toggleDrawer}><svg width="50" height="50" viewBox="0 0 50 50" className="iu4cL h-8 w-8"><g fill="none" fill-rule="evenodd"><path fill="red" d="M46.499 24.763c0 12.012-9.738 21.75-21.75 21.75C12.739 46.512 3 36.774 3 24.762S12.738 3.014 24.75 3.014c12.01 0 21.749 9.737 21.749 21.75"></path><path fill="#B91C1C" d="M27.453 46.333c-.88.12-1.793.176-2.706.176-12.012 0-21.746-9.735-21.746-21.747S12.735 3.015 24.747 3.015c.913 0 1.826.055 2.706.176C16.706 4.51 8.39 13.663 8.39 24.76c0 11.1 8.316 20.252 19.063 21.572"></path><path stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.577" d="M13.313 20.735a3.15 3.15 0 0 1 6.297 0m10.28 0a3.147 3.147 0 0 1 6.296 0m-.677 8.247c-1.853 4.095-5.972 6.943-10.757 6.943a11.8 11.8 0 0 1-10.762-6.951"></path></g></svg>Add Patient<svg viewBox="0 0 24 24" className="_1We5Z w-8 h-8"><path fill="red" fill-rule="evenodd" d="M8 7.4L9.4 6l6 6-6 6L8 16.6l4.6-4.6z"></path></svg></div>
                </>
            )}
            <div className="text-gray-600 font-bold text-lg ">Sample pickup from</div>
            {values.aSuccess == true ? (
                <>
                    {addressShow()}
                    <button onClick={toggleAddressDrawer}>Edit</button>
                </>
            ) : (
                <>
                    <div tabindex="0" role="button" className="_2tdEn _1pXi6 _3RFSy _2qs7w w-full bg-red-50 flex flex-row justify-between px-2 py-4 shadow-md text-lg text-red-500" onClick={toggleAddressDrawer}><svg width="50" height="50" viewBox="0 0 50 50" className="iu4cL h-8 w-8"><g fill="none" fill-rule="evenodd"><path fill="red" d="M27.037 41.51l-13.058-5.183 1.298-2.436a.97.97 0 0 1 .854-.518H33.21a.96.96 0 0 1 .827.468l2.13 3.496-9.13 4.174z"></path><path fill="red" d="M12.933 38.285l23.863 9.473H8.798a.55.55 0 0 1-.482-.81l4.617-8.663z"></path><path fill="#red" d="M42.022 47.46l-12.154-4.824 7.454-3.403 4.682 7.686a.53.53 0 0 1 .018.54"></path><path fill="#B91C1C" d="M42.022 47.46a.54.54 0 0 1-.483.298h-4.743l-23.863-9.473 1.046-1.957 13.058 5.183 9.13-4.174 1.155 1.896-7.454 3.403 12.154 4.824z"></path><path fill="#7F1D1D" d="M16.223 15.963c0-4.593 3.708-8.331 8.27-8.331 4.562 0 8.276 3.738 8.276 8.33 0 4.594-3.714 8.327-8.276 8.327-4.562 0-8.27-3.733-8.27-8.326m8.276-13.194c-10.625.022-16.914 12.025-10.894 20.743l10.011 14.505a1.072 1.072 0 0 0 1.765 0l10.012-14.495c6.013-8.711-.253-20.731-10.894-20.753"></path><path fill="#B91C1C" d="M26.113 36.96l-.728 1.057a1.071 1.071 0 0 1-1.764 0L13.603 23.512C8.893 16.685 11.725 7.853 18.27 4.33c-5.001 4.106-6.737 11.728-2.569 17.775l10.017 14.507c.11.155.241.27.395.347"></path><path fill="red" d="M27.987 22.05a6.817 6.817 0 0 1-1.818.739h-.006a6.982 6.982 0 0 1-7.716-3.308 7.086 7.086 0 0 1 1.013-8.386c.444-.47.958-.877 1.544-1.218 3.336-1.942 7.613-.79 9.541 2.569 1.928 3.357.779 7.668-2.558 9.604m4.612-10.795a9.345 9.345 0 0 0-10.658-4.35l-.104.033a3.385 3.385 0 0 0-.378.12c-.18.056-.356.127-.531.2a6.44 6.44 0 0 0-.548.253 8.688 8.688 0 0 0-.559.298c-4.469 2.597-6.008 8.364-3.429 12.863 2.58 4.498 8.315 6.043 12.784 3.445a9.02 9.02 0 0 0 .97-.65c.11-.077.212-.16.311-.248.066-.05.133-.105.192-.16a4.15 4.15 0 0 0 .226-.21.673.673 0 0 0 .125-.127 9.45 9.45 0 0 0 1.6-11.467"></path><path fill="#991B1B" d="M31.01 22.723a2.662 2.662 0 0 1-.136.127 4.596 4.596 0 0 1-.416.37c-.1.087-.202.17-.313.248a8.83 8.83 0 0 1-.97.65c-4.468 2.596-10.203 1.053-12.782-3.447-2.58-4.498-1.04-10.265 3.428-12.862.181-.106.367-.204.559-.298a6.6 6.6 0 0 1 .548-.254c.175-.071.35-.143.53-.199.127-.05.254-.088.378-.12.034-.012.072-.022.105-.033a9.338 9.338 0 0 0-2.481 4.19 7.086 7.086 0 0 0-1.014 8.385 6.98 6.98 0 0 0 7.717 3.308h.006a9.198 9.198 0 0 0 4.83-.065h.012z"></path></g></svg>Add Address<svg viewBox="0 0 24 24" className="_1We5Z w-8 h-8"><path fill="red" fill-rule="evenodd" d="M8 7.4L9.4 6l6 6-6 6L8 16.6l4.6-4.6z"></path></svg></div>
                </>
            )}
        <button onClick={onSubmit} className="w-full border p-2 rounded-lg bg-red-600 text-white text-lg hover:bg-red-500">Submit</button>
        </div>
    </div>
        </div>
          
        <div>
         
         <Drawer size={450} open={isOpen} onClose={toggleDrawer} direction='right'>
                 <div className="xl:m-12">
                
                     <div className="xl:flex xl:items-center xl:text-red-500 p-2 rounded-lg">
                        
                         <h1 className="xl:mb-4 xl:text-gray-600 xl:text-lg xl:font-bold px-2">Add Patient Details</h1>
                      
                     </div>
                     {PatientDrawer()}
                    <button onClick={() => setAddPat(!addPat)}>Add New</button>
                     <hr className="h-0.5 w-full mb-4"/>
                     {addPat && (
                        <div className="grid, grid-cols-1 text-lg text-gray-500">
                        <label className="px-8 text-gray-500 font-thin ">Full Name</label>
                        <input  value={name} onChange={handleChange("name")} className=" border border-gray-400 p-2 w-full px-4 my-4 rounded-md" type="text" placeholder="e.g.Thor Odinson"></input>
                        <label className="px-8 text-gray-500 mr-8 font-thin">Age</label>
                        <label className="px-8 text-gray-500 ml-8 font-thin">Gender</label>
                        <input value={age} onChange={handleChange("age")} className=" border border-gray-400 p-2 w-5/12 px-4 my-4 rounded-md mx-4" type="number" placeholder="e.g.28"></input>
                        <input  value={gender} onChange={handleChange("gender")} className=" border border-gray-400 p-2 w-5/12 rounded-md px-4 my-4 mx-2" type="text" >
                        
                        </input>
                        <hr className="h-0.5 w-full mb-4 mt-4"/>
                       <button onClick={onSubmitPat} className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-4 ml-0 w-full  text-lg">Add</button>
                        </div>
                     )}
                </div>
       </Drawer>
       </div>

       
       <div>
         
         <Drawer size={450} open={addressIsOpen} onClose={toggleAddressDrawer} direction='right'>
                         <h1 className="xl:mb-4 xl:text-gray-600 xl:text-lg xl:font-bold px-2 mt-8 mx-2">Add Patient Address</h1>
                     <hr className="h-0.5 w-full  -mt-2 mx-4 px-4"/>
                        {AddressDrawer()}
                    <button onClick={() => setAddAddress(!addAddress)}>Add New</button>
                 {addAddress && (
                     <>
                        <div className="xl:m-12 h-72 overflow-y-scroll">
                        
                            <div className="grid, grid-cols-1 text-lg text-left text-gray-500 h-full py-2 mb-20 px-2">
                            <label className="px-2 text-gray-500 font-thin">Contact Name</label>
                            <input value={contactName} onChange={handleChange("contactName")} className=" border border-gray-400 p-2 w-full px-4 my-2 rounded-md" type="text" placeholder="e.g.Thor Odinson"></input>
                            <label className="px-2 text-gray-500 font-thin">Building Name and Flat Number</label>
                            <input value={flatNo} onChange={handleChange("flatNo")} className=" border border-gray-400 p-2 w-full px-4 my-2 rounded-md" type="text" placeholder="e.g.Kohinoor Business Park"></input>
                            <label className="px-2 text-gray-500 font-thin">Street Name</label>
                            <input value={streetName} onChange={handleChange("streetName")} className=" border border-gray-400 p-2 w-full px-4 my-2 rounded-md" type="text" placeholder="e.g.Dummy Text"></input>
                            <label className="px-2 text-gray-500 font-thin">Pin Code</label>
                            <input value={pincode} onChange={handleChange("pincode")} className=" border border-gray-400 p-2 w-full px-4 my-2 rounded-md" type="text" placeholder="e.g.400072"></input>
                            <label className="px-2 text-gray-500 font-thin">Mobile Number</label>
                            <input value={mobileNo} onChange={handleChange("mobileNo")} className=" border border-gray-400 p-2 w-full px-4 my-2 rounded-md" type="text" placeholder="e.g.9123456789"></input>
                            <label className="px-2 text-gray-500 font-thin block pb-2">Address Type:</label>
                            <input id="aT"  onClick={() => setValues({...values, addressType: "Home"})} className={` border border-gray-400 text-gray-500 hover:bg-red-300 hover:text-white ${values.addressType == "Home" ? `bg-red-300 text-white` : ``} text-xs font-thin p-2 w-1/5 mx-2 rounded-full`} type="button" value="Home"></input>
                            <input id="aT"  onClick={() => setValues({...values, addressType: "Work"})} className={` border border-gray-400 text-gray-500 hover:bg-red-300 hover:text-white ${values.addressType == "Work" ? `bg-red-300 text-white` : ``} text-xs font-thin p-2 w-1/5 mx-2 rounded-full`} type="button" value="Work"></input>
                            <input id="aT"  onClick={() => setValues({...values, addressType: "Other"})} className={` border border-gray-400 text-gray-500 hover:bg-red-300 hover:text-white ${values.addressType == "Other" ? `bg-red-300 text-white` : ``} text-xs font-thin p-2 w-1/5 mx-2 rounded-full`} type="button" value="Other"></input>
                            <button onClick={() => {
                                onSubmitAdd()
                                toggleAddressDrawer()
                            }} className="bg-red-600 hover:bg-red-500 text-white font-bold py-2  rounded mt-4  w-10/12 mx-8 text-lg">Add & Continue</button>
                            </div>
                        </div>
                            <hr className="h-0.5 w-full mb-4 mt-2 z-0"/>
                     </>
                 )}
       </Drawer>
       {values.success && <h1>patient created successfully</h1>}
       </div>

        </div>
    )
}

export default Patient