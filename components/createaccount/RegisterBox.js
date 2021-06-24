// Displays the registering portion where user inputs their information

import classes from "./RegisterBox.module.css";

function RegisterBox({ dispatchForm, formState }) {
  return (
    <>
      <div className={`${classes.firstName} ${classes.inputBox}`}>
        <span className={`paragraph-smaller`}>First Name</span>
        <input
          type="text"
          className={classes.input}
          onChange={(e) =>
            dispatchForm({ type: "FIRST_NAME", val: e.target.value })
          }
        />
      </div>
      <div className={`${classes.lastName} ${classes.inputBox}`}>
        <span className={`paragraph-smaller`}>Last Name</span>
        <input
          type="text"
          className={classes.input}
          onChange={(e) =>
            dispatchForm({ type: "LAST_NAME", val: e.target.value })
          }
        />
      </div>

      <div className={`${classes.email} ${classes.inputBox}`}>
        <span className={`paragraph-smaller`}>Email</span>
        <input
          type="email"
          className={classes.input}
          onChange={(e) => dispatchForm({ type: "EMAIL", val: e.target.value })}
        />
      </div>
      <div className={`${classes.password} ${classes.inputBox}`}>
        <span className={`paragraph-smaller`}>Password</span>
        <input
          type="password"
          className={classes.input}
          onChange={(e) =>
            dispatchForm({ type: "PASSWORD", val: e.target.value })
          }
        />
      </div>
      <div className={`${classes.passwordConfirm} ${classes.inputBox}`}>
        <span className={`paragraph-smaller`}>Confirm Password</span>
        <input
          type="password"
          className={classes.input}
          onChange={(e) =>
            dispatchForm({ type: "CONFIRM_PASSWORD", val: e.target.value })
          }
        />
      </div>
    </>
  );
}

export default RegisterBox;
