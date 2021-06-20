// Consists of the list of all brands displayed in the site

import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

// Consists of one component <BrandItem />
import BrandItem from "./BrandItem";
import { SiteFilter } from "../../contexts/filter-context";

function BrandList({ brands, likesRecord }) {
  // Access search bar input state
  // searchQuery STATE: value of the inputbar in the navbar
  const { searchQuery } = useContext(SiteFilter);

  return (
    <Container>
      <Row>
        {brands
          .filter((brand) => {
            return brand.name.toLowerCase().includes(searchQuery);
          })
          .map((brand) => {
            return (
              <Col md={4} key={brand.id}>
                <BrandItem brand={brand} likesRecord={likesRecord} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}

export default BrandList;
