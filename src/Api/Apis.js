import React, { useState } from 'react'

function Apiss() {
    const [Apis, setApis] = useState([])
    const getData = () => {
        fetch('https://reqres.in/api/users?page=1')
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setApis(res.data)
            }).catch((error) => console.log("Error in Api", error))
    }
    console.log("apis", Apis);
    return (
        <>
            <div>Api</div>
            <button onClick={getData}>click</button>

            <div>
                {
                    Apis.map((item) => {
                        return (
                            <div key={item.id} style={{ display: "flex" }}>
                                <div className="card" style={{ width: '30%' }}>
                                    <img src={item.avatar} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.first_name} ID: {item.id} </h5>
                                        <p className="card-text">{item.email}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>

    )
}

export default Apiss