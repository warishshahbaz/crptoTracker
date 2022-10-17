import React from "react";
import Search from "./Search";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useGlobleContext } from "./ContextApi";
import Pagination from "./Pagination";

const Home = () => {
  let {
    state,
    filterdSearch,
    DataperPage,
    page,
    indexOfFirstPost,
    indexOfLastPost,
  } = useGlobleContext();

  return (
    <>
      <section className="container">
        <Search />
        <Table bordered hover size="sm" responsive className="tables_container">
          <thead >
            <tr>
              <th>Company</th>
              <th>Name</th>
              <th>Change_Percentage</th>
              <th>Current_Price</th>
              <th>Last_Updated</th>
            </tr>
          </thead>
          <tbody>
            {filterdSearch
              .slice(indexOfFirstPost, indexOfLastPost)
              .map((ele, idx) => {
                const {
                  id,
                  name,
                  image,
                  current_price,
                  ath_change_percentage,
                  last_updated,
                } = ele;
                return (
                  <tr key={id}>
                    <td>
                      <img src={image} alt="logo" height={30} />
                    </td>
                    <td>{name}</td>
                    <td>
                      {ath_change_percentage < 0 ? (
                        <p className="priceChange_red">
                          {ath_change_percentage.toFixed(2)}%
                        </p>
                      ) : (
                        <p className="priceChange_green">
                          {ath_change_percentage.toFixed(2)}%
                        </p>
                      )}
                    </td>
                    <td>{current_price}</td>
                    <td>{last_updated}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </section>
      <Pagination />
    </>
  );
};

export default Home;
