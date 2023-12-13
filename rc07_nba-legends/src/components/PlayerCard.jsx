import Card from "react-bootstrap/Card";

const PlayerCard = ({ name, img, statistic }) => {
  return (
    <Card className="rounded-2 m-auto player-card" role="button">
      <Card.Img variant="top" src={img} className="player-logo" />
      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default PlayerCard;
