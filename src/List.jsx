import React from "react";
function List() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-12 col-lg-12">
            <li className="list-item">
              <div className="d-flex justify-content-between">
                <h3 className="text-light">Missio:fail</h3>
                <button className="btn btn-secondary btn-sm">
                  Launches detlies
                </button>
              </div>
              <p className="text-light">Date:05/02/2024</p>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
