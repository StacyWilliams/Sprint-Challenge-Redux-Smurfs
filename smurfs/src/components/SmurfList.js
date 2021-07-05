import React from "react";

const SmurfList = (props) => {
    console.log("smurflist props", props)
    return(
        <div className="smurf-list">
        { props.smurfs.map ( smurf => (
                <div className='smurf' id={smurf.id} key={smurf.id}>
                    <div>
                    <p> {smurf.name} </p>
                    <p> {smurf.age} </p>
                    <p> {smurf.height} </p>
                    </div>
                    <button onClick={(event, id=smurf.id) => props.delete(event,id)} >Delete</button>
                </div>
            ))
        }
        </div>
    );
}

export default SmurfList;