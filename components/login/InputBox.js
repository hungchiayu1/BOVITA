// InputBox in LoginMenu to hold email input and password input
import { Mail, Lock } from "react-feather";

import classes from "./InputBox.module.css";

function InputBox({
  setEmail,
  setPassword,
  wrongEmail,
  wrongPassword,
  handleKeyPress,
}) {
  return (
    <>
      <div className={classes.emailAll}>
        <div className={classes.emailText}>Email</div>
        <div className={classes.emailInput}>
          <Mail className={classes.emailIcon} size={15} strokeWidth={1} />
          <input
            onChange={(e) =>
              setEmail({ type: "USER_INPUT", val: e.target.value })
            }
            className={classes.emailEnter}
            onKeyPress={(e) => {
              handleKeyPress(e, "/brandpage");
            }}
          />
        </div>
      </div>
      <div className={classes.passwordAll}>
        <div className={classes.passwordText}>Password</div>
        <div className={classes.passwordInput}>
          <Lock className={classes.passwordIcon} size={13} strokeWidth={1} />
          <input
            onChange={(e) =>
              setPassword({ type: "USER_INPUT", val: e.target.value })
            }
            className={classes.passwordEnter}
            type="password"
            onKeyPress={(e) => {
              handleKeyPress(e, "/brandpage");
            }}
          />
        </div>
        <span
          className={wrongPassword === false ? classes.correct : classes.wrong}
        >
          Wrong Password
        </span>
        <span
          className={wrongEmail === false ? classes.correct : classes.wrong}
        >
          Wrong Email
        </span>
      </div>
    </>
  );
}

export default InputBox;
