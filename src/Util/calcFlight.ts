import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

export const calculateFlightDuration = (
  departureDate: string | boolean,
  departureTime: string | boolean,
  arrivalDate: string | boolean,
  arrivalTime: string | boolean
): string => {
  if (
    typeof departureDate === "boolean" ||
    typeof arrivalDate === "boolean" ||
    typeof departureTime === "boolean" ||
    typeof arrivalTime === "boolean"
  ) {
    return "--";
  }

  const departureDateTime = dayjs(`${departureDate} ${departureTime}`);
  const arrivalDateTime = dayjs(`${arrivalDate} ${arrivalTime}`);

  const flightDuration = arrivalDateTime.diff(departureDateTime);
  const durationInHours = dayjs.duration(flightDuration).asHours();
  const durationHours = Math.floor(durationInHours);
  const durationMinutes = Math.round((durationInHours - durationHours) * 60);

  if (durationHours < 0 || durationMinutes < 0) return "";
  if (!durationHours && !durationMinutes) return "";

  return `${durationHours || "00"}시간 ${durationMinutes || "00"}분`;
};
