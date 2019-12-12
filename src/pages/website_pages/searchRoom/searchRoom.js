import "../../../components/header-prod/header-prod";
import "../../../components/logo/logo";
import "../../../components/footer-prod/footer-prod";
import "../../../components/social/social";
import "../../../components/room-card/room-card";
import "../../../components/select-items/select-items";
import "../../../components/range-slider/range-slider";
import "../../../components/checkbox/checkbox";
import "../../../components/dropdown-list/dropdown-list";
import "../../../components/calendar/calendar";
import "../../../components/pagination/pagination";
import "normalize.css";
import "./searchRoom.scss";
import "../../../index.scss";

$().ready(() => {
  $(".search-room__form").submit(function(e) {
    e.preventDefault();
  });
});
