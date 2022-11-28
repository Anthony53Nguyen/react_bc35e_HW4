import React, { Component } from "react";

export default class FormSinhVien extends Component {


  render() {
    const { formSv, handleInputChange, handleSubmit, updateSv, isEdit, resetForm } = this.props;
    return (
      <div className="container mt-3">
        <form className="card" onSubmit={handleSubmit}>
          <div className="card-header text-primary">
            <h4>Thông tin sinh vien</h4>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <p>Ma SV</p>
                  <input
                    disabled={isEdit}
                    className="form-control"
                    name="maSV"
                    value={formSv.values.maSV}
                    id="maSV"
                    onInput={handleInputChange}
                  />
                  {formSv.errors.maSV && (
                    <div className="alert alert-danger mt-2">
                      {formSv.errors.maSV}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <p>So dien thoai</p>
                  <input
                    data-type="number"
                    className="form-control"
                    value={formSv.values.phone}
                    name="phone"
                    id="phone"
                    onInput={handleInputChange}
                  />
                  {formSv.errors.phone && (
                    <div className="alert alert-danger mt-2">
                      {formSv.errors.phone}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p>Ho ten</p>
                  <input
                    data-type="name"
                    className="form-control"
                    value={formSv.values.name}
                    name="name"
                    id="name"
                    onInput={handleInputChange}
                  />
                  {formSv.errors.name && (
                    <div className="alert alert-danger mt-2">
                      {formSv.errors.name}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <p>Email</p>
                  <input
                    data-type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    value={formSv.values.email}
                    onInput={handleInputChange}
                  />
                  {formSv.errors.email && (
                    <div className="alert alert-danger mt-2">
                      {formSv.errors.email}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            {
              !isEdit ? (<button
                className="btn btn-primary mr-5"
                type="submit"
                disabled={!formSv.valid}
              >
                Thêm người dùng
              </button>) : <button className="btn btn-danger mr-5" onClick={updateSv}>Cập nhật</button>

            }

            <button className="btn btn-primary"  onClick={resetForm}>Reset</button>
          </div>

        </form>
      </div>
    );
  }
}
