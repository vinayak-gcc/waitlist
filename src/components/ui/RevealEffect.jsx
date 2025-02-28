import React from 'react';
import styled from 'styled-components';

const Button1 = ({ text = "Button" }) => {
  return (
    <StyledWrapper>
      <button className="btn-cssbuttons">
        <span>{text}</span>
        <span></span>
        <ul>
          <li>
            <p>{text}</p>
          </li>
        </ul>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn-cssbuttons {
   position: relative;
   font-family: Roboto, sans-serif;
   font-weight: 500;
   font-size: 16px;
   line-height: 1;
   color: white;
   background: none;
   border: none;
   outline: none;
   overflow: hidden;
   cursor: pointer;
   filter: drop-shadow(0 2px 8px rgba(39, 94, 254, 0.32));
   transition: 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .btn-cssbuttons::before {
   position: absolute;
   content: "";
   top: 0;
   left: 0;
   z-index: -1;
   width: 100%;
   height: 100%;
   background: var(--btn-color);
   border-radius: 24px;
   transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .btn-cssbuttons span,
  .btn-cssbuttons span span {
   display: inline-flex;
   vertical-align: middle;
   transition: 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .btn-cssbuttons span {
   transition-delay: 0.05s;
  }

  .btn-cssbuttons span:first-child {
   padding-right: 7px;
  }

  .btn-cssbuttons span span {
   margin-left: 8px;
   transition-delay: 0.1s;
  }

  .btn-cssbuttons ul {
   position: absolute;
   top: 50%;
   left: 0;
   right: 0;
   display: flex;
   margin: 0;
   padding: 0;
   list-style-type: none;
   transform: translateY(-50%);
  }

  .btn-cssbuttons ul li {
   flex: 1;
  }

  .btn-cssbuttons ul li p {
   display: inline-flex;
   vertical-align: middle;
   transform: translateY(55px);
   transition: 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);  ///Time to increase the animation effect
  }


  .btn-cssbuttons:hover::before {
   transform: scale(1.2);
  }

  .btn-cssbuttons:hover span,
  .btn-cssbuttons:hover span span {
   transform: translateY(-55px);
  }

  .btn-cssbuttons:hover ul li p {
   transform: translateY(0);
  }

  .btn-cssbuttons:hover ul li:nth-child(1) a {
   transition-delay: 0.15s;
  }

  .btn-cssbuttons:hover ul li:nth-child(2) a {
   transition-delay: 0.2s;
  }

  .btn-cssbuttons:hover ul li:nth-child(3) a {
   transition-delay: 0.25s;
  }`;

export default Button1;