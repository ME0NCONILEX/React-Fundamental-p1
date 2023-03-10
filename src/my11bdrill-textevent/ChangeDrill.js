import React, {useState} from 'react';

const ChangeDrill = () => {

    const [name, setName] = useState("");
    const [showData, setShowData] = useState(false);


    const handleChange = (e) =>{
        console.log(e.target.value);
        setName(e.target.value)
    }

    const showText = () => {

        if (showData === true){
            setShowData(false);
        }else{
            setShowData(true);
        }
    }

    const TextMessage = () => <b>Text:{name}</b>

    return (
        <div className="container">
            <div className="card">
                <div className="card-header bg-dark text-white">Your Text</div>
                <div className="card-body">
                    <form id="textForm" className="form-controll">
                        <input className="form-controll" type="text" onChange={handleChange}/>
                        <button className="btn btn-primary" onClick={showText} type="button">Toggle Show</button>
                        <br />
                        {showData ? <TextMessage/> : ""}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChangeDrill;