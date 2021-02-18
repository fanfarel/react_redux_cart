import React from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";

const OrderForm = (props) => {
  const onSubmit = (values) => {
    console.log({ ...props.cartProduct, ...values });
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field name="name" component="input" placeholder="Name" />
          </div>
          <div>
            <Field name="Surname" component="input" placeholder="Surname" />
          </div>
          <div>
            <Field name="Adress" component="input" placeholder="Adress" />
          </div>
          <div>
            <Field name="Phone" component="input" placeholder="Phone" />
          </div>
          <button type="submit">submit</button>
        </form>
      )}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    cartProduct: state.cartReducer
  };
};

export default connect(mapStateToProps, null)(OrderForm);
