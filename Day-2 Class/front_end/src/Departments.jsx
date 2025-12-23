import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Departments() {
  const departments = [
    {
      name: "Computer Science",
      src: "https://cse.mrec.ac.in/Images/seoimages/ComputingFacilities/4.jpg",
    },
    {
      name: "AIML ",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTmCD1X9ISpoP0EmPeYMcYfBOT-1kY_iiAVw&s",
    },
    {
      name: "Computer Science",
      src: "https://cse.mrec.ac.in/Images/seoimages/ComputingFacilities/4.jpg",
    },
    {
      name: "AIML ",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTmCD1X9ISpoP0EmPeYMcYfBOT-1kY_iiAVw&s",
    },
    {
      name: "Computer Science",
      src: "https://cse.mrec.ac.in/Images/seoimages/ComputingFacilities/4.jpg",
    },
    {
      name: "AIML ",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTmCD1X9ISpoP0EmPeYMcYfBOT-1kY_iiAVw&s",
    },
  ];
  return (
    <Row xs={1} md={4} className="g-4">
      {departments.map((dept, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={dept.src} />
            <Card.Body>
              <Card.Title>{dept.name}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Departments;
