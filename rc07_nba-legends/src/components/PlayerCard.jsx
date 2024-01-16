import Card from "react-bootstrap/Card";

const PlayerCard = (name, img, statistic) => {
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default PlayerCard;
