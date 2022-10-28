import CardBS from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


export const Cards = ({pinId, image, title, total, onClick}) =>{
    return(
    <CardBS className="bg-dark text-white">
      <CardBS.Img src= {image} alt="Card image" /> 
      <CardBS.ImgOverlay>
      <Button variant="primary" onClick={()=> onClick(pinId)}>
      Salvar <Badge bg="secondary">{total}</Badge>
      </Button>
      </CardBS.ImgOverlay>
      <CardBS.Title>{title}
      </CardBS.Title>
    </CardBS>
  );
}