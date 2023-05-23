import React from "react";
import Link from "next/link";
import RegisterCharity from "./registerCharityButton";

export default function Hero() {
    
    return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl m-12 font-bold">trustless donations.</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="350"
        data-name="Layer 1"
        viewBox="0 0 896.268 640.726"
      >
        <circle cx="114.399" cy="51" r="51" fill="#ff6584"></circle>
        <path
          fill="#f2f2f2"
          d="M713.423 521.919a75.131 75.131 0 01-74.098-62.755l-.06-.371.239-.287a71.986 71.986 0 009.967-15.702 51.426 51.426 0 01-9.801 8.316l-1.202.8-.07-1.442c-.06-1.244-.09-2.48-.09-3.674a75.765 75.765 0 012.876-20.742c8.72-30.651 10.212-63.566 4.432-97.83a107.231 107.231 0 01-1.483-17.78 105.99 105.99 0 01206.586-33.344l.241.728-.71.288a55.21 55.21 0 01-16.782 4.163 72.001 72.001 0 0018.63 1.79l.662-.023.161.643a106.44 106.44 0 013.16 25.755l-.005.94a47.316 47.316 0 0015.63 35.28 75.108 75.108 0 01-3.505 114.106l-.391.317-.46-.21c-9.672-4.388-16.72-9.17-21.872-14.876a73.222 73.222 0 0013.688 19.838l.728.75-.904.527a75.057 75.057 0 01-37.837 10.218l-.379-.001-.402-.001c-20.337 0-39.612 7.864-52.943 21.612a75.682 75.682 0 01-54.006 22.967z"
        ></path>
        <path
          fill="#3f3d56"
          d="M686.84 640.272a1.356 1.356 0 01-1.34-1.165c-.058-.405-5.7-41.092-.633-95.168 4.68-49.94 19.706-121.87 64.72-180.947a1.356 1.356 0 112.157 1.644c-44.625 58.565-59.53 129.969-64.177 179.556-5.037 53.76.56 94.131.617 94.533a1.357 1.357 0 01-1.344 1.546z"
        ></path>
        <path
          fill="#3f3d56"
          d="M709.343 441.107a1.356 1.356 0 01-.799-2.452 186.848 186.848 0 0141.25-20.999c22.758-8.331 57.365-15.885 92.992-4.546a1.356 1.356 0 11-.822 2.583c-34.897-11.105-68.877-3.677-91.238 4.51a183.779 183.779 0 00-40.588 20.645 1.35 1.35 0 01-.795.259z"
        ></path>
        <path
          fill="#f2f2f2"
          d="M158.558 539.591c-12.647-.023-32.558.998-43.403 6.724a89.88 89.88 0 00-22.492 16.848 108.069 108.069 0 00-7.184 8.216 131.504 131.504 0 01-2.11-65.603 7.375 7.375 0 00-11.474-7.674c-17.62 12.85-28.884 34.625-31.624 56.653-3.49 28.067 4.729 56.351 16.152 82.234l-.004.013c-.02.117-.053.244-.084.37-.042.19-.095.38-.137.571-.075.328-.159.666-.233.994l1.85-.085c.105.053.211.095.316.148h46.327a21.981 21.981 0 001.712-2.114c5.127-7.029 7.251-16.552 9.84-25.145a128.125 128.125 0 017.02-18.159 131.938 131.938 0 0128.653-39.224c.38-.359.772-.718 1.163-1.067 1.993-1.832 5.081-4.283 8.1-6.584a3.962 3.962 0 00-2.388-7.116z"
        ></path>
        <path
          fill="#9e616a"
          d="M471.348 102.785a12.334 12.334 0 01-7.27 15.697 12.118 12.118 0 01-2.064.569l-7.001 42.868-16.423-15.164 9.166-38.383a12.378 12.378 0 0110.843-13.582 12.052 12.052 0 0112.749 7.994z"
        ></path>
        <path d="M350.146 199.919s12.746-16.842 59-16.38L435.399 174l6-55 21 5-3 68-45 26-59 12z"></path>
        <path
          fill="#9e616a"
          d="M279.072 614.545L291.189 619.708 316.872 575.43 298.989 567.809 279.072 614.545z"
        ></path>
        <path
          fill="#9e616a"
          d="M379.2 626.011L392.37 626.01 398.636 575.208 379.197 575.209 379.2 626.011z"
        ></path>
        <path
          fill="#2f2e41"
          d="M378.736 639.75l40.502-.001v-.513a15.765 15.765 0 00-15.765-15.764l-7.399-5.612-13.803 5.613h-3.536zM271.705 623.34l37.26 15.878.2-.471a15.765 15.765 0 00-8.321-20.683h-.001L296.237 610l-14.899-.248-3.252-1.386zM392.12 325.347l20.016 121.884-5.447 18.163 7.148 12.864-10.498 112.97 4.262 9.381-11.906 7.343H371.47l-1.286-102.273-5.984-15.016v-8.276l-12.182-62.363-2.243 71.336-3.544 15.04 2.977 10.708-3.89 7.502-33.33 71.57H284.82l2.101-16.185c-4.867-2.465 7.308-9.667 8.477-14.995l-4-9 4-17 3.668-33.218-3.868-70.119 1.82-94.423 31.778-24.3z"
        ></path>
        <circle
          cx="343.373"
          cy="137.381"
          r="27.453"
          fill="#9e616a"
          data-name="ab6171fa-7d69-4734-b81c-8dff60f9761b"
        ></circle>
        <path
          fill="#9e616a"
          d="M295.672 375.905a10.803 10.803 0 00-5.91-15.475l-.065-38.39-16.636 11.01 2.612 34.769a10.862 10.862 0 0019.999 8.086z"
        ></path>
        <path
          fill="#000"
          d="M446 335.677l-7.432-7.164-5.46 3.94s-5.371 6.447-9.668 25.784 0 125.695 0 125.695l23.635-3.223-3.223-55.864 9.669-47.27z"
          data-name="f348f81f-b961-4ae4-bc6b-758f6acfb12a"
          transform="translate(-151.866 -129.637)"
        ></path>
        <path d="M283.16 200.624l25.04-11.96 17-15.769 31-.232 10 13 26.4 8.968-4.4 91.032 3 7s-2.09 1.888-3.046 2.944 1.32 9.897 1.32 9.897l1.282 9.618-3.557 2.541 4.624 5.462 1.148 8.61s-80.715-20.062-95.966 13.172c-.806 1.756 1.178-15.405 1.178-15.405l1.985-12.563-1.969-11.276-3-3 5.032-5.031-3.226-23.874z"></path>
        <path
          fill="#ffb6b6"
          d="M544.516 614.005L529.657 614.005 522.586 556.692 544.516 556.692 544.516 614.005z"
        ></path>
        <path
          fill="#2f2e41"
          d="M552.359 639.75h-10.656l-1.902-10.06-4.871 10.06h-28.262a6.353 6.353 0 01-3.61-11.58l22.569-15.588v-10.17l23.739 1.416z"
        ></path>
        <path
          fill="#ffb6b6"
          d="M689.025 584.524L676.244 592.103 640.927 546.414 659.79 535.228 689.025 584.524z"
        ></path>
        <path
          fill="#2f2e41"
          d="M708.902 602.667l-9.165 5.436-6.767-7.683.941 11.138-24.308 14.416a6.353 6.353 0 01-9.013-8.12l11.462-24.919-5.188-8.748 21.14-10.89z"
        ></path>
        <path
          fill="#ffb6b6"
          d="M537.884 247.55L530.664 293.582 599.261 294.484 590.235 250.258 537.884 247.55z"
        ></path>
        <path
          fill="#2f2e41"
          d="M530.4 293l-19.593 47.517-1.428 127.07 16.72 121.327h18.503l7.58-119.348 18.647-81.663 18.39 85.41 57.18 83.601h28.098L622.84 464.79l-5.979-100.354s3.726-42.572-15.344-67.694l-4.642-13.41z"
        ></path>
        <path
          fill="#ffb6b6"
          d="M626.37 327.692a13.541 13.541 0 01-8.677-18.864l-29.182-95.14 21.465-4.256 26.69 93.258a13.614 13.614 0 01-10.297 25.002z"
        ></path>
        <path d="M591.75 280.972l-51.286-23.913a6.182 6.182 0 01-5.86-4.657c-2.534-10.037-8.111-21.193-5.153-47.244a37.991 37.991 0 0143.181-33.234 38.008 38.008 0 0131.376 47.278c-5.952 22.604-5.314 46.775-5.993 56.065a6.168 6.168 0 01-4.94 5.588 6.15 6.15 0 01-1.194.118l-.131-.001z"></path>
        <path
          fill="#ffb6b6"
          d="M481.327 121.183a13.267 13.267 0 01-1 1.834l24.522 57.501 15.074 1.85.182 23.113-27.002-.68a10.084 10.084 0 01-9.495-7.504L465.43 128.54a13.232 13.232 0 1115.896-7.356z"
        ></path>
        <path d="M507.32 178.47a5.666 5.666 0 014.519-1.375l28.211 3.82a15.753 15.753 0 01.494 31.501l-28.197 4.546a5.672 5.672 0 01-6.574-5.528l-.365-28.645a5.666 5.666 0 011.912-4.32zM587.204 237.787a5.666 5.666 0 01-2.884-3.741l-6.408-27.738a15.753 15.753 0 0129.29-11.606l14.227 24.765a5.672 5.672 0 01-2.845 8.105l-26.664 10.475a5.666 5.666 0 01-4.716-.26z"></path>
        <circle
          cx="724.021"
          cy="266.329"
          r="29.004"
          fill="#ffb6b6"
          transform="rotate(-28.663 394.38 498.723)"
        ></circle>
        <path
          fill="#2f2e41"
          d="M552.202 125.033l-18.668-.105c-.443-4.241 1.445-8.46 4.195-11.72 2.75-3.258 6.312-5.711 9.828-8.124 3.57-2.45 7.267-4.955 11.51-5.81 3.557-.718 7.233-.22 10.826.28l14.296 1.987c5.23.727 10.704 1.55 14.952 4.687 5.746 4.242 4.277 14.034 9.79 18.575 16.649 13.712 9.908 25.687 10.218 38.186l-60.36 6.331a16.595 16.595 0 01-6.577-.191c-2.113-.646-4.05-2.395-4.206-4.6-.174-2.461 1.779-4.476 3.364-6.366a29.746 29.746 0 002.566-33.637zM336.35 163.49q-.176-.388-.35-.778c.044.001.089.008.134.009zM315.157 111.177a7.64 7.64 0 014.787-2.07c1.775.057 3.575 1.66 3.207 3.398a28.211 28.211 0 0133.95-12.73c4.413 1.557 8.74 4.67 9.753 9.238a8.32 8.32 0 001.048 3.41 3.893 3.893 0 004.143 1.05l.044-.013a1.297 1.297 0 011.567 1.831l-1.248 2.329a10.004 10.004 0 004.766-.102 1.296 1.296 0 011.376 2.017 22.59 22.59 0 01-18.012 9.258c-4.988-.03-10.027-1.75-14.881-.602a12.927 12.927 0 00-8.695 18.147c-1.491-1.631-4.374-1.245-5.9.354a8.091 8.091 0 00-1.766 6.191 28.726 28.726 0 002.949 9.643 28.826 28.826 0 01-17.088-51.35z"
        ></path>
        <path
          fill="#ccc"
          d="M860.598 640.726H1.304a1.19 1.19 0 010-2.381h859.294a1.19 1.19 0 110 2.381z"
        ></path>
        <path
          fill="#f0f0f0"
          d="M206.435 11.87c-24.717-3.34-52.935 10.02-59.342 34.124A21.597 21.597 0 00106 48.103l2.83 2.026a372.275 372.275 0 00160.659-.726c-17.193-18.069-38.337-34.192-63.054-37.533zM100.435 79.87C75.718 76.53 47.5 89.89 41.093 113.994A21.597 21.597 0 000 116.103l2.83 2.026a372.275 372.275 0 00160.659-.726c-17.193-18.07-38.337-34.192-63.054-37.533z"
        ></path>
      </svg>
      <div className="my-12">
        <button className="rounded-lg bg-[#FF6584] text-white p-2 m-2 hover:bg-[#a14255]">
          <Link href="/donate" legacyBehavior>
            Donate Today
          </Link>
        </button>
        {/* <button className="rounded-lg bg-gray-800 text-white p-2 m-2 hover:bg-gray-600">
          Register Your Charity
        </button> */}
        <RegisterCharity />
      </div>
    </div>
  );
}
