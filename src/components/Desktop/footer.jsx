import React from "react";
import FooterLogo from "../../payapi-multi-page-website/starter-code/assets/shared/desktop/logo.svg";
import FacebookLogo from "../../payapi-multi-page-website/starter-code/assets/shared/desktop/facebook.svg";
import TwitterLogo from "../../payapi-multi-page-website/starter-code/assets/shared/desktop/twitter.svg";
import LinkedinLogo from "../../payapi-multi-page-website/starter-code/assets/shared/desktop/linkedin.svg";

export default function footer() {
  return (
    <div className="footerDiv1">
      <div className="footerDiv2">
        <footer className="footerDiv3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="135"
            height="38"
            viewBox="0 0 135 38"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M134.657 8.59019V5.29419H133.441V8.59019H134.657ZM50.544 33.9342V26.0942H50.608C51.1627 26.9049 51.872 27.5182 52.736 27.9342C53.6 28.3502 54.544 28.5582 55.568 28.5582C56.784 28.5582 57.8453 28.3235 58.752 27.8542C59.6587 27.3849 60.416 26.7555 61.024 25.9662C61.632 25.1769 62.0853 24.2702 62.384 23.2462C62.6827 22.2222 62.832 21.1555 62.832 20.0462C62.832 18.8729 62.6827 17.7475 62.384 16.6702C62.0853 15.5929 61.6267 14.6489 61.008 13.8382C60.3893 13.0275 59.6107 12.3769 58.672 11.8862C57.7333 11.3955 56.6133 11.1502 55.312 11.1502C54.288 11.1502 53.3493 11.3529 52.496 11.7582C51.6427 12.1635 50.9387 12.8142 50.384 13.7102H50.32V11.5982H46V33.9342H50.544ZM54.352 25.1662C53.6267 25.1662 53.008 25.0169 52.496 24.7182C51.984 24.4195 51.5733 24.0302 51.264 23.5502C50.9547 23.0702 50.7307 22.5102 50.592 21.8702C50.4533 21.2302 50.384 20.5795 50.384 19.9182C50.384 19.2355 50.448 18.5742 50.576 17.9342C50.704 17.2942 50.9227 16.7289 51.232 16.2382C51.5413 15.7475 51.9467 15.3475 52.448 15.0382C52.9493 14.7289 53.5733 14.5742 54.32 14.5742C55.0453 14.5742 55.6587 14.7289 56.16 15.0382C56.6613 15.3475 57.072 15.7529 57.392 16.2542C57.712 16.7555 57.9413 17.3262 58.08 17.9662C58.2187 18.6062 58.288 19.2569 58.288 19.9182C58.288 20.5795 58.224 21.2302 58.096 21.8702C57.968 22.5102 57.7493 23.0702 57.44 23.5502C57.1307 24.0302 56.7253 24.4195 56.224 24.7182C55.7227 25.0169 55.0987 25.1662 54.352 25.1662ZM73.2418 28.1102C72.2605 28.4089 71.2578 28.5582 70.2338 28.5582C69.4445 28.5582 68.7085 28.4622 68.0258 28.2702C67.3432 28.0782 66.7458 27.7795 66.2338 27.3742C65.7218 26.9689 65.3218 26.4569 65.0338 25.8382C64.7458 25.2195 64.6018 24.4835 64.6018 23.6302C64.6018 22.6915 64.7672 21.9182 65.0978 21.3102C65.4285 20.7022 65.8552 20.2169 66.3778 19.8542C66.9005 19.4915 67.4978 19.2195 68.1698 19.0382C68.8418 18.8569 69.5192 18.7129 70.2018 18.6062C70.8845 18.4995 71.5565 18.4142 72.2178 18.3502C72.8792 18.2862 73.4658 18.1902 73.9778 18.0622C74.4898 17.9342 74.8952 17.7475 75.1938 17.5022C75.4925 17.2569 75.6312 16.8995 75.6098 16.4302C75.6098 15.9395 75.5298 15.5502 75.3698 15.2622C75.2098 14.9742 74.9965 14.7502 74.7298 14.5902C74.4632 14.4302 74.1538 14.3235 73.8018 14.2702C73.4498 14.2169 73.0712 14.1902 72.6658 14.1902C71.7698 14.1902 71.0658 14.3822 70.5538 14.7662C70.0418 15.1502 69.7432 15.7902 69.6578 16.6862H65.1138C65.1778 15.6195 65.4445 14.7342 65.9138 14.0302C66.3832 13.3262 66.9805 12.7609 67.7058 12.3342C68.4312 11.9075 69.2472 11.6035 70.1538 11.4222C71.0605 11.2409 71.9725 11.1502 72.8898 11.1502C73.7218 11.1502 74.5645 11.2089 75.4178 11.3262C76.2712 11.4435 77.0498 11.6729 77.7538 12.0142C78.4578 12.3555 79.0338 12.8302 79.4818 13.4382C79.9298 14.0462 80.1538 14.8515 80.1538 15.8542V24.4622C80.1538 25.2089 80.1965 25.9235 80.2818 26.6062C80.3672 27.2889 80.5165 27.8009 80.7298 28.1422H76.1218C76.0365 27.8862 75.9672 27.6249 75.9138 27.3582C75.8605 27.0915 75.8232 26.8195 75.8018 26.5422C75.0765 27.2889 74.2232 27.8115 73.2418 28.1102ZM71.9298 25.5502C71.5672 25.5502 71.2152 25.5182 70.8738 25.4542C70.5325 25.3902 70.2338 25.2782 69.9778 25.1182C69.7218 24.9582 69.5192 24.7395 69.3698 24.4622C69.2205 24.1849 69.1458 23.8435 69.1458 23.4382C69.1458 23.0115 69.2205 22.6595 69.3698 22.3822C69.5192 22.1049 69.7165 21.8755 69.9618 21.6942C70.2072 21.5129 70.4952 21.3689 70.8258 21.2622C71.1565 21.1555 71.4925 21.0702 71.8338 21.0062C72.1965 20.9422 72.5592 20.8889 72.9218 20.8462C73.2845 20.8035 73.6312 20.7502 73.9618 20.6862C74.2925 20.6222 74.6018 20.5422 74.8898 20.4462C75.1778 20.3502 75.4178 20.2169 75.6098 20.0462V21.7422C75.6098 21.9982 75.5832 22.3395 75.5298 22.7662C75.4765 23.1929 75.3325 23.6142 75.0978 24.0302C74.8632 24.4462 74.5005 24.8035 74.0098 25.1022C73.5192 25.4009 72.8258 25.5502 71.9298 25.5502ZM89.5397 33.0702C88.665 33.6462 87.449 33.9342 85.8917 33.9342C85.4224 33.9342 84.9584 33.9182 84.4997 33.8862C84.041 33.8542 83.577 33.8169 83.1077 33.7742V30.0302C83.5344 30.0729 83.9717 30.1155 84.4197 30.1582C84.8677 30.2009 85.3157 30.2115 85.7637 30.1902C86.361 30.1262 86.8037 29.8915 87.0917 29.4862C87.3797 29.0809 87.5237 28.6329 87.5237 28.1422C87.5237 27.7795 87.4597 27.4382 87.3317 27.1182L81.5397 11.5982H86.3717L90.1157 22.9262H90.1797L93.7957 11.5982H98.4997L91.5877 30.1902C91.097 31.5342 90.4144 32.4942 89.5397 33.0702ZM104.59 28.5262C105.379 28.5262 106.104 28.4302 106.766 28.2382C107.427 28.0462 108.019 27.7795 108.542 27.4382C109.064 27.0969 109.507 26.7075 109.87 26.2702C110.232 25.8329 110.51 25.3689 110.702 24.8782H110.766V25.7422C110.766 26.0835 110.792 26.3982 110.846 26.6862C110.899 26.9742 111 27.2249 111.15 27.4382C111.299 27.6515 111.518 27.8222 111.806 27.9502C112.094 28.0782 112.483 28.1422 112.974 28.1422C113.315 28.1422 113.646 28.0995 113.966 28.0142V26.9902C113.582 27.0542 113.283 27.0862 113.07 27.0862C112.792 27.0862 112.579 27.0275 112.43 26.9102C112.28 26.7929 112.174 26.6382 112.11 26.4462C112.046 26.2542 112.008 26.0409 111.998 25.8062C111.987 25.5715 111.982 25.3369 111.982 25.1022V15.5342C111.982 14.2755 111.528 13.2569 110.622 12.4782C109.715 11.6995 108.27 11.3102 106.286 11.3102C104.302 11.3102 102.771 11.7635 101.694 12.6702C100.616 13.5769 100.035 14.9369 99.9495 16.7502H101.166C101.251 15.2782 101.747 14.1795 102.654 13.4542C103.56 12.7289 104.75 12.3662 106.222 12.3662C107.054 12.3662 107.758 12.4515 108.334 12.6222C108.91 12.7929 109.379 13.0275 109.742 13.3262C110.104 13.6249 110.371 13.9662 110.542 14.3502C110.712 14.7342 110.798 15.1502 110.798 15.5982C110.798 16.1742 110.766 16.6542 110.702 17.0382C110.638 17.4222 110.478 17.7369 110.222 17.9822C109.966 18.2275 109.587 18.4195 109.086 18.5582C108.584 18.6969 107.896 18.7982 107.022 18.8622L105.134 19.0222C104.472 19.0862 103.784 19.1929 103.07 19.3422C102.355 19.4915 101.704 19.7422 101.118 20.0942C100.531 20.4462 100.046 20.9262 99.6615 21.5342C99.2775 22.1422 99.0855 22.9262 99.0855 23.8862C99.0855 25.4649 99.5655 26.6329 100.526 27.3902C101.486 28.1475 102.84 28.5262 104.59 28.5262ZM101.454 26.5902C102.222 27.1769 103.278 27.4702 104.622 27.4702C106.008 27.4702 107.107 27.2195 107.918 26.7182C108.728 26.2169 109.347 25.6409 109.774 24.9902C110.2 24.3395 110.472 23.7102 110.59 23.1022C110.707 22.4942 110.766 22.0835 110.766 21.8702V18.7982C110.467 19.1609 110.014 19.4062 109.406 19.5342C108.798 19.6622 108.12 19.7582 107.374 19.8222L105.326 20.0142C104.728 20.0782 104.131 20.1689 103.534 20.2862C102.936 20.4035 102.398 20.6009 101.918 20.8782C101.438 21.1555 101.048 21.5342 100.75 22.0142C100.451 22.4942 100.302 23.1182 100.302 23.8862C100.302 25.1022 100.686 26.0035 101.454 26.5902ZM117.111 34.0302V24.7182H117.175C117.666 26.0622 118.445 27.0329 119.511 27.6302C120.578 28.2275 121.794 28.5262 123.159 28.5262C124.418 28.5262 125.511 28.3129 126.439 27.8862C127.367 27.4595 128.135 26.8675 128.743 26.1102C129.351 25.3529 129.805 24.4515 130.103 23.4062C130.402 22.3609 130.551 21.2089 130.551 19.9502C130.551 18.7982 130.402 17.6995 130.103 16.6542C129.805 15.6089 129.351 14.6915 128.743 13.9022C128.135 13.1129 127.367 12.4835 126.439 12.0142C125.511 11.5449 124.418 11.3102 123.159 11.3102C122.263 11.3102 121.469 11.4489 120.775 11.7262C120.082 12.0035 119.49 12.3502 118.999 12.7662C118.509 13.1822 118.114 13.6355 117.815 14.1262C117.517 14.6169 117.303 15.0649 117.175 15.4702H117.111V11.6942H115.895V34.0302H117.111ZM120.263 26.8462C121.042 27.2622 122.007 27.4702 123.159 27.4702C124.226 27.4702 125.149 27.2675 125.927 26.8622C126.706 26.4569 127.346 25.9129 127.847 25.2302C128.349 24.5475 128.722 23.7529 128.967 22.8462C129.213 21.9395 129.335 20.9742 129.335 19.9502C129.335 19.0115 129.218 18.0889 128.983 17.1822C128.749 16.2755 128.386 15.4649 127.895 14.7502C127.405 14.0355 126.77 13.4595 125.991 13.0222C125.213 12.5849 124.269 12.3662 123.159 12.3662C122.071 12.3662 121.143 12.5795 120.375 13.0062C119.607 13.4329 118.983 13.9982 118.503 14.7022C118.023 15.4062 117.677 16.2115 117.463 17.1182C117.25 18.0249 117.143 18.9689 117.143 19.9502C117.143 20.9315 117.239 21.8755 117.431 22.7822C117.623 23.6889 117.949 24.4889 118.407 25.1822C118.866 25.8755 119.485 26.4302 120.263 26.8462ZM133.441 11.6942H134.657V28.1422H133.441V11.6942Z"
              fill="#FBFCFE"
            />
            <circle
              cx="19.1421"
              cy="4.99996"
              r="3"
              transform="rotate(45 19.1421 4.99996)"
              fill="#FBFCFE"
            />
            <circle
              cx="26.2133"
              cy="12.071"
              r="3"
              transform="rotate(45 26.2133 12.071)"
              fill="#FBFCFE"
            />
            <circle
              cx="33.2843"
              cy="19.1422"
              r="3"
              transform="rotate(45 33.2843 19.1422)"
              fill="#FBFCFE"
            />
            <circle
              cx="12.071"
              cy="12.071"
              r="3"
              transform="rotate(45 12.071 12.071)"
              fill="#FBFCFE"
            />
            <circle
              opacity="0.5"
              cx="19.1421"
              cy="19.1422"
              r="3"
              transform="rotate(45 19.1421 19.1422)"
              fill="#FBFCFE"
            />
            <circle
              opacity="0.5"
              cx="26.2133"
              cy="26.2132"
              r="3"
              transform="rotate(45 26.2133 26.2132)"
              fill="#FBFCFE"
            />
            <circle
              cx="5"
              cy="19.1422"
              r="3"
              transform="rotate(45 5 19.1422)"
              fill="#FBFCFE"
            />
            <circle
              opacity="0.5"
              cx="12.071"
              cy="26.2132"
              r="3"
              transform="rotate(45 12.071 26.2132)"
              fill="#FBFCFE"
            />
            <circle
              opacity="0.25"
              cx="19.1421"
              cy="33.2843"
              r="3"
              transform="rotate(45 19.1421 33.2843)"
              fill="#FBFCFE"
            />
          </svg>
          <nav className="footerNav">
            <ul className="nav-links2">
              <li>
                <a className="linki2" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="linki2" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="linki2" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </footer>
        <div className="footerDiv4">
          <img src={FacebookLogo} alt="" />
          <img src={TwitterLogo} alt="" />
          <img src={LinkedinLogo} alt="" />
        </div>
      </div>
    </div>
  );
}