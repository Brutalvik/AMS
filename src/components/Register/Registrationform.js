import Form from "react-bootstrap/Form";
import classes from "./Register.module.css";

const Registrationform = (props) => {
  return (
    <div className={classes.form_container}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            name="name"
            type="text"
            placeholder="Name"
            className={classes.input_container}
            value={props.userData.name || ""}
            onChange={props.handleChange}
          />
          <Form.Text className={classes.error}>
            {!props.userData.name && props.status.message.error}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            name="email"
            type="email"
            placeholder="Email"
            className={classes.input_container}
            value={props.userData.email || ""}
            onChange={props.handleChange}
          />
          <Form.Text className={classes.error}>
            {!props.userData.email && props.status.message.error}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            className={classes.input_container}
            value={props.userData.password || ""}
            onChange={props.handleChange}
          />
          <Form.Text className={classes.error}>
            {!props.userData.password && props.status.message.error}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className={classes.labeltext}>Date of Birth</Form.Label>
          <Form.Control
            name="dob"
            type="date"
            className={classes.input_container}
            value={props.userData.dob || ""}
            onChange={props.handleChange}
          />
          <Form.Text className={classes.error}>
            {!props.userData.dob && props.status.message.error}
          </Form.Text>
        </Form.Group>
        <button
          className={`btn btn-primary ${classes.button}`}
          onClick={props.handleClick}
        >
          Register
        </button>
      </Form>
    </div>
  );
};

export default Registrationform;
