import React, { useState } from 'react'

function Api() {
    const [Apis, setApis] = useState([])
    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setApis(res)
            }).catch((error) => console.log("Error in Api", error))
    }
    console.log("apis", Apis);
    return (
        <>
            <div>Api</div>
            <button onClick={getData}>clicdsk</button>

            <div>
                {
                    Apis.map((item) => {
                        return (
                            <div key={item.id} style={{display:"flex"}}>
                              <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">{item.title} + {item.userId}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{item.id}</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

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

export default Api