import React from "react";
import Adminnav from "../../comps/Adminnav";

const category = () => {
  return (
    <>
      <main className="main">
        <Adminnav />
        <section class="table">
          <div class="d-flex">
            <button
              data-toggle="modal"
              data-target="#exampleModal"
              class="catbut"
            >
              <img src="/asset/icons/adminicon/add.svg" alt="" /> new category
            </button>
          </div>
          <div class="table__cont container-fluid">
            <div class="table__head">
              <div>
                <div class="table__head--phone">
                  <h6>Category</h6>
                </div>
              </div>
              <div>
                <div class="table__head--des">
                  <h6>time</h6>
                </div>
              </div>
            </div>

            <div class="shadow-sm table__body">
              <div>
                <div class="table__head--phone">
                  <p>09076176485</p>
                </div>
              </div>

              <div>
                <div class="table__head--indus">
                  <p>food beverages</p>
                </div>
              </div>
            </div>
            <div class="shadow-sm table__body">
              <div>
                <div class="table__head--phone">
                  <p>09076176485</p>
                </div>
              </div>

              <div>
                <div class="table__head--indus">
                  <p>food beverages</p>
                </div>
              </div>
            </div>
            <div class="shadow-sm table__body">
              <div>
                <div class="table__head--phone">
                  <p>09076176485</p>
                </div>
              </div>

              <div>
                <div class="table__head--indus">
                  <p>food beverages</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- modal --> */}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-lg modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                {/* <!-- <div class="spinner-grow m-auto d-block"></div> --> */}
                <form action="">
                  <label for="" class="col-form-label">
                    New Category
                  </label>
                  <input type="text" class="form-control" name="" id="" />
                  <button
                    type="button"
                    class="d-block w-100 ml-auto my-3 btn btn-danger"
                    data-dismiss="modal"
                  >
                    submit
                  </button>
                </form>
              </div>
              <div class="modal-footer"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default category;
