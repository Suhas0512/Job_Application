import React from 'react'
import {connect} from 'react-redux'
import {startGetApplications,startUpdateShortlist,startUpdateReject} from '../actions/applicationsAction'
import Swal from 'sweetalert2'

function FrontEndApplication(props){
    if(props.applications.length == 0){
        props.dispatch(startGetApplications())
    }
    const handleShorlist = (id) =>{
        const formData = {
            status: "shortlisted"
        }
        props.dispatch(startUpdateShortlist({id,formData}))
    }
    const handleReject = (id) => {
        const formData = {
            status: "rejected"
        }
        props.dispatch(startUpdateReject({id,formData}))
    }
    const handleView = (application) => {
        Swal.fire(
            `${application.name} contact number-${application.phone} email-${application.email} 
            skills-${application.skills} experience-${application.experience}`

        )
    }
    return (
        <div>
            <h2>Front-End Developers</h2>
            <h2>List of people applied for Front-End Developer's job</h2>
            <table className="table" border="2">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Technical Skills</th>
                        <th>Experience</th>
                        <th>Applied Date</th>
                        <th>View Details</th>
                        <th>Application Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.applications.map(appliction=>{
                            if(appliction.jobTitle == "Front-End Developer"){
                                return (
                                    <tr key={appliction._id}>
                                        <td>{appliction.name}</td>
                                        <td>{appliction.email}</td>
                                        <td>{appliction.experience}</td>
                                        <td>{appliction.createdAt.slice(0,10)}</td>
                                        <td><button onClick={()=>{handleView(appliction)}} style={{width:"120px"}}>View Details</button></td>
                                        <td>{appliction.status == "applied" && (<div><button onClick={()=>{handleShorlist(appliction._id)}}>Shortlist</button>||<button onClick={()=>{handleReject(appliction._id)}} >Reject</button></div>)}
                                        {
                                            appliction.status == "rejected" && (<div><p>This person is rejected</p></div>)
                                        }
                                        {
                                            appliction.status == "shortlisted" && (<div><p><b>This person is shortlisted</b></p></div>)
                                        }
                                        </td>
                                    </tr>
                                )
                            }
                        })
                    }

                </tbody>
            </table>
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        applications : state.applications
    }
}

export default connect(mapStateToProps)(FrontEndApplication)