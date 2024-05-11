import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { FaArrowRight } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import saleBannerImage from "./images/sale-banner.png";
import { BiSolidBellRing } from "react-icons/bi";
import bannerImage from "./images/banner-image.jpeg";
import bed from "./images/bed.png";
import sofa from "./images/sofa.jpeg";
import decor from "./images/decor.jpeg";
import lamp from "./images/lamp.jpeg";
import shelf from "./images/shelf.jpeg";
import dresser from "./images/dresser.jpeg";
import sofaProduct from "./images/sofa-product.jpeg";
import tableProduct from "./images/table-product.jpeg";
import chairProduct from "./images/chair-product.jpeg";
import quoteBannerImage from "./images/quote-banner.png";
import { FaStar } from "react-icons/fa";

let saleBannerColorList = ["yellow", "black", "green"];
let elevationProductsList = [
  {
    name: "Comfortable Sofa",
    image: sofaProduct,
    colors: ["black", "yellow", "brown", "grey"],
    price: "$80.99",
  },
  {
    name: "Elegant Side Table",
    image: tableProduct,
    colors: ["black", "yellow", "brown", "grey"],
    price: "$80.99",
  },
  {
    name: "Classy Padded Chair",
    image: chairProduct,
    colors: ["black", "yellow", "brown", "grey"],
    price: "$80.99",
  },
];

let collectionsList = [
  {
    name: "Bed",
    image: bed,
  },
  {
    name: "Shelf",
    image: shelf,
  },
  {
    name: "Dresser",
    image: dresser,
  },
  {
    name: "Lamp",
    image: lamp,
  },
  {
    name: "Decor",
    image: decor,
  },
  {
    name: "Sofa",
    image: sofa,
  },
];

// let allProductsList = [
//   {
//     name: "Comfortable Sofa",
//     image: sofaProduct,
//     colors: ["black", "yellow", "brown", "grey"],
//     price: "$80.99",
//   },
//   {
//     name: "Elegant Side Table",
//     image: tableProduct,
//     colors: ["black", "yellow", "brown", "grey"],
//     price: "$80.99",
//   },
//   {
//     name: "Classy Padded Chair",
//     image: chairProduct,
//     colors: ["black", "yellow", "brown", "grey"],
//     price: "$80.99",
//   },
// ];

