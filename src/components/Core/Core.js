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

const EMPTY_CIRCLE_INIT_NUM = 8;
const INITIAL_PRICE = 8;

/**
 * renders appropriate number of EmptyCircle components
 * @param {Number} emptyCirclesNum
 *
 * @returns {Components} - EmptyCircle components
 */
function renderEmptyCircle(emptyCirclesNum) {
  const circles = [];
  for (let i = 0; i <= emptyCirclesNum; i++) {
    circles.push(<EmptyCircle key={i} />);
  }
  return circles;
}

const initialState = {
  serviceIndex: 0,
  services: [],
  emptyCircleCount: EMPTY_CIRCLE_INIT_NUM,
};

export default function Core() {
  const classes = useStyles();

  const [state, setState] = useState(initialState);

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

  const priceSum = state.services.length
    ? getPriceSum(state.services)
    : INITIAL_PRICE;

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
        {state.services.length !== 5 ? (
          <div className={classes.bigCirclePosition}>
            <Button onClick={handleClick} />
          </div>
        ) : null}
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
