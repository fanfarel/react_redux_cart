import React from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import styles from "./OrderForm.module.css"

const OrderForm = (props) => {
  const onSubmit = (values) => {
    console.info('Here is order object!')
    console.info({ ...props.cartProduct, ...values });  };
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <div className={styles.containerForm}>
          <form onSubmit={handleSubmit}>
            <h2>CONFIRM YOUR ORDER</h2>
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
            <button type="submit">SUBMIT</button>
          </form>
        </div>
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
