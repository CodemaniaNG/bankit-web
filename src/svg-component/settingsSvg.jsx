import React from "react";

const SettingsSvg = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.00212 2.14827C6.00209 1.99728 6.05332 1.85075 6.14742 1.73267C6.24153 1.61458 6.37293 1.53194 6.52012 1.49827C7.49546 1.27617 8.50831 1.27662 9.48345 1.49961C9.63077 1.53315 9.76232 1.61573 9.85655 1.73382C9.95079 1.85192 10.0021 1.99852 10.0021 2.14961V3.38094C10.0021 3.49796 10.0329 3.61292 10.0914 3.71427C10.15 3.81561 10.2341 3.89977 10.3355 3.95828C10.4368 4.01679 10.5518 4.04759 10.6688 4.04759C10.7858 4.04759 10.9008 4.01678 11.0021 3.95827L12.0695 3.34161C12.2004 3.26602 12.3531 3.23719 12.5026 3.25984C12.6521 3.2825 12.7894 3.35529 12.8921 3.46627C13.5706 4.2004 14.0765 5.07687 14.3728 6.03161C14.4175 6.17599 14.4119 6.3313 14.3568 6.47206C14.3017 6.61282 14.2003 6.73067 14.0695 6.80627L13.0021 7.42227C12.9008 7.48079 12.8166 7.56494 12.7581 7.66629C12.6996 7.76763 12.6688 7.88259 12.6688 7.99961C12.6688 8.11662 12.6996 8.23158 12.7581 8.33292C12.8166 8.43427 12.9008 8.51842 13.0021 8.57694L14.0688 9.19227C14.1995 9.26785 14.3008 9.38559 14.3559 9.5262C14.411 9.66682 14.4167 9.82198 14.3721 9.96627C14.0779 10.9223 13.572 11.7998 12.8921 12.5336C12.7894 12.6445 12.652 12.7171 12.5025 12.7397C12.353 12.7622 12.2003 12.7333 12.0695 12.6576L11.0021 12.0409C10.9008 11.9824 10.7858 11.9516 10.6688 11.9516C10.5518 11.9516 10.4368 11.9824 10.3355 12.0409C10.2341 12.0994 10.15 12.1836 10.0914 12.2849C10.0329 12.3863 10.0021 12.5012 10.0021 12.6183V13.8516C10.002 14.0026 9.95057 14.149 9.85634 14.267C9.76212 14.3849 9.63065 14.4674 9.48345 14.5009C8.50811 14.723 7.49526 14.7226 6.52012 14.4996C6.37293 14.4659 6.24153 14.3833 6.14742 14.2652C6.05332 14.1471 6.00209 14.0006 6.00212 13.8496V12.6183C6.00212 12.5012 5.97131 12.3863 5.9128 12.2849C5.85428 12.1836 5.77012 12.0994 5.66878 12.0409C5.56743 11.9824 5.45247 11.9516 5.33545 11.9516C5.21842 11.9516 5.10346 11.9824 5.00212 12.0409L3.93479 12.6576C3.80384 12.7332 3.6511 12.762 3.50162 12.7394C3.35213 12.7167 3.21479 12.6439 3.11212 12.5329C2.77388 12.1671 2.4776 11.7646 2.22879 11.3329C1.97941 10.9015 1.77906 10.4436 1.63145 9.96761C1.5867 9.82322 1.59234 9.66791 1.64746 9.52715C1.70257 9.38639 1.80389 9.26855 1.93479 9.19294L3.00145 8.57694C3.10279 8.51842 3.18694 8.43427 3.24545 8.33292C3.30395 8.23158 3.33476 8.11662 3.33476 7.99961C3.33476 7.88259 3.30395 7.76763 3.24545 7.66629C3.18694 7.56494 3.10279 7.48079 3.00145 7.42227L1.93612 6.80694C1.80524 6.73146 1.70388 6.61377 1.64865 6.47315C1.59342 6.33252 1.58759 6.17731 1.63212 6.03294C1.92648 5.07711 2.43233 4.19985 3.11212 3.46627C3.21475 3.35545 3.35197 3.28275 3.5013 3.26011C3.65064 3.23746 3.80325 3.26619 3.93412 3.34161L5.00212 3.95827C5.10346 4.01678 5.21842 4.04759 5.33545 4.04759C5.45247 4.04759 5.56743 4.01679 5.66878 3.95828C5.77012 3.89977 5.85428 3.81561 5.9128 3.71427C5.97131 3.61292 6.00212 3.49796 6.00212 3.38094V2.14761V2.14827ZM8.00212 9.99961C8.53255 9.99961 9.04126 9.78889 9.41633 9.41382C9.79141 9.03875 10.0021 8.53004 10.0021 7.99961C10.0021 7.46917 9.79141 6.96046 9.41633 6.58539C9.04126 6.21032 8.53255 5.99961 8.00212 5.99961C7.47169 5.99961 6.96298 6.21032 6.5879 6.58539C6.21283 6.96046 6.00212 7.46917 6.00212 7.99961C6.00212 8.53004 6.21283 9.03875 6.5879 9.41382C6.96298 9.78889 7.47169 9.99961 8.00212 9.99961Z"
        fill={color}
      />
    </svg>
  );
};

export default SettingsSvg;