function App() {
  return (
    <>
      <div className="promotion">
        <BiSolidBellRing className="bell-icon" />
        Enjoy 30% off - Shop Now and Save Big!
      </div>
      <Navbar collapseOnSelect expand="lg">
        <Nav className="justify-content-left">
          <Navbar.Brand href="#">furniLux</Navbar.Brand>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center" style={{ flex: 1 }}>
            <Nav.Item>
              <Nav.Link href="#">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Categories</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">About Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Pages</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#">Contact Us</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="justify-content-left">
            <Nav.Item>Login </Nav.Item>
            <Nav.Item
              style={{
                padding: "0px 10px",
              }}
            >
              |
            </Nav.Item>
            <Nav.Item className="signUp">SignUp</Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <section>
        <div className="head-text">
          <div className="head-image">
            <img
              style={{
                width: "100%",
                height: 520,
              }}
              src={bannerImage}
              alt="Banner"
            />
          </div>
          <p className="heading-text">
            FurniLux - Your Brand for Stylist Living
          </p>
          <p className="description-text">
            Discover a fusion of modern design and functionality, crafted to
            elevate every cornet your living space. Furnitux, redefining stylish
            living for you.
          </p>
          <Button variant="outline-primary">
            Shop Now
            <FaArrowRight className="right-icon" />
          </Button>
        </div>
      </section>
      <div className="collection-loop">
        {collectionsList.map((collection, index) => (
          <span
            className="cards"
            style={
              index === 0
                ? {
                    backgroundColor: "#dbf2ea",
                  }
                : {
                    backgroundColor: "white",
                  }
            }
          >
            {" "}
            <img
              src={collection.image}
              alt={collection.image}
              className="collection-image"
            />
            {collection.name}
          </span>
        ))}
      </div>
      <h2 className="elevation-text">Elevate Your Living Room</h2>
      <br />
      <br />
      <div className="container">
        {elevationProductsList.map((product, index) => (
          <Card
            style={
              index === 0
                ? {
                    width: "18rem",
                    display: "inline-block",
                    margin: 5,
                  }
                : {
                    width: "18rem",
                    display: "inline-block",
                    margin: 5,
                  }
            }
          >
            <Card.Img
              variant="top"
              style={{
                height: "300px",
              }}
              src={product.image}
            />
            <Card.Body>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {product.colors.map((color) => (
                  <div
                    className="numberCircle"
                    style={{
                      backgroundColor: color,
                    }}
                  ></div>
                ))}
              </div>
              <TiShoppingCart
                style={{
                  float: "right",
                }}
              />
              <h6>{product.name}</h6>

              <h6 className="price-prod">{product.price}</h6>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="sale-banner" style={{}}>
        <img
          src={saleBannerImage}
          style={{
            float: "right",
            zIndex: 1,
            position: "relative",
          }}
          alt=""
        />

        <h2 className="sale-banner-head">Luxurious Bed</h2>
        <p className="sale-banner-text">
          Discover unparallel comfort with our
          <br />
          Luxorious Bed, Elegant Design,
          <br />
          plush comfort
          <p className="sale-banner-price">$ 299</p>
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {saleBannerColorList.map((color) => (
            <div
              className="numberCircle"
              style={{
                backgroundColor: color,
              }}
            ></div>
          ))}
        </div>
        <Button variant="primary">
          Buy Now
          <FaArrowRight className="right-icon" />
        </Button>
      </div>
      <h2 className="elevation-text">All Products</h2>
      <br />
      <br />
      <div className="container">
        {elevationProductsList.map((product, index) => (
          <Card
            style={
              index === 0 || index === 3
                ? {
                    width: "18rem",
                    display: "inline-block",
                    margin: 5,
                  }
                : {
                    width: "18rem",
                    display: "inline-block",
                    margin: 5,
                  }
            }
          >
            <Card.Img
              variant="top"
              style={{
                height: "300px",
              }}
              src={product.image}
            />
            <Card.Body>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {product.colors.map((color) => (
                  <div
                    className="numberCircle"
                    style={{
                      backgroundColor: color,
                    }}
                  ></div>
                ))}
              </div>
              <TiShoppingCart
                style={{
                  float: "right",
                }}
              />
              <h6>{product.name}</h6>
              <h6>{product.price}</h6>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="container">
        {elevationProductsList.map((product, index) => (
          <Card
            style={
              index === 0 || index === 3
                ? {
                    width: "18rem",
                    display: "inline-block",
                    margin: 5,
                  }
                : {
                    width: "18rem",
                    display: "inline-block",
                    margin: 5,
                  }
            }
          >
            <Card.Img
              variant="top"
              style={{
                height: "300px",
              }}
              src={product.image}
            />
            <Card.Body>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {product.colors.map((color) => (
                  <div
                    className="numberCircle"
                    style={{
                      backgroundColor: color,
                    }}
                  ></div>
                ))}
              </div>
              <TiShoppingCart
                style={{
                  float: "right",
                }}
              />
              <h6>{product.name}</h6>
              <h6>{product.price}</h6>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="container">
        {elevationProductsList.map((product, index) => (
          <Card
            style={
              index === 0 || index === 3
                ? {
                    width: "18rem",
                    display: "inline-block",
                    margin: 5,
                  }
                : {
                    width: "18rem",
                    display: "inline-block",
                    margin: 5,
                  }
            }
          >
            <Card.Img
              variant="top"
              style={{
                height: "300px",
              }}
              src={product.image}
            />
            <Card.Body>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {product.colors.map((color) => (
                  <div
                    className="numberCircle"
                    style={{
                      backgroundColor: color,
                    }}
                  ></div>
                ))}
              </div>
              <TiShoppingCart
                style={{
                  float: "right",
                }}
              />
              <h6>{product.name}</h6>
              <h6>{product.price}</h6>
            </Card.Body>
          </Card>
        ))}
      </div>

      <div className="review-banner">
        <img
          src={quoteBannerImage}
          style={{
            float: "right",
            height: "100%",
          }}
          alt=""
        />
        <p style={{}} className="review-banner-text">
          <br /> "Incredibly happy with my new sofa!
          <br /> Stylish, comfortable, and exceeded my
          <br /> expectations. Seamless purchase and
          <br /> prompt delivery. Highly recommend!"
        </p>
        <p className="review-banner-name">Marie Elisa</p>
        <div className="review-banner-card">
          <img className="review-banner-card-image" src={chairProduct} alt="" />
          <p className="review-banner-card-text">
            Stylish Chair
            <br />
            $99.99
            <br />
            <span className="rating-icons">
              {[...Array(5)].map((i) => (
                <FaStar key={i} />
              ))}
            </span>
          </p>
        </div>
      </div>
      <h2 className="elevation-text">Blogs & Insights</h2>
      <p className="blogs-textline">
        Explore Our Blog for Design Inspiration and Tips
      </p>
    </>
  );
}

export default App;
