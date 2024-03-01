import React, { useState, useEffect } from "react";
import EmptyFile from "../Common/Empty/EmptyFile";
import { useParams } from "react-router-dom";
import HeadTitle from "../Common/HeadTitle/HeadTitle";
import "./singlepage.css";

const SinglePage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  return (
    <>
      <HeadTitle />

      {item ? (
        <section className="single-page top">
          <div className="container">
            {/* --------- main-content--------- */}

            <article className="content flex">
              <div className="main-content">
                <img src={item.image} alt="" />
                <p>{item.desc}</p>
                <p>{item.desc}</p>

                <div className="para flex_space">
                  <p>{item.sidepara}</p>
                  <p>{item.sidepara}</p>
                </div>
                <h1>Whta is the {item.title} City ?</h1>
                <p>{item.desc}</p>

                <div className="image grid1 ">
                  <img src={item.paraImage_one} alt="" />
                  <img src={item.paraImage_two} alt="" />
                </div>
                <p>{item.desc}</p>
              </div>
              {/* --------- main-content--------- */}

              {/* --------- side-content--------- */}
              <div className="side-content">
                <div className="box">
                  <h2>How can we help you?</h2>
                  <p>{item.sidepara}</p>
                  <button className="outline-btn">
                    <i className="fa fa-phone-alt"></i> Contact Us
                  </button>
                </div>

                <div className="box2">
                  <p>{item.sidepara}</p>
                </div>
              </div>
              {/* --------- side-content--------- */}
            </article>
          </div>
        </section>
      ) : (
        <EmptyFile />
      )}
    </>
  );
};

export default SinglePage;
