import React, { useState } from 'react';
import axios from 'axios';
// import AxiosDrill from './AxiosDrill';
const URL = "http://localhost:3000/api/v1/person/";

const AxiosDrill = () => {


    const [people, setPeople] = useState([]);
    const [message, setMessage] = useState();
    const [error, setError] = useState();

    const [id, setId] = useState();


    const sendGetRequest = async () => {

        await axios.get(URL)
            .then((res) =>{
                console.log(res);

                setPeople(res.data)

                if(res.status === 200){
                    setMessage("Operation Was Successfully Executed!")
                }else{
                    setError("API Error Code: ", res.status)
                }
                setError();
            })
            .catch((er) => {
                console.log("ERROR: ", er);
                if(er.message){
                    setError(er.message);
                }else{
                    setError(er);
                }
                setMessage();
            })

    }

    const sendGetByIDRequest = async () =>{

        await axios.get(URL + id)
            .then((response) => {
                console.log(response);

                if(response.status === 200) {
                    setMessage("Operation Done!")

                    setPeople(response.data);
                }else{
                    setError("operation has Failed! Error: ", response.status)
                }

                setError();
            })
            .catch((er) => {
                console.log("ERROR: ", er);
                if(er.message){
                    setError(er.message);
                }else{
                    setError(er);
                }
                setMessage();
            })

    };


    const sendPostRequest = async () => {

        const data = { firstName: "First", lastName: "Name", email: "first.name@nonet.io", title: ".example"
        }

        await axios.post(URL, data)
            .then((response) => {
                console.log(response);

                if(response.status === 201) {
                    setMessage("Operation Done: Added!")

                    setPeople(response.data);
                }else{
                    setError("operation has Failed! Error: ", response.status)
                }
                setError();
            })
            .catch((er) => {
                console.log("ERROR: ", er);
                if(er.message){
                    setError(er.message);
                }else{
                    setError(er);
                }
                setMessage();
            })

    }

    const sendPutRequest = async () => {

        const data = { id:2,
            firstName: "new",
            lastName: "name",
            email: "new.name@nonet.io",
            title: "newex"
        }

        await axios.put(URL, data)
            .then((response) => {
                console.log(response);

                if(response.status === 204) {
                    setMessage("Operation Done: Updated!")

                    setPeople(response.data);
                }else{
                    setError("operation has Failed! Error: ", response.status)
                }
                setError();
            })
            .catch((er) => {
                console.log("ERROR: ", er);
                if(er.message){
                    setError(er.message);
                }else{
                    setError(er);
                }
                setMessage();
            })
    }

    const sendDeleteRequest = async () =>{

        await axios.delete(URL + id)
            .then((response) => {
                console.log(response);

                if(response.status === 204) {
                    setMessage("Operation Done: Deleted!")

                    setPeople(response.data);
                }else{
                    setError("operation has Failed! Error: ", response.status)
                }
                setError();
            })
            .catch((er) => {
                console.log("ERROR: ", er);
                if(er.message){
                    setError(er.message);
                }else{
                    setError(er);
                }
                setMessage();
            })
    }

    return (
        <div className='container'>
            <h3>My simple Axios Example!</h3>

            {message && <div className='alert alert-success'>{message}</div>}
            {error && <div className='alert alert-danger'>{error}</div>}

            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-info" onClick={sendGetRequest}>Get All person Data From API</button>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-3">
                    <button type="button" className="btn btn-primary" onClick={sendGetByIDRequest}>Get By Id</button>
                </div>
                <div className="col-3">
                    <input className='form-control' type="text" name="id" id="findByID" onChange={(e)=> setId(e.target.value)}/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-success" onClick={sendPostRequest}>Post Data To API</button>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-warning" onClick={sendPutRequest}>Put Data To API</button>
                </div>
            </div>

            <br/>
            <div className="row">
                <div className="col">
                    <button className='btn btn-danger' onClick={sendDeleteRequest}>Delete Data From API</button>
                </div>
            </div>
        </div>
    );
};

export default AxiosDrill;