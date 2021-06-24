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
      <div className={classes.box}>
        <div className={`${classes.text} paragraph-small`}>Email</div>
        <div className={classes.inputBox}>
          <Mail size={15} strokeWidth={1} />
          <input
            onChange={(e) =>
              setEmail({ type: "USER_INPUT", val: e.target.value })
            }
            className={classes.inputField}
            onKeyPress={(e) => {
              handleKeyPress(e, "/brandpage");
            }}
          />
        </div>
      </div>
      <div className={classes.box}>
        <div className={`${classes.text} paragraph-small`}>Password</div>
        <div className={classes.inputBox}>
          <Lock size={15} strokeWidth={1} />
          <input
            onChange={(e) =>
              setPassword({ type: "USER_INPUT", val: e.target.value })
            }
            className={classes.inputField}
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
