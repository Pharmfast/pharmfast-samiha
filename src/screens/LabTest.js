import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import HealthPackages from '../components/AffordableHealthPackages/HealthPackages'
import Banner from '../components/Banner'
import PartnerLabs from '../components/CertifiedPartnerLabs/PartnerLabs'
import Header from '../components/Header'
import LabTestTabs from '../components/LabTestTabs'
import SearchPackages from '../components/SearchedByYou/SearchPackages'

function LabTest() {
    const history = useHistory();
    return (
        <div>
            <Header />
            <Banner
                banner1="https://cms-contents.pharmeasy.in/banner/02f4bd44e17-Diabetes_Care_cat.jpg"
                banner2="https://cms-contents.pharmeasy.in/banner/15afb44c5c4-womens_advanced.jpg"
                banner3="https://cms-contents.pharmeasy.in/banner/8d7d8043e48-healthy_cat.jpg"
                banner4="https://cms-contents.pharmeasy.in/banner/60b2c2e1690-Compre_cat.jpg"
            />
            <div className='bg-gray-50 -my-8'>
                <div className="grid grid-cols-2 lg:grid-cols-4 m-4 xl:ml-0">
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

                {/* 7th september task */}
                <div className='container mx-auto my-20 pt-10 box-border'>
                    <div className='sm:px-16 lg:px-16 text-lg sm:text-xl'>
                        <h2 className='text-center sm:text-left text-gray-600 font-bold lg:ml-3'>
                            Recently Searched By You
                        </h2>
                    </div>
                    <SearchPackages />
                </div>

                <div className='container mx-auto my-20 pt-10 box-border'>
                    <div className='flex flex-col sm:flex-row sm:justify-between sm:px-16 lg:px-16 text-lg sm:text-xl'>
                        <h2 className='text-center sm:text-left text-gray-600 font-bold lg:ml-3'>
                            Certified Partner Labs
                        </h2>
                        <div className='flex justify-center my-2 sm:my-0'>
                            <Link to='/partner-labs'>
                                <button className='text-red-600 font-bold hover:text-black'>
                                    View all
                                </button>
                            </Link>
                        </div>
                    </div>
                    <PartnerLabs />
                </div>

                {/* 1st September task */}
                <div className='container mx-auto my-20 pt-10 box-border'>
                    <div className='flex flex-col sm:flex-row sm:justify-between sm:px-16 lg:px-16 text-lg sm:text-xl'>
                        <h2 className='text-center sm:text-left text-gray-600 font-bold lg:ml-3'>
                            Affordable Health Packages
                        </h2>
                        <div className='flex justify-center my-2 sm:my-0'>
                            {/* <button onClick={() => history.push("/labtest/health-check-packages")} className='text-red-600 font-bold hover:text-black'>View all</button> */}
                            <Link to='/health-check-packages'>
                                <button className='text-red-600 font-bold hover:text-black'>
                                    View all
                                </button>
                            </Link>
                        </div>
                    </div>
                    <HealthPackages />
                </div>
            </div>
        </div>
    )
}

export default LabTest
