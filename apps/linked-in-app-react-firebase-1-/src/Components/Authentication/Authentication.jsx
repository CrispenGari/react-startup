import React from "react";
import { Button, TextField } from "@material-ui/core";
import "./Authentication.css";
import { auth, googleProvider } from "../../backend/firebase";
const Authentication = () => {
  const [error, setError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [hasAccount, setHasAccount] = React.useState(true);

  const loginWithEmail = (e) => {
    e.preventDefault();

    if (email && password) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((authUser) => {
          // authUser
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          setError(error.message);

          setPassword("");
        })
        .finally(() => {
          //
        });
    }
  };
  const googleSignIn = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        //
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        //
      });
  };
  const createUserWithEmail = (e) => {
    e.preventDefault();

    if (password === password2) {
      auth
        .createUserWithEmailAndPassword(email, password || password2)
        .then((authUser) => {
          setEmail("");
          setPassword("");
          setPassword2("");
        })
        .catch((error) => {
          setError(error.message);
          setPassword("");
          setPassword2("");
        })
        .finally(() => {
          //
        });
    } else {
      setError("The two password does't match try again*");
      setPassword("");
      setPassword2("");
    }
  };

  if (hasAccount) {
    return (
      <div className="authentication">
        <div className="authentication__top">
          <div className="authentication__topLogo">
            <h1>Linked</h1>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAe7X///8AcK/Y7PQAdrJ4rtCVwty92+uozeFJmMSkzOIAb64AerQAeLMAdLEAcrDt9voAgLyx0uXN4+/0+vxop80njL4ch7xVocuexd3B2+s9lMRsq9AAfLPf7vUGhL2GudiLvNjV5fBSm8ZGkMB7s9MAaKuewNpjosqn0eWDu9i+3+4+e2cMAAAFAElEQVR4nO2d63LaOhRGJSMuBkk2tsExYAMBn6bp+7/f4ZqExFJzeoRU9nxrptMf2FOtkbylrUvF+JXeaDavGQnKpyp/82KXvxfxVCvJKCjWNZNiusxuDNOVUhTk3qhrKZ6ad8OmFCRq7xa9zq+GzVTV9AQZUzo/G6alCl2W+1DLde9kuBIUK/CE2hUHw4Ui+A1eEaODYUwrit6i5pz1poQFGZsu2EiHLsRdERs2IxpIL8iYzWXoQtwVVRKOoyfqyx+60LYDAAAAAAAAAAAAAAAAAL6HZEJH0SRKNNHVK6XZ7jXLn/NxuxSC4AKWXm+a676qIp8JavUoJ6uUfySfJ6HL5BQVZfwzq4RQS1Vq+EWQ85bOhgApxh2CnM/IKOpVpyCd3WOyTrsNeTYJXTY3JAODIOdE9nUkjdFwTOJLVEujIG9E6NK5QLdmQ04i1nR09u88UajEpKu3v7KiYBjZDPvkDWcUDHVlMVxSiDRiZhYsGIUuX5Vmw5xGkjjJjYZEEihzM00VhUZ6IFmYqpBGIz18ifvu9CmnM+OmO9tpQ2JQeqEry0/nFHr7N6Ld54aaS1KCh4Baj4uPLbSlNJd4Run5oHeqyCLN+2tNTvCAStT8pd9f7UpN0u+EElprOn0EAODvIZmYue31teXJz4N0KYVIouj4UxTpoAuu+nVs5OfuY8n0bGR8ctR/TyWl0pEo9y/97eD0WzVoZ/tSRTpQMhaZcqcjN3NtkXmBg/MsujylhIrbrJcWNz8XaZP19ypIXX5/NtFqODobHoZG215heKZ4bssAGz1cGspknZn0LpLjdWQqyQMYqsS2BnJloD1nLe4MpRx9Q/CQuMR+J7icGUphW+P5SNH3mps5M7SsJX9hE3lUdGU4mX9fkPPWY7xxZfiPrV/9you/cOPIcGxZHOgi3XtTdGRY/fhvhh5nY13VoXn1w4C3GXVHhrlp25GRtPZUiY4M/4DKUzwNZ1h4+hLDGfLWTzgNaPhM3tDTRoiQhgMvSUZIw570EWtCGhZ7H800pKGfcU1Qw6GPTj+oYUP9O+RF6UExqKGXRDis4dZDqHFtWDSLUVVV42HznXxq7CHUuDVstjETyREt5+3zb59fPJhhsdHJex+ukujFfJbjTPpYhvn600yvFEn3obF3POSI7gzz+usYTEa/men3sHnOmWFRdkV+KexTVB4SKGeGm87AL0VsXW97eRzD1LTaYj2U4+NEhyvDganvFrHtte39k2BHhsXOVBmytnUZHtJ8R4ap8R+Q2rZmM77/sM3VnLf5e9Jby3vZwxgOzSW1ncqxvfeXGWbm4ZfYWd779TCGI4uhLZjm9x+YwhCG/9OwR/47hCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxh+IvnZM9Lc3PeUvDbmJwdmQxWb3+t5OFHCdGLm9jCTsDxpO4KmLO/R+//7AQAAAAAAAAAAAAAAAAAAAADAJXXoAtwd2oYHuzJ0Ge5MyZ6IL/3HrBKkm6lqWT6lbFirIeNL0s20LBjPPF+36xVRccb5k9/rdj1Sq2VxNGzWkuanWMtpzo+GPNeSYr9fy9M+yqMhz9chbmm/N2p62ijKzrs2d0Fuor8jNRPL800ZZ0NejOZTIVVNorEeJJQqq8s9Gext9+1iE1MZo5ZxO3y7B+RfrxZu+tPvXXgAAAAASUVORK5CYII="
              alt=""
            />
          </div>

          <h1>Welcome Back</h1>
          <p>
            Don't miss your next opportunity. Sign in to stay updated on your
            professional world.
          </p>
          <form className="authentication__form">
            <TextField
              id="outlined-password-input"
              label="Email or Phone"
              type="text"
              autoComplete="current-email"
              variant="outlined"
              className="authentication__input"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              className="authentication__input"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <small className="authentication__error">{error}</small>
            <label htmlFor="check" className="authentication__rememberMe">
              <input type="checkbox" name="" id="check" />
              <p>
                Remember me.
                <span>Learn More</span>
              </p>
            </label>
            <Button
              onClick={loginWithEmail}
              className="authentication__signInBtn"
              type="submit"
            >
              Sign in
            </Button>
            <Button
              className="authentication__signInBtn"
              onClick={googleSignIn}
            >
              Sign in With Google
            </Button>
            <Button className="authentication__forgetPBtn">
              Fogot Password
            </Button>
            <p>
              New to LinkedIn?{" "}
              <span onClick={() => setHasAccount(false)}>Join now</span>
            </p>
          </form>
        </div>
        <div className="authentication__bottom"></div>
      </div>
    );
  } else {
    return (
      <div className="authentication">
        <div className="authentication__top">
          <div className="authentication__topLogo">
            <h1>Linked</h1>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAe7X///8AcK/Y7PQAdrJ4rtCVwty92+uozeFJmMSkzOIAb64AerQAeLMAdLEAcrDt9voAgLyx0uXN4+/0+vxop80njL4ch7xVocuexd3B2+s9lMRsq9AAfLPf7vUGhL2GudiLvNjV5fBSm8ZGkMB7s9MAaKuewNpjosqn0eWDu9i+3+4+e2cMAAAFAElEQVR4nO2d63LaOhRGJSMuBkk2tsExYAMBn6bp+7/f4ZqExFJzeoRU9nxrptMf2FOtkbylrUvF+JXeaDavGQnKpyp/82KXvxfxVCvJKCjWNZNiusxuDNOVUhTk3qhrKZ6ad8OmFCRq7xa9zq+GzVTV9AQZUzo/G6alCl2W+1DLde9kuBIUK/CE2hUHw4Ui+A1eEaODYUwrit6i5pz1poQFGZsu2EiHLsRdERs2IxpIL8iYzWXoQtwVVRKOoyfqyx+60LYDAAAAAAAAAAAAAAAAAL6HZEJH0SRKNNHVK6XZ7jXLn/NxuxSC4AKWXm+a676qIp8JavUoJ6uUfySfJ6HL5BQVZfwzq4RQS1Vq+EWQ85bOhgApxh2CnM/IKOpVpyCd3WOyTrsNeTYJXTY3JAODIOdE9nUkjdFwTOJLVEujIG9E6NK5QLdmQ04i1nR09u88UajEpKu3v7KiYBjZDPvkDWcUDHVlMVxSiDRiZhYsGIUuX5Vmw5xGkjjJjYZEEihzM00VhUZ6IFmYqpBGIz18ifvu9CmnM+OmO9tpQ2JQeqEry0/nFHr7N6Ld54aaS1KCh4Baj4uPLbSlNJd4Run5oHeqyCLN+2tNTvCAStT8pd9f7UpN0u+EElprOn0EAODvIZmYue31teXJz4N0KYVIouj4UxTpoAuu+nVs5OfuY8n0bGR8ctR/TyWl0pEo9y/97eD0WzVoZ/tSRTpQMhaZcqcjN3NtkXmBg/MsujylhIrbrJcWNz8XaZP19ypIXX5/NtFqODobHoZG215heKZ4bssAGz1cGspknZn0LpLjdWQqyQMYqsS2BnJloD1nLe4MpRx9Q/CQuMR+J7icGUphW+P5SNH3mps5M7SsJX9hE3lUdGU4mX9fkPPWY7xxZfiPrV/9you/cOPIcGxZHOgi3XtTdGRY/fhvhh5nY13VoXn1w4C3GXVHhrlp25GRtPZUiY4M/4DKUzwNZ1h4+hLDGfLWTzgNaPhM3tDTRoiQhgMvSUZIw570EWtCGhZ7H800pKGfcU1Qw6GPTj+oYUP9O+RF6UExqKGXRDis4dZDqHFtWDSLUVVV42HznXxq7CHUuDVstjETyREt5+3zb59fPJhhsdHJex+ukujFfJbjTPpYhvn600yvFEn3obF3POSI7gzz+usYTEa/men3sHnOmWFRdkV+KexTVB4SKGeGm87AL0VsXW97eRzD1LTaYj2U4+NEhyvDganvFrHtte39k2BHhsXOVBmytnUZHtJ8R4ap8R+Q2rZmM77/sM3VnLf5e9Jby3vZwxgOzSW1ncqxvfeXGWbm4ZfYWd779TCGI4uhLZjm9x+YwhCG/9OwR/47hCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxh+IvnZM9Lc3PeUvDbmJwdmQxWb3+t5OFHCdGLm9jCTsDxpO4KmLO/R+//7AQAAAAAAAAAAAAAAAAAAAADAJXXoAtwd2oYHuzJ0Ge5MyZ6IL/3HrBKkm6lqWT6lbFirIeNL0s20LBjPPF+36xVRccb5k9/rdj1Sq2VxNGzWkuanWMtpzo+GPNeSYr9fy9M+yqMhz9chbmm/N2p62ijKzrs2d0Fuor8jNRPL800ZZ0NejOZTIVVNorEeJJQqq8s9Gext9+1iE1MZo5ZxO3y7B+RfrxZu+tPvXXgAAAAASUVORK5CYII="
              alt=""
            />
          </div>

          <h1>Welcome Linked In</h1>
          <p>
            Don't miss your next opportunity. Create an Account to stay updated
            on your professional world.
          </p>
          <form className="authentication__form">
            <TextField
              id="outlined-password-input"
              label="Email or Phone"
              type="text"
              autoComplete="current-email"
              variant="outlined"
              className="authentication__input"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              className="authentication__input"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              className="authentication__input"
              onChange={(e) => setPassword2(e.target.value)}
              value={password2}
            />
            <small className="authentication__error">{error}</small>
            <label htmlFor="check" className="authentication__rememberMe">
              <input type="checkbox" name="" id="check" />
              <p>
                Remember me.
                <span>Learn More</span>
              </p>
            </label>
            <Button
              onClick={createUserWithEmail}
              className="authentication__signInBtn"
              type="submit"
            >
              Sign Up
            </Button>
            <Button
              className="authentication__signInBtn"
              onClick={googleSignIn}
            >
              Sign in With Google
            </Button>
            <Button className="authentication__forgetPBtn">
              Fogot Password
            </Button>
            <p>
              Aready a member to LinkedIn?{" "}
              <span onClick={() => setHasAccount(!false)}>Login</span>
            </p>
          </form>
        </div>
        <div className="authentication__bottom"></div>
      </div>
    );
  }
};

export default Authentication;
