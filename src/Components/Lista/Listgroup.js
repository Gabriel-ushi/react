import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

export const Listagem=({items=[]})=> {

    return (
    <ListGroup as="ul">
        {items.map(item => (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            >
            <div className="ms-2 me-auto">
            <div className="fw-bold">{item.title}</div>
            </div>
            <Badge bg="primary" pill>
                {item.total ? item.total:0}
            </Badge> 
      </ListGroup.Item>
        ))}
    </ListGroup>
  );
}