'use client'

import { Tab, Tabs } from "react-bootstrap";
import styles from "../../styles/Brands.module.css";
import {
  apple,
  dell,
  hp,
  lenovo,
  mi,
  oneplus,
  realme,
  redmi,
  samsung,
} from "../../../public/images";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const Brands = () => {
  const [triger, setTriger] = useState(false);
  const brands = [
    {
      name: "Apple",
      image: apple,
    },
    {
      name: "Samsung",
      image: samsung,
    },
    {
      name: "Lenovo",
      image: lenovo,
    },
    {
      name: "OnePlus",
      image: oneplus,
    },
    {
      name: "Realme",
      image: realme,
    },
    {
      name: "Xiaomi",
      image: mi,
    },
    {
      name: "HP",
      image: hp,
    },
    {
      name: "Dell",
      image: dell,
    },
    {
      name: "Redmi",
      image: redmi,
    },
  ];
  useEffect(() => {}, [triger]);

  return (
    <div className={`${styles.wrapper}`}>
      <main className="main">
        <h2 className="text-center">Top brands</h2>
        <p className="text-center">
          Lorem Ipsum is simply dummy text of the printing
        </p>
        <div className={`my-5 ${styles.brandTabs}`}>
          <Tabs
            onClick={() => {
              setTriger((prev) => !prev);
            }}
            defaultActiveKey="Laptop"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="Laptop" title="Laptop">
              <motion.div
                initial={{ y: 0, opacity: 0 }}
                whileInView={{ y: 10, opacity: 1 }}
                transition={{ type: "tween", duration: 0.5 }}
                className={`${styles.grid}`}
              >
                {brands.map((brand, index) => (
                  <div
                    key={index}
                    className={`${styles.gridItems} text-center`}
                  >
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      width={130}
                      height={60}
                    />
                    <h5 className="text-center mt-4">{brand.name}</h5>
                  </div>
                ))}
              </motion.div>
            </Tab>
            <Tab eventKey="Mobile" title="Mobile">
              <motion.div
                initial={{ y: 0, opacity: 0 }}
                whileInView={{ y: 10, opacity: 1 }}
                transition={{ type: "tween", duration: 0.5 }}
                className={`${styles.grid}`}
              >
                {brands.map((brand, index) => (
                  <div
                    key={index}
                    className={`${styles.gridItems} text-center`}
                  >
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      width={130}
                      height={60}
                    />
                    <h5 className="text-center mt-4">{brand.name}</h5>
                  </div>
                ))}
              </motion.div>
            </Tab>
            <Tab eventKey="Tablet" title="Tablet">
              <motion.div
                initial={{ y: 0, opacity: 0 }}
                whileInView={{ y: 10, opacity: 1 }}
                transition={{ type: "tween", duration: 0.5 }}
                className={`${styles.grid}`}
              >
                {brands.map((brand, index) => (
                  <div
                    key={index}
                    className={`${styles.gridItems} text-center`}
                  >
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      width={130}
                      height={60}
                    />
                    <h5 className="text-center mt-4">{brand.name}</h5>
                  </div>
                ))}
              </motion.div>
            </Tab>
            <Tab eventKey="Desktop" title="Desktop">
              <motion.div
                initial={{ y: 0, opacity: 0 }}
                whileInView={{ y: 10, opacity: 1 }}
                transition={{ type: "tween", duration: 0.5 }}
                className={`${styles.grid}`}
              >
                {brands.map((brand, index) => (
                  <div
                    key={index}
                    className={`${styles.gridItems} text-center`}
                  >
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      width={130}
                      height={60}
                    />
                    <h5 className="text-center mt-4">{brand.name}</h5>
                  </div>
                ))}
              </motion.div>
            </Tab>
            <Tab eventKey="LEDs" title="LEDs">
              <motion.div
                initial={{ y: 0, opacity: 0 }}
                whileInView={{ y: 10, opacity: 1 }}
                transition={{ type: "tween", duration: 0.5 }}
                className={`${styles.grid}`}
              >
                {brands.map((brand, index) => (
                  <div
                    key={index}
                    className={`${styles.gridItems} text-center`}
                  >
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      width={130}
                      height={60}
                    />
                    <h5 className="text-center mt-4">{brand.name}</h5>
                  </div>
                ))}
              </motion.div>
            </Tab>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Brands;
