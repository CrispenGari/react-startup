import React from "react";
import "./Face.css";
const Face = ({ number, animation }) => {
  switch (animation) {
    case true:
      return (
        <div className="face__animation">
          <img
            src="https://lh3.googleusercontent.com/proxy/VdhCH-YcedKcUuTHc5GcUhJDHOvPSBVyzqktBKQxrzLJwqFh37OYqX5m8m-zHBNlW6kYKnNwQm_RXfhOj8UbiylCeFJGdnI"
            alt="dice -animation"
          />
        </div>
      );
    default:
      break;
  }
  switch (number) {
    case 1:
      return (
        <div className={`face`}>
          <div className="face__dot"></div>
        </div>
      );
    case 2:
      return (
        <div className={`face face__2`}>
          <div className="">
            <div className=""></div>
            <div className="face__dot"></div>
          </div>
          <div className=""></div>

          <div className="">
            <div className="face__dot"></div>
            <div className=""></div>
          </div>
        </div>
      );
    case 3:
      return (
        <div className={`face face__3`}>
          <div className="">
            <div className=""></div>
            <div className="face__dot"></div>
          </div>
          <div className="">
            <div className=""></div>
            <div className="face__dot"></div>
            <div className=""></div>
          </div>
          <div className="">
            <div className="face__dot"></div>
            <div className=""></div>
          </div>
        </div>
      );

    case 4:
      return (
        <div className={`face face__4`}>
          <div className="">
            <div className="face__dot"></div>
            <div className="face__dot"></div>
          </div>
          <div className=""></div>
          <div className="">
            <div className="face__dot"></div>
            <div className="face__dot"></div>
          </div>
        </div>
      );

    case 5:
      return (
        <div className={`face face__5`}>
          <div className="">
            <div className="face__dot"></div>
            <div className="face__dot"></div>
          </div>
          <div className="">
            <div className=""></div>
            <div className="face__dot"></div>
            <div className=""></div>
          </div>
          <div className="">
            <div className="face__dot"></div>
            <div className="face__dot"></div>
          </div>
        </div>
      );

    case 6:
      return (
        <div className={`face face__6`}>
          <div className="">
            <div className="face__dot"></div>
            <div className="face__dot"></div>
          </div>
          <div className="">
            <div className="face__dot"></div>
            <div className="face__dot"></div>
          </div>
          <div className="">
            <div className="face__dot"></div>
            <div className="face__dot"></div>
          </div>
        </div>
      );
    default:
      return <div className="face"></div>;
  }
};

export default Face;
