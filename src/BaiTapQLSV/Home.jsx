import React, { Component } from "react";
import FormSinhVien from "./FormSinhVien";
import SinhVienList from "./SinhVienList";

const initialForm = {
  maSV: "",
  phone: "",
  name: "",
  email: "",
}

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {     
      dssv: [],
      isEdit: false,
      formSv: {
        values: {
          maSV: "",
          phone: "",
          name: "",
          email: "",
        },
        errors: {
          maSV: "",
          phone: "",
          name: "",
          email: "",
        },
        valid: false,
      }
    };
  }
  
  checkValid = () => {
    let { values, errors } = this.state.formSv;
    for (let key in errors) {
      if (errors[key] !== "" || values[key] === "") {
        return false;
      }
    }
    return true;
  };

  handleInputChange = (e) => {
    const { value, id } = e.target; //id ='price' value='1000'
    const type = e.target.getAttribute("data-type");
    
    let newValues = this.state.formSv.values;
    newValues[id] = value;

    let newErrors = this.state.formSv.errors;

    let messError = "";
    if (value.trim() === "") {
      messError = id + " cannot be blank !";
    } else {
      if (type === "number") {
        let regexNumber = /^\d+$/;
        if (!regexNumber.test(value)) {
          messError = id + " must be numbers!";
        }
      }
      //
      if (type === "email") {
        let regexNumber = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!regexNumber.test(value)) {
          messError = id + " is invalid !";
        }
      }
      if (type === "name") {
        let regexNumber =
          /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/;
        if (!regexNumber.test(value)) {
          messError = id + " must be letters!";
        }
      }
    }
    newErrors[id] = messError;

    this.setState(
      { 
        ...this.state,
        formSv: {
          ...this.state.formSv,
          values: newValues,
          errors: newErrors,
        }
      },
      () => {
        let valid = this.checkValid();
        this.setState({
          ...this.state,
          formSv: {
            ...this.state.formSv,
            valid
          }
        });
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.checkValid()) {
      return;
    }
    this.addSV(this.state.formSv.values);
  };

  addSV = (sv) => {
    let newds = this.state.dssv;
    newds.push({...sv});
    this.setState({
        dssv: newds
    })
  }

  handleEditSv = (sv) => {
    this.setState(
      {
        ...this.state,
        isEdit: true,
        formSv: {
          ...this.state.formSv,
          values: {...sv}
        }
      }
    )
  }

  handleUpdateSv = (e) => {
    e.preventDefault();
    if (!this.checkValid()) {
      return;
    }
    const svIndex = this.state.dssv.findIndex((sv) => {
      return sv.maSV === this.state.formSv.values.maSV
    })
    if (svIndex >= 0) {
      const newDssv = [...this.state.dssv];
      newDssv[svIndex] = {
        ...this.state.formSv.values
      }
      this.setState({
        ...this.state,
        dssv: newDssv,
        isEdit: false,
      })
    }
  }

  handleRemoveSv = (objSv) => {
    const svIndex = this.state.dssv.findIndex((sv) => {
      return sv.maSV === objSv.maSV
    })

    if (svIndex !== -1) {
      const newDssv = [...this.state.dssv];
      newDssv.splice(svIndex, 1);
      this.setState(
        {
          ...this.state,
          dssv: newDssv
        }
      )
    }
  }

  resetForm = () => {
    this.setState(
      {
        ...this.state,
        formSv: {
          values: {...initialForm},
          errors: {...initialForm}
        }, 
      }
    )
  }
  componentDidMount() {
    // Get local storage
    if (localStorage.getItem("SinhVien List")) {
      var dataString = localStorage.getItem("SinhVien List");
      // convert string to jason
      this.setState({
        ...this.state,
        dssv: JSON.parse(dataString)
    })
  }
  }

  componentDidUpdate() {
    // Set local storage
    var dataString = JSON.stringify(this.state.dssv);
    localStorage.setItem("SinhVien List", dataString);
  }

  render() {
    return (
      <div>
        <FormSinhVien resetForm={this.resetForm} isEdit={this.state.isEdit} updateSv={this.handleUpdateSv} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} formSv={this.state.formSv}/>
        <SinhVienList handleRemoveSv={this.handleRemoveSv} handleEditSv={this.handleEditSv} ds={this.state.dssv}/>
      </div>
    );
  }
}
