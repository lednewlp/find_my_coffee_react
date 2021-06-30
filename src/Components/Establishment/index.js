import React, {useState, useEffect} from 'react';
import EstablishmentsService from '../../services/establishment_service';

import styled from 'styled-components';


const Establishment = (props) => {
    const [Establishment, setEstablishment] = useState([])
    const { REACT_APP_GOOGLE_API_kEY } = process.env

    useEffect(() => {
        getEstablishmentInformations();
      }, [props.place])
    

    async function getEstablishmentInformations() {
        try {
            const response = await EstablishmentsService.show(props.place.place_id);
            setEstablishment(response.data.result);
        } catch (error) {
            setEstablishment([]);

        }
    }

    return(
        <div>

        </div>
    )
}

export default Establishment