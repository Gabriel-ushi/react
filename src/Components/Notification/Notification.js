import Alert from 'react-bootstrap/Alert';
import ReactDOM from 'react-dom';

export const Alerta = ({message, variant="sucess", onClose}) =>{
return ReactDOM.createPortal(
        <Alert variant={variant} onClose={onClose} dismissible className="notification">
        <p>
        {message}
        </p>
        </Alert>,
        document.body
)}

