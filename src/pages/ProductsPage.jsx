import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router-dom";
import ProductList from "../components/Product/ProductList";
import { useProducts } from "../contexts/ProductContext";
// import "./pages.css";

const ProductsPage = () => {
  const { products, getProducts } = useProducts();
  const [page, setPage] = useState(0);

  const productPerPage = 8;

  const location = useLocation();

  const pageCount = Math.ceil(products.length / productPerPage);

  const pageVisited = page * productPerPage;

  const paginateProducts = products.slice(
    pageVisited,
    pageVisited + productPerPage
  );

  const changePage = ({ selected }) => {
    setPage(selected);
  };

  useEffect(() => {
    getProducts();
  }, [location.search]);

  return (
    <div>
      <ProductList products={paginateProducts} />
      <ReactPaginate
        previousLabel="< previous"
        nextLabel="next >"
        onPageChange={changePage}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        previousLinkClassName="previousBtn"
        nextLinkClassName="nextBtn"
        activeClassName="activeBtn"
        disabledClassName="disabledBtn"
      />
    </div>
  );
};

export default ProductsPage;
