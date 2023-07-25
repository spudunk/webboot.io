import * as React from "react";
import { useState } from "react";
export const WBLogo = (props) => {
  const randomColor = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ` +
    `${Math.floor(Math.random() * 256)}, `+ 
    `${Math.floor(Math.random() * 256)})`;
  };
  const changeFill = (e) => {
    e.stopPropagation();
    e.preventDefault();
    e.target.style.fill = randomColor();
    // setIsClicked((s) => !s);
  };

  return (
    <svg viewBox="0 0 219 152" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        onClick={changeFill}
        onMouseOver={changeFill}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.1418 130.791C37.5952 123.275 21.4862 109.332 0.842366 86.9439L9.85157 78.6367C30.2235 100.73 45.3938 113.662 56.4392 120.278C67.83 127.102 72.8986 126.136 74.8986 124.873C77.3167 123.345 79.5182 118.991 80.021 110.574C80.4942 102.653 79.3283 93.0651 77.3515 84.1113L75.282 74.7376L84.6557 76.8071C93.6095 78.7839 103.198 79.9498 111.118 79.4766C119.535 78.9738 123.889 76.7723 125.417 74.3542C126.681 72.3542 127.646 67.2855 120.823 55.8948C114.206 44.8494 101.275 29.6791 79.1811 9.30715L87.4883 0.297937C109.877 20.9418 123.82 37.0508 131.335 49.5973C138.644 61.7985 141 72.6343 135.777 80.9003C130.818 88.7481 120.808 91.1742 111.849 91.7094C105.266 92.1027 98.0306 91.5504 91.0092 90.4647C92.0949 97.4861 92.6471 104.721 92.2538 111.304C91.7186 120.263 89.2926 130.273 81.4447 135.232C73.1788 140.455 62.3429 138.1 50.1418 130.791Z"
      />
      <path
        onClick={changeFill}
        onMouseOver={changeFill}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M150.665 43.611C155.781 41.6004 163.89 40.51 175.365 40.51V50.7221C164.2 50.7221 157.673 51.8295 154.399 53.1157C154.354 53.1333 154.311 53.1507 154.268 53.1679C154.353 53.2254 154.441 53.2841 154.534 53.3439C155.704 54.0986 157.361 54.8972 159.469 55.6242C163.681 57.0765 169.262 58.0927 175.365 58.0927V68.3048C169.313 68.3048 163.779 69.4042 159.602 70.975C157.513 71.7607 155.87 72.6246 154.704 73.4444C154.259 73.7577 153.923 74.036 153.674 74.2694C153.902 74.3952 154.187 74.5371 154.543 74.6897C157.757 76.0672 164.221 77.2738 175.365 77.2738V87.4859C163.869 87.4859 155.697 86.2948 150.52 84.0759C147.941 82.9704 145.474 81.343 144.044 78.8553C142.437 76.0582 142.627 73.0458 143.849 70.5473C144.959 68.2757 146.862 66.4751 148.83 65.0912C149.683 64.4912 150.611 63.9255 151.6 63.396C150.675 62.9359 149.805 62.4457 149 61.927C147.056 60.6735 145.097 58.9983 143.93 56.8096C142.609 54.3302 142.395 51.2586 144.145 48.4668C145.639 46.084 148.15 44.5991 150.665 43.611Z "
      />

      <path
        onClick={changeFill}
        onMouseOver={changeFill}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M180.87 40.51H185.977C197.451 40.51 205.56 41.6004 210.677 43.611C213.192 44.5991 215.702 46.084 217.196 48.4668C218.946 51.2586 218.733 54.3302 217.411 56.8096C216.244 58.9983 214.285 60.6735 212.341 61.927C211.536 62.4457 210.666 62.9359 209.741 63.396C210.73 63.9255 211.659 64.4912 212.512 65.0912C214.479 66.4751 216.382 68.2757 217.493 70.5473C218.714 73.0458 218.905 76.0582 217.297 78.8553C215.867 81.343 213.4 82.9704 210.821 84.0759C205.645 86.2948 197.472 87.4859 185.977 87.4859 H180.871L180.87 40.51Z
        M191.083 57.8552C195.17 57.4734 198.869 56.6597 201.872 55.6242C203.981 54.8972 205.637 54.0986 206.808 53.3439C206.9 53.2841 206.989 53.2254 207.073 53.1679C207.03 53.1507 206.987 53.1333 206.942 53.1157C204.203 52.0396 199.187 51.0887 191.083 50.8067L191.083 57.8552Z
        M191.083 68.5661C195.119 68.981 198.772 69.859 201.739 70.975C203.828 71.7607 205.471 72.6246 206.637 73.4444C207.083 73.7577 207.418 74.036 207.667 74.2694C207.44 74.3952 207.154 74.5371 206.798 74.6897C204.111 75.8416 199.151 76.8739 191.083 77.1812L191.083 68.5661Z"
      />

      <path
        onClick={changeFill}
        onMouseOver={changeFill}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M117.355 125.271C121.425 125.271 125.525 121.674 125.525 116.226C125.525 112.055 122.728 108.931 117.355 108.931C111.982 108.931 109.185 112.055 109.185 116.226C109.185 121.674 113.285 125.271 117.355 125.271ZM117.355 135.483C127.507 135.483 135.737 126.861 135.737 116.226C135.737 105.59 127.507 98.7193 117.355 98.7193C107.203 98.7193 98.9731 105.59 98.9731 116.226C98.9731 126.861 107.203 135.483 117.355 135.483Z"
      />
      <path
        onClick={changeFill}
        onMouseOver={changeFill}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M158.204 125.271C162.273 125.271 166.373 121.674 166.373 116.226C166.373 112.055 163.577 108.931 158.204 108.931C152.83 108.931 150.034 112.055 150.034 116.226C150.034 121.674 154.134 125.271 158.204 125.271ZM158.204 135.483C168.356 135.483 176.586 126.861 176.586 116.226C176.586 105.59 168.356 98.7193 158.204 98.7193C148.052 98.7193 139.822 105.59 139.822 116.226C139.822 126.861 148.052 135.483 158.204 135.483Z"
      />
      <path
        onClick={changeFill}
        onMouseOver={changeFill}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M191.904 111.995H180.67V101.783H213.349V111.995H202.116V135.483H191.904V111.995Z"
      />
    </svg>
  );
};
