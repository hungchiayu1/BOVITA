// Displays the registering portion where user inputs their information

import classes from "./RegisterBox.module.css";

function RegisterBox({ dispatchForm, formState }) {
  return (
    <div>
      <div className={classes.name}>
        <div className={classes.leftText}>
          <span className={classes.nameText}>First Name</span>
          <input
            type="text"
            className={
              formState.firstNameValid === false
                ? `${classes.incorrect} ${classes.nameInput}`
                : classes.nameInput
            }
            onChange={(e) =>
              dispatchForm({ type: "FIRST_NAME", val: e.target.value })
            }
          />
        </div>
        <div className={classes.rightText}>
          <span className={classes.nameText}>Last Name</span>
          <input
            type="text"
            className={
              formState.lastNameValid === false
                ? `${classes.incorrect} ${classes.nameInput}`
                : classes.nameInput
            }
            onChange={(e) =>
              dispatchForm({ type: "LAST_NAME", val: e.target.value })
            }
          />
        </div>
      </div>
      <div className={classes.email}>
        <span className={classes.emailText}>Email</span>
        <input
          className={
            formState.emailValid === false
              ? `${classes.incorrect} ${classes.emailInput}`
              : classes.emailInput
          }
          onChange={(e) => dispatchForm({ type: "EMAIL", val: e.target.value })}
        />
      </div>
      <div className={classes.password}>
        <div className={classes.leftText}>
          <span className={classes.passwordOne}>Password</span>
          <input
            type="password"
            className={
              formState.passwordValid === false
                ? `${classes.incorrect} ${classes.nameInput}`
                : classes.nameInput
            }
            onChange={(e) =>
              dispatchForm({ type: "PASSWORD", val: e.target.value })
            }
          />
        </div>
        <div className={classes.rightText}>
          <span className={classes.passwordTwo}>Confirm Password</span>
          <input
            type="password"
            className={
              formState.confirmPasswordValid === false
                ? `${classes.incorrect} ${classes.nameInput}`
                : classes.nameInput
            }
            onChange={(e) =>
              dispatchForm({ type: "CONFIRM_PASSWORD", val: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default RegisterBox;
