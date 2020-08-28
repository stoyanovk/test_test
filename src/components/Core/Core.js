/* eslint-disable camelcase */
import React, { useState, useCallback } from "react";
import getService from "../../api";
import Button from "./components/Button/Button";
import EmptyCircle from "./components/EmptyCircle/EmptyCircle";
import FullCircle from "./components/FullCircle/FullCircle";
import getSum from "../../utils/getSum";
import useStyles from "./style";

import houseImage from "./images/house.svg";

function renderEmptyCircle(iteration) {
  const circles = [];
  for (let i = 0; i <= iteration; i++) {
    circles.push(<EmptyCircle key={i} />);
  }
  return circles;
}

export default function Core() {
  const classes = useStyles();

  const [serviceIndex, setServiceIndex] = useState(0);

  const [services, setServices] = useState([]);

  const [emptyCircleCount, setEmptyCircleCount] = useState(8);

  const handleClick = useCallback(async () => {
    try {
      const service = await getService(serviceIndex);

      setServices((state) => [...state, service]);
      setServiceIndex((state) => state + 1);
      setEmptyCircleCount((state) => state - 2);
    } catch (e) {
      global.console.error(e);
    }
  }, [serviceIndex]);

  const sum = services.length ? getSum(services) : 0;

  return (
    <div className={classes.container}>
      <div>
        {services.length
          ? services.map(({ id, service_name, service_label }) => (
              <div key={id} className={classes.bigCirclePosition}>
                <FullCircle icon={service_label} title={service_name} />
              </div>
            ))
          : null}
        <div className={classes.bigCirclePosition}>
          <Button onClick={handleClick} />
        </div>
      </div>
      <div>{renderEmptyCircle(emptyCircleCount)}</div>
      <div className={classes.circle}>
        <img src={houseImage} alt="house" />
        <div className={classes.box}>
          <span className={classes.text}>approx.</span>
          <span className={classes.price}>${sum.toFixed(2)}</span>
          <span className={classes.text}>per day</span>
        </div>
      </div>
    </div>
  );
}
