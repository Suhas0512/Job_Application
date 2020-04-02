import Swal from "sweetalert2"
import axios from "../config/axios"

export const startAddApplications=(obj)=>{
    return (dispatch)=>{
        axios.post('/users/application-form',obj.formData)
        .then(response=>{
        if(response.data.errors){
            Swal.fire(
                'error',
                response.data.massage,
                'error'
            )
        }else{
            Swal.fire(
                'success',
                'successfully applied',
                'success'
            )
        }
    })
    }
}
export const getApplications = (data) => {
    return {type:'GET_APPLICATIONS',payload:data}
}

export const startGetApplications = () => {
    return(dispatch)=>{
        axios.get('/users/application-forms')
        .then((response)=>{
            dispatch(getApplications(response.data))
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}
export const updateShortlist = (data) => {
    return {type:'UPDATE_SHORTLIST',payload:data}

}

export const startUpdateShortlist = (obj) =>{
    return(dispatch)=>{
        axios.put(`/users/application-form/update/${obj.id}`,obj.formData)
        .then((response)=>{
            dispatch(updateShortlist(response.data))
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

export const updateReject = (data) => {
    return {type:'UPDATE_REJECT',payload:data}

}

export const startUpdateReject = (obj) =>{
    return(dispatch)=>{
        axios.put(`/users/application-form/update/${obj.id}`,obj.formData)
        .then((response)=>{
            dispatch(updateReject(response.data))
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}
