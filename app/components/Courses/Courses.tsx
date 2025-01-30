"use client";
import * as React from "react";
import { useState } from "react";
import {
  GlobeAltIcon,
  CircleStackIcon,
  CloudIcon,
  ComputerDesktopIcon, // For Laptop
  DevicePhoneMobileIcon, // For Mobile
  MegaphoneIcon, // For Headphones
  CameraIcon,
} from "@heroicons/react/24/outline";

interface Name {
  course: string;
  imageSrc: string;
  profession: string;
  price: string;
  category: "phones" | "laptops" | "headphones" | "cameras";
}

// const names: Name[] = [
//   {
//     course: "HTML, CSS, JS",
//     imageSrc: "/assets/courses/coursesOne.svg",
//     profession: "HTML, CSS, Javascript Development",
//     price: "40",
//     category: "laptops",
//   },
//   {
//     course: "Node.js",
//     imageSrc: "/assets/courses/coursesTwo.svg",
//     profession: "Backend with Node.js and Express.js",
//     price: "21",
//     category: "laptops",
//   },
//   {
//     course: "Database",
//     imageSrc: "/assets/courses/coursesThree.svg",
//     profession: "Learn Mongodb with Mongoose",
//     price: "21",
//     category: "laptops",
//   },
//   {
//     course: "React.js",
//     imageSrc: "/assets/courses/coursesFour.svg",
//     profession: "Learn React with Redux toolkit",
//     price: "99",
//     category: "laptops",
//   },
//   {
//     course: "React Native",
//     imageSrc: "/assets/courses/coursesOne.svg",
//     profession: "Learn React Native with Node.js",
//     price: "89",
//     category: "phones",
//   },
//   {
//     course: "Swift",
//     imageSrc: "/assets/courses/coursesThree.svg",
//     profession: "Learn Swift from Scratch",
//     price: "89",
//     category: "phones",
//   },
//   {
//     course: "Flutter",
//     imageSrc: "/assets/courses/coursesFour.svg",
//     profession: "Flutter App Development",
//     price: "69",
//     category: "phones",
//   },
//   {
//     course: "Onsen UI",
//     imageSrc: "/assets/courses/coursesTwo.svg",
//     profession: "Learn Onsen Ui with HTML, CSS",
//     price: "69",
//     category: "phones",
//   },
//   {
//     course: "TensorFlow",
//     imageSrc: "/assets/courses/coursesTwo.svg",
//     profession: "Learn TensorFlow with SQL",
//     price: "99",
//     category: "headphones",
//   },
//   {
//     course: "AWS",
//     imageSrc: "/assets/courses/coursesFour.svg",
//     profession: "AWS Deep Learning AMI",
//     price: "99",
//     category: "headphones",
//   },
//   {
//     course: "Bokeh",
//     imageSrc: "/assets/courses/coursesOne.svg",
//     profession: "Learn Bokeh with Python",
//     price: "99",
//     category: "headphones",
//   },
//   {
//     course: "Scikit",
//     imageSrc: "/assets/courses/coursesThree.svg",
//     profession: "Scikit with Python Development",
//     price: "89",
//     category: "headphones",
//   },
//   {
//     course: "Laas",
//     imageSrc: "/assets/courses/coursesThree.svg",
//     profession: "Infra-as-a-Service",
//     price: "21",
//     category: "cameras",
//   },
//   {
//     course: "Iaas",
//     imageSrc: "/assets/courses/coursesFour.svg",
//     profession: "Info-as-a-Service",
//     price: "29",
//     category: "cameras",
//   },
//   {
//     course: "Paas",
//     imageSrc: "/assets/courses/coursesOne.svg",
//     profession: "Platform-as-a-Service",
//     price: "99",
//     category: "cameras",
//   },
//   {
//     course: "Saas",
//     imageSrc: "/assets/courses/coursesTwo.svg",
//     profession: "Software-as-a-Service",
//     price: "58",
//     category: "cameras",
//   },
// ];
const names: Name[] = [
  {
    course: "Dell XPS 13",
    imageSrc:
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/9345/media-gallery/touch/gray/notebook-xps-13-9345-t-gray-gallery-2.psd?fmt=pjpg&pscan=auto&scl=1&wid=3988&hei=2361&qlt=100,1&resMode=sharp2&size=3988,2361&chrss=full&imwidth=5000",
    profession: "High-Performance Ultrabook with Intel i7 Processor",
    price: "1200",
    category: "laptops",
  },
  {
    course: "MacBook Pro 16",
    imageSrc: "https://i.ebayimg.com/images/g/AOYAAOSw2dxjxdjA/s-l1200.jpg",
    profession: "Apple's MacBook Pro with M1 Pro Chip",
    price: "2500",
    category: "laptops",
  },
  {
    course: "Lenovo ThinkPad X1 Carbon",
    imageSrc:
      "https://p1-ofp.static.pub/ShareResource/na/products/thinkpad/560x450/lenovo-thinkpad-x1-carbon-g12-02.png",
    profession: "Business Laptop with Intel i5 Processor",
    price: "1500",
    category: "laptops",
  },
  {
    course: "HP Spectre x360",
    imageSrc:
      "https://i5.walmartimages.com/seo/HP-Spectre-x360-16-3K-IPS-3072-x-1920-2-in-1-Laptop-Touch-400nits-i7-11390H-Iris-Xe-Graphics-17h-Battery-Life-Thunderbolt-4-Wi-Fi-6-Fingerprint-w-Sty_0be93aa5-ee2d-4f2a-9d54-fbacc2c3b9ca.dda9cc8cf736fee420c594e9e21a7301.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    profession: "Convertible Laptop with Touchscreen Display",
    price: "1300",
    category: "laptops",
  },
  {
    course: "iPhone 13 Pro Max",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZOrOvDuH4jQcDx41RndaOjAtKXUn-jT_BGQ&s",
    profession: "Latest Apple Smartphone with A15 Bionic Chip",
    price: "999",
    category: "phones",
  },
  {
    course: "Samsung Galaxy S21",
    imageSrc: "https://i.insider.com/61e9d89df6297c00198f6235?width=700",
    profession: "Flagship Android Smartphone with 5G",
    price: "799",
    category: "phones",
  },
  {
    course: "Google Pixel 6",
    imageSrc:
      "https://hips.hearstapps.com/hmg-prod/images/google-pixel-6-review-digital-spy-1654088150.jpg",
    profession: "Google's Pure Android Experience Smartphone",
    price: "599",
    category: "phones",
  },
  {
    course: "OnePlus 9 Pro",
    imageSrc:
      "https://www.androidauthority.com/wp-content/uploads/2021/03/OnePlus-9-Pro-in-hand-display.jpg",
    profession: "Premium Android Phone with Fluid Display",
    price: "899",
    category: "phones",
  },
  {
    course: "Sony WH-1000XM4",
    imageSrc:
      "https://d1ncau8tqf99kp.cloudfront.net/converted/74743_original_local_1200x1050_v3_converted.webp",
    profession: "Noise Cancelling Wireless Headphones",
    price: "350",
    category: "headphones",
  },
  {
    course: "Bose QuietComfort 35 II",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRh6aujbQWxg9NbWHF79JFt0Y04481snHM3g&s",
    profession: "Acclaimed Noise Cancelling Headphones",
    price: "299",
    category: "headphones",
  },
  {
    course: "Sennheiser HD 560S",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHAqaS6Z5GwJx2IeMR18guNHHckYiplOsjAw&s",
    profession: "Open Back Headphones for Audiophiles",
    price: "200",
    category: "headphones",
  },
  {
    course: "Beats Studio3 Wireless",
    imageSrc: "https://m.media-amazon.com/images/I/51QL9pV-1qL._AC_SL1000_.jpg",
    profession: "Premium Wireless Noise Cancelling Headphones",
    price: "350",
    category: "headphones",
  },
  {
    course: "Canon EOS R5",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjGpdOM-lh8LSU_1e-V24Z4DgxQCeSsInp3w&s",
    profession: "Professional Mirrorless Camera with 8K Video",
    price: "3900",
    category: "cameras",
  },
  {
    course: "Nikon Z7 II",
    imageSrc:
      "https://1.img-dpreview.com/files/p/E~TS590x0~articles/1004883387/beauty/Nikon-Z7-II-top.jpeg",
    profession: "High-Resolution Full-Frame Mirrorless Camera",
    price: "3500",
    category: "cameras",
  },
  {
    course: "Sony Alpha a7 III",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgd5HSrcMKYAIxbGcdCUh4QXdFUVp9xYCZ8g&s",
    profession: "Popular Mirrorless Camera with Fast Autofocus",
    price: "2000",
    category: "cameras",
  },
  {
    course: "Panasonic Lumix GH5",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9D9anP8ZuYqSWRpSzbMxyfw3NoZgCmMxHIQ&s",
    profession: "4K Video Camera for Filmmakers",
    price: "1800",
    category: "cameras",
  },
];

