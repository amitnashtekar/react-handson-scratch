import React from 'react';
import {withRouter} from 'react-router-dom';
import { useAuth } from '../../CustomHooks';


const WithAuth = (props) => {
    
    return (
        <>
        {useAuth(props) && props.children }
        </>
        
        
    )
}
export default withRouter(WithAuth);