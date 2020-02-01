import { IS_FETCHING } from "../../constants/actions";

export const isFetching = fetching => ({
  type: IS_FETCHING,
  fetching
});