const NamesList = () => {
  const [selectedButton, setSelectedButton] = useState<
    "phones" | "laptops" | "headphones" | "cameras" | "all" | null
  >("laptops");

  const phones = names.filter((name) => name.category === "phones");
  const laptops = names.filter((name) => name.category === "laptops");
  const headphones = names.filter((name) => name.category === "headphones");
  const cameras = names.filter((name) => name.category === "cameras");

  let selectedNames: Name[] = [];

  if (selectedButton === "phones") {
    selectedNames = phones;
  } else if (selectedButton === "laptops") {
    selectedNames = laptops;
  } else if (selectedButton === "headphones") {
    selectedNames = headphones;
  } else if (selectedButton === "cameras") {
    selectedNames = cameras;
  }

  const nameElements = selectedNames.map((name, index) => (
    <div key={index}>
      <div className=" text-lg flex flex-col h-full justify-between  sm:text-sm py-5 lg:py-0">
        <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
          <img
            src={name.imageSrc}
            alt={name.imageSrc}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="flex justify-between">
          <div className="mt-6 block font-normal text-gray-900">
            {name.course}
          </div>
          <div className="mt-6 block text-lg font-semibold text-green border-solid border-2 border-green rounded-md px-1">
            ${name.price}
          </div>
        </div>
        <p aria-hidden="true" className="mt-2 mb-5 text-1xl font-semibold ">
          {name.profession}
        </p>

        <div className="flex justify-between border-solid border-2 border-grey500 rounded-md p-2">
          <p className="text-xs">Listed a month ago Seattle, WA</p>
          <div className="flex flex-row space-x-4">
            {/* <div className="flex">
              <img src={"/assets/courses/account.svg"} alt="circle" />
              <p className="text-lightgrey ml-1 text-xs">120</p>
            </div> */}
            <div className="flex">
              <img src={"/assets/courses/Star.svg"} alt="star" />
              <p className="ml-1 text-xs">4.5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div
        id="courses-section"
        className="mx-auto max-w-2xl py-16 px-4 sm:py-36 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <div className="sm:flex  justify-between items-center pb-12">
          <h2 className="text-3xl flex-1 sm:text-5xl font-bold tracking-tight text-gray-900 my-4">
            Popular Items
          </h2>
          <div className="flex gap-2 flex-1">
            <input
              type="text"
              name="search"
              className="py-4 text-sm w-full  border-x-2 border-x-orange border-y-2 border-y-orange text-black bg-white rounded-md pl-4"
              placeholder="What are you looking for?"
              autoComplete="off"
            />
            <button className="bg-purple hover:bg-blue-700 text-white font-medium py-0 px-4 rounded">
              Search
            </button>
          </div>
        </div>

        <div className="flex nowhitespace space-x-5 rounded-xl bg-white p-1 overflow-x-auto">
          {/* FOR DESKTOP VIEW */}
          <button
            onClick={() => setSelectedButton("laptops")}
            className={
              "bg-white " +
              (selectedButton === "laptops"
                ? "text-black border-b-2 border-orange"
                : "text-lightgrey") +
              " pb-2 text-lg hidden sm:block"
            }
          >
            Laptops
          </button>
          <button
            onClick={() => setSelectedButton("phones")}
            className={
              "bg-white " +
              (selectedButton === "phones"
                ? "text-black border-b-2 border-orange"
                : "text-lightgrey") +
              " pb-2 text-lg hidden sm:block"
            }
          >
            Phones
          </button>
          <button
            onClick={() => setSelectedButton("headphones")}
            className={
              "bg-white " +
              (selectedButton === "headphones"
                ? "text-black border-b-2 border-orange"
                : "text-lightgrey") +
              " pb-2 text-lg hidden sm:block"
            }
          >
            Headphones
          </button>
          <button
            onClick={() => setSelectedButton("cameras")}
            className={
              "bg-white " +
              (selectedButton === "cameras"
                ? "text-black border-b-2 border-orange"
                : "text-lightgrey") +
              " pb-2 text-lg hidden sm:block"
            }
          >
            Cameras
          </button>

          {/* FOR MOBILE VIEW */}

          <ComputerDesktopIcon
            onClick={() => setSelectedButton("laptops")}
            width={70}
            height={70}
            className={
              "bg-white " +
              (selectedButton === "laptops"
                ? "border-b-2 border-orange fill-orange"
                : "") +
              " pb-2 block sm:hidden"
            }
          />
          <DevicePhoneMobileIcon
            onClick={() => setSelectedButton("phones")}
            width={70}
            height={70}
            className={
              "bg-white " +
              (selectedButton === "phones"
                ? "border-b-2 border-orange fill-orange"
                : "") +
              " pb-2 block sm:hidden"
            }
          />
          <MegaphoneIcon
            onClick={() => setSelectedButton("headphones")}
            width={70}
            height={70}
            className={
              "bg-white " +
              (selectedButton === "headphones"
                ? "border-b-2 border-orange fill-orange"
                : "") +
              " pb-2 block sm:hidden"
            }
          />
          <CameraIcon
            onClick={() => setSelectedButton("cameras")}
            width={70}
            height={70}
            className={
              "bg-white " +
              (selectedButton === "cameras"
                ? "border-b-2 border-orange fill-orange"
                : "") +
              " pb-2 block sm:hidden"
            }
          />
        </div>

        <div>
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-y-10 gap-x-8 py-12">
              <div className="col-start-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
                {nameElements.length > 0 ? (
                  nameElements
                ) : (
                  <p>No data to show</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NamesList;
