import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "Laptop",
    description: "Machine to write code",
    price: 50000,
  },
  {
    id: 2,
    title: "Table",
    description: "To rest your machine stable",
    price: 3000,
  },
  {
    id: 3,
    title: "Wifi-Router",
    description: "Device to connect to the Internet",
    price: 4000,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
