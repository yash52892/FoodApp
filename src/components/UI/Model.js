import { Fragment } from "react";
import ReactDOM from 'react-dom';

import classes from "./Model.module.css";

const Backdrop=()=>{
    return <div className={classes.backdrop}/>;
};

const ModelOverlay = (props) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
};
    
const Port=document.getElementById('overlay');

const Model=(props)=>{
    
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop/>, Port)};
            {ReactDOM.createPortal(<ModelOverlay>
                {props.children}
            </ModelOverlay>, Port)}
        </Fragment>
    )
}
export default Model;