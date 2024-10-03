import React from "react";

export default function CardHeader() {
  return (
    <div className="wrapper">
      <div className="cardHeader row">
        <div className="cardHeader__logo col-3">
          <img
            src="https://card.starbucks.vn/static/media/new-logo.2fec2102.png"
            alt=""
            className="cardHeader__logo-img"
          />
        </div>
        <div className="cardHeader__navbar col-9">
          <ul className="cardHeader__navbar-item">
            <li>
              <a href="#">Starbucks eGift</a>
            </li>
            <li>
              <a href="#">Quyền lợi</a>
            </li>
            <li>
              <a href="#">Ứng dụng điện thoại</a>
            </li>
            <li>
              <a href="#">Các mẫu thẻ</a>
            </li>
            <div className="buttons">
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALmSURBVHgBzVe7khJBFD09LEK2hBuOVWuVgVX6BwuazEayX7CYmblmWrrLKzAUvgD2C8REycDQaDEzIBj/gBDKGtp7ex4Mj5npgbH0VDF0T/W99/Ttvo8B/jEE9kHbKkOK54Cs0sx0NYkJJMbIyy7eDm1dVekJtM4/kuGrGJUzejRx87UDDeSQBi2rR8+XK1u0Yyk+0+A7jU/oTYl+RfpZeHoKjKbfklTqe6Bt1cnFDVeK3H0kL7Zc3bJq9KwjOBZUcD0cx6k1oIOGZQbGAXunccbNsI+ccRF6U0cC9AgYKIdmzdhL9u4LXUbRVWNJch+IfKxqHUjxJBjzLpNgyEEw/r1Gfk8CkCVvYGstdzTX6RPwIUpay3LeJVQiKiwPJMC3XoE8wUkoCRKXwfhITnAwgWWh7yUYVt5DoxrtiYa6dDU1ZuIJWVEzDAczSNn1ZiZyi9HO283eMTAK5iuZSKRLxe3zO1K6igghBljKH/R/DEHvZejGSwrX+rCRpDIdAXa9mHdI6jJB7WvdWrB/NYR45e44FKJcF+7JTppqeDjYK3GX8n/Hfkfgg3demLu7XxRnKlr+KgE2aCxqJHW2cf6eNop7Ibkzuk0qw+kJqH5AXG0ZjYYN1RnFF69kApzZcuLTWvxzVuRuSOUANkQ1QlKCMuTjtVzgru1QJm1GHY9INO5mNtN7Y4N3tSwOIs+bZQSlYkFh6nuLj8YpVHbJCG3j3GTIQkP7om3Ks8euh5XNZdFN6bMHLPzQNa7S6huMf86hi/F0hrNHtzAci2Ynikj5lGhMx+Fluz3gNpc9NTbQx/vhC+wLFTnzO/ieyON+OFNGVUO/mbTJR00cAj4ygdUGnPVGdZuA23CY3qyZSV7nnMB3gLEU1XDq3iYQ7mbynlAm8DpljgxjXo0mILwOmBlnWdWcwjgYh7rsXR4wPQI2soQbvrZnxIwm4CcPB7+QNfwO2cBxNAH1VUMLDTFB1uAixVgi+Gj9A7jT/Wsa/ElmAAAAAElFTkSuQmCC"
                  alt=""
                />

                {/*  */}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
