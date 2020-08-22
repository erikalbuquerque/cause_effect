import React, { useState } from "react";

import { Link } from "react-router-dom";

import List from "../List"

import "./styles.css";

function Item({ people }){
  const [toggle, setToggle] = useState(false); 
  function handleShow(){
    !toggle ? setToggle(true) : setToggle(false);
  }
  return(
    <List>
      {toggle ? (
        <li>
          <Link to="/" onClick={() => handleShow()} style={{color: '#3d7e9a'}}>
            {people.name}
          </Link>
          <div className="toggle">
            {toggle ? (
              <List>
                <li>
                  <Link to={`/${people.street}`}>{people.street}</Link>
                </li>
                <li>
                  <Link to={`/${people.city}`}>{people.city}</Link>
                </li>
                <li>
                  <Link to={`/${people.state}`}>{people.state}</Link>
                </li>
                <li>
                  <Link to={`/${people.country}`}>{people.country}</Link>
                </li>
                <li>
                  <Link to={`/${people.telephone}`}>{people.telephone}</Link>
                </li>
                <li>
                  <Link to={`/${people.birthday}`}>{people.birthday}</Link>
                </li>
              </List>
              ) : ""}
          </div>
        </li>
      ): (
      <li>
        <Link to="/" onClick={() => handleShow()}>
          {people.name}
        </Link>
        <div className="toggle">
          {toggle ? (
            <List>
              <li>
                <Link to={`/${people.street}`}>{people.street}</Link>
              </li>
              <li>
                <Link to={`/${people.city}`}>{people.city}</Link>
              </li>
              <li>
                <Link to={`/${people.state}`}>{people.state}</Link>
              </li>
              <li>
                <Link to={`/${people.country}`}>{people.country}</Link>
              </li>
              <li>
                <Link to={`/${people.telephone}`}>{people.telephone}</Link>
              </li>
              <li>
                <Link to={`/${people.birthday}`}>{people.birthday}</Link>
              </li>
            </List>
          ) : ""}
        </div>
      </li>
      )}
      
    </List>
  )
}
export default Item;