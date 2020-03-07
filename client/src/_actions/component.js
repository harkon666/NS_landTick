import { ROUTING_ADMIN } from "../config/constants";

export const RoutingAdmin = route => {
  return {
    type: ROUTING_ADMIN,
    payload: () => {
      return route;
    }
  };
};
