import React, { useEffect, useState } from "react";
import Detail from "../../utils/skeleton/Detail";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/slice/CartSlice";
import { productsFetch } from "../../redux/slice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../../context/Status";
import { addToWishList } from "../../redux/slice/WishListSlice";

const MainProducts = () => {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products);
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    dispatch(productsFetch());
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  if (status === STATUS.LOADING) {
    return <Detail />;
  }
  if (status !== STATUS.LOADING && status === STATUS.ERROR) {
    return <h2>{status}</h2>;
  }

  return (
    <>
      <div className="card-body">
        <div className="row">
          {products?.products?.map((item, index) => {
            return (
              <>
                <div className="col-md-3 mb-3" key={item.id + index * item.id}>
                  <div className="card">
                    <Link to="/shop-details" state={{ data: item }}>
                      <img
                        className="card-img-top"
                        style={{ height: "160px", width: "" }}
                        src={item.thumbnail}
                        alt=""
                      />
                    </Link>
                    <div className="card-body">
                      <p className="h6">
                        <small className="text-muted">{item.brand}</small>
                        <br />
                        {item.title}
                      </p>
                      {item.rating <= 4.5 ? (
                        <p className="m-0">
                          <i className="fa-xs fa fa-star" />
                          <i className="fa-xs fa fa-star" />
                          <i className="fa-xs fa fa-star" />
                          <i className="fa-xs fa fa-star" />
                          <i className="fa fa-star-o" />
                        </p>
                      ) : (
                        <p className="m-0">
                          <i className="fa-xs fa fa-star" />
                          <i className="fa-xs fa fa-star" />
                          <i className="fa-xs fa fa-star" />
                          <i className="fa-xs fa fa-star" />
                          <i className="fa-xs fa fa-star" />
                        </p>
                      )}
                      <p className="h5 m-0">${item.price}</p>
                    </div>
                    <div className="card-footer p-0">
                      <div className="btn-group" role="group">
                        <button
                          type="button"
                          className="btn btn-light"
                          onClick={() => {
                            dispatch(addToCart(item));
                          }}
                        >
                          <span>Add Cart</span>
                        </button>
                        <button type="button" className="btn btn-light">
                          <i
                            style={{ color: "#EC473F" }}
                            className="fa fa-shopping-cart"
                          />
                        </button>
                        <button
                          type="button"
                          className="btn btn-light"
                          onClick={() => {
                            dispatch(addToWishList(item));
                          }}
                        >
                          <i
                            style={{ color: "#EC473F" }}
                            className="fa fa-heart"
                          />
                        </button>

                        <button type="button" className="btn btn-light">
                          <i
                            style={{ color: "#EC473F" }}
                            className="fa fa-exchange"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <button
        id="button"
        className={showButton ? "show" : ""}
        onClick={handleButtonClick}
      >
        Scroll to Top
      </button>
    </>
  );
};

export default MainProducts;
