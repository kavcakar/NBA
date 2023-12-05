import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import nbaLogo from "../assets/nba-logo.png";

const Header = () => {
  return (
    <Container className=" text-center mt-4">
      <Image src={nbaLogo}></Image>
      <h1>NBA LEGENDS</h1>
    </Container>
  );
};

export default Header;
