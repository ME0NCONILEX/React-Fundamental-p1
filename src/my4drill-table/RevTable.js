import React, { useEffect, useState } from "react";

const RevTable = () => {

    const initialState = [
        {
            id: 1,
            firstName: "Giuseppe",
            lastName: "Verdi",
            age: 2023-1813,
            birthDate: "1813-10-09",
            country: "Italy",
            city: "Busseto",
        },
        {
            id: 2,
            firstName: "Johann",
            lastName: "Strauss the Father",
            age: 2023-1804,
            birthDate: "1804-03-14",
            country: "Austria",
            city: "Leopoldstadt (Vienna)",
        },
        {
            id: 3,
            firstName: "WolfgangAmadeus",
            lastName: "Mozart",
            age: 2023-1756,
            birthDate: "1756-01-27",
            country: "Austria",
            city: "Salzburg",
        },
    ];

    const [composerList, setComposerList] = useState(initialState);
    const [showDetails, setShowDetails] = useState(false);
    const [composer, setComposer] = useState({
        id: 0,
        firstName: "",
        lastName: "",
        age: 0,
        birthDate: "",
        country: "",
        city: "",
    });

    const TableHeader = () => {
        return (
            <thead>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
            </thead>
        );
    };

    const TableAction = (props) => {

        // js functions
        const showDataHandler = () => {
            console.log("COMPOSER:", composer);
            setComposer(props.composer);
            setShowDetails(true);
        };

        return (
            <button type="button" className="btn btn-primary" onClick={showDataHandler}>
                Details
            </button>
        );
    };

    const TableRow = (props) => {


        if (!props.list && props.list.length == 0) {
            return (
                <tbody>
                <tr>
                    <td colSpan="5">Data not Found</td>
                </tr>
                </tbody>
            );
        } else {
            return (
                <tbody>
                {props.list.map((composer) => {
                    const row = (
                        <tr key={composer.id}>
                            <td>{composer.id}</td>
                            <td>{composer.firstName}</td>
                            <td>{composer.lastName}</td>
                            <td>{composer.age}</td>
                            <td>
                                <TableAction composer={composer} />
                            </td>
                        </tr>
                    );
                    return row;
                })}
                </tbody>
            );
        }
    };

    const ShowComposerDetails = () => {

        return (
            <>
                {showDetails && (
                    <div className="card">
                        <div className="card-header-tabs-50 bg-primary text-white bg-opacity-20">
                            Composer Information
                        </div>
                        <div className="card-body">
                             <p className="card-text">Id: {composer.id} </p>
                            <p className="card-text">
                                Name: {composer.firstName} {composer.lastName}
                            </p>
                            <p className="card-text">BirthDate: {composer.birthDate} </p>
                           <h6 className="card-title">
                                {composer.city}{","}{composer.country}
                            </h6>
                        </div>
                        <div className="card-footer bg-gradient-100">
                            <button type="button" className="btn btn-outline-success"
                                    onClick={() => {
                                        setComposer({});
                                        setShowDetails(false);
                                    }}>Hide</button>
                        </div>
                    </div>
                )}
            </>
        );
    };

    return (
        <>
            <h2> Composer's List </h2>
            <table className="table table-striped">
                <TableHeader />
                <TableRow list={composerList} />
            </table>

            <div className="w-40 mx-auto">
                <ShowComposerDetails />
            </div>
        </>
    );
};

export default RevTable;
