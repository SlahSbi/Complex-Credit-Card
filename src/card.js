import React from 'react';
import ReactDOM from 'react-dom';


function  Card(props) {
    return(<div className="carte_1"> 
               <h1>CREDIT CARD</h1>
               <div className="chip"><img src={require("./chip.png")} alt=""/></div>
               <div className="menu">
                    <div className="section_1">
                         <p className="num_card">{props.a}</p>
                         <div className="child_section_1">
                              <div className="code">5422</div>
                              <div className="child_child_section_1">
                                   <div className="parent_valid_date">
                                        <div className="valid_date">
                                             <div>VALID</div>
                                             <div>THRU</div>
                                        </div> 
                                        <i className="fas fa-caret-right"></i>
                                   </div> 
                                   <div className="date1">
                                        <div>MONTH/YEAR</div>
                                        <div className="num">{props.b}</div>
                                   </div>  
                              </div>   
                          </div>
                          <div className="text">{props.c}</div>        
                    </div>
                    <div className="section_2">
                        <div className="master"><img src={require("./master.png")} alt=""/></div>
                        <div className="visa"><img src={require("./visa.png")} alt=""/></div>
                    </div> 
               </div>
           </div>)
  }

 

    export default Card;
