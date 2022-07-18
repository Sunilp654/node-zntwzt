import React from 'react';
import { Card } from 'react-bootstrap';
const Cards = ({ datafind }) => {
  return (
    <>
      {/* <section className="main-card--cointainer">
                  {dataprop.map((post, index) => {
                    return (
                      <>
                        <Col md={4} className="mb-2 producthover" id={index}>
                          <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={post.image} />
                            <Card.Body>
                              <Card.Title className="d-flex justify-content-between">
                                {`${post.title.substring(0, 15)}...`}
                                <span style={{ paddingLeft: '25px', color: 'blue' }}>
                                  {post.price}
                                  {' $'}
                                </span>
                              </Card.Title>
                              <Card.Text>{`${post.description.substring(
                                0,
                                50
                              )}...`}</Card.Text>
                              <Row className="d-flex flex-row">
                                <Col md={6} xs={6}>
                                  <Button variant="primary">Add To Cart</Button>
                                </Col>
                                <Col md={6} xs={6}>
                                  <Button variant="dark">Add To WishList</Button>
                                </Col>
                              </Row>
                            </Card.Body>
                          </Card>
                        </Col>
                      </>
                    );
                  })}
                </section> */}
    </>
  );
};
export default Cards;
