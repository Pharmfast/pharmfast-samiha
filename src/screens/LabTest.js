import React from 'react'
import { useHistory } from 'react-router-dom'
import Banner from '../components/Banner'
import Header from '../components/Header'
import LabTestTabs from '../components/LabTestTabs'

function LabTest() {
    const history = useHistory();
    return (
        <div>
            <Header/>
            <Banner
            banner1="https://cms-contents.pharmeasy.in/banner/02f4bd44e17-Diabetes_Care_cat.jpg"
            banner2="https://cms-contents.pharmeasy.in/banner/15afb44c5c4-womens_advanced.jpg"
            banner3="https://cms-contents.pharmeasy.in/banner/8d7d8043e48-healthy_cat.jpg"
            banner4="https://cms-contents.pharmeasy.in/banner/60b2c2e1690-Compre_cat.jpg"
            />
            <div className="grid grid-cols-4 m-4 xl:ml-0">
                <LabTestTabs
                name="All Tests"
                image="https://assets.pharmeasy.in/web-assets/dist/6b3d644c.svg"
                click={() => history.push("/labtest/alltests")}
                />
                <LabTestTabs
                name="Health Packages"
                image="https://assets.pharmeasy.in/web-assets/dist/dea295a0.svg"
                click={() => history.push("/labtest/health-checkup-packages")}
                />
                <LabTestTabs
                name="Upload Prescription"
                image="https://assets.pharmeasy.in/web-assets/dist/d4d62fbf.svg"
                click={() => history.push("/labtest/upload-prescription")}
                />
                <LabTestTabs
                name="Book on Call"
                image="https://assets.pharmeasy.in/web-assets/dist/4ed59722.svg"
                click={() => history.push("/labtest/book-on-call")}
                />
            </div>
        </div>
    )
}

export default LabTest
