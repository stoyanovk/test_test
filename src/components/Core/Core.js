/* eslint-disable camelcase */
import React, { useState, useCallback } from "react";
import getService from "../../api";
import Button from "./components/Button/Button";
import EmptyCircle from "./components/EmptyCircle/EmptyCircle";
import FullCircle from "./components/FullCircle/FullCircle";
import getPriceSum from "../../utils/getPriceSum";
import getEmptyCircleCount from "../../utils/getEmptyCircleCount";
import useStyles from "./style";

import houseImage from "./images/house.svg";

function renderEmptyCircle(iteration) {
  const circles = [];
  for (let i = 0; i <= iteration; i++) {
    circles.push(<EmptyCircle key={i} />);
  }
  return circles;
}

const initialState = {
  serviceIndex: 0,
  services: [],
  emptyCircleCount: 8, //We have 8 empty circle on the start
};
export default function Core() {
  const classes = useStyles();

  const [state, setState] = useState(initialState);
  // const [serviceIndex, setServiceIndex] = useState(0);

  // const [services, setServices] = useState([]);

  // const [emptyCircleCount, setEmptyCircleCount] = useState(8);

  const handleClick = useCallback(async () => {
    try {
      const service = await getService(state.serviceIndex);

      // eslint-disable-next-line no-shadow
      setState((state) => {
        const newEmptyCircleCount = getEmptyCircleCount(
          state.emptyCircleCount,
          state.serviceIndex
        );

        return {
          services: [...state.services, service],
          serviceIndex: state.serviceIndex + 1,
          emptyCircleCount: newEmptyCircleCount,
        };
      });
    } catch (e) {
      global.console.error(e);
    }
  }, [state.serviceIndex]);

  const priceSum = state.services.length ? getPriceSum(state.services) : 0;

  return (
    <div className={classes.container}>
      <div>
        {state.services.length
          ? state.services.map(({ id, service_name, service_label }) => (
              <div key={id} className={classes.bigCirclePosition}>
                <FullCircle icon={service_label} title={service_name} />
              </div>
            ))
          : null}
        <div className={classes.bigCirclePosition}>
          <Button onClick={handleClick} />
        </div>
      </div>
      <div>{renderEmptyCircle(state.emptyCircleCount)}</div>
      <div className={classes.circle}>
        <img src={houseImage} alt="house" />
        <div className={classes.box}>
          <span className={classes.text}>approx.</span>
          <span className={classes.price}>${priceSum.toFixed(2)}</span>
          <span className={classes.text}>per day</span>
        </div>
      </div>
    </div>
  );
}
