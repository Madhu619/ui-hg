import React from 'react';

const styles = {
    cards: {
        height: '500px',
    },
    img_filter : {
        maxWidth: '150px',
        margin: '10px auto',
    }
}

const DisplayCards = ({key, flight}) => {
    return (
        <div style={styles.cards} className="card mb-2">
            <img style={styles.img_filter} src={flight.links.mission_patch} className="card-img-top" alt="Mission Patch" />
            <div className="card-body">
                <h5 className="card-title"> {flight.mission_name} #{flight.flight_number} </h5>
                <div className="card-content">
                    { flight.mission_id.length > 0 && <p><strong>Mission Ids : </strong> {flight.mission_id.toString()}</p> }
                    <p><strong>Launch Year : </strong> {flight.launch_year}</p>
                    <p><strong>Successful Launch : </strong> {flight.launch_success ? 'True' : 'False'} </p>
                    <p><strong>Successful Landing : </strong> {flight.rocket.first_stage.cores[0].land_success ? 'True' : 'False'} </p>
                </div>
            </div>
        </div>
    );
}

export default DisplayCards;
