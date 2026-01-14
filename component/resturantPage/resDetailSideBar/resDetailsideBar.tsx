import "../../../styles/resturantPage/resDetailSideBar/resDetailSideBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faDirections } from '@fortawesome/free-solid-svg-icons';

export default function ResDetailSideBar(){
  return(
  <aside className="res-sidebar">
    <div className="reservation-card">
      <h3>Table Reservation</h3>
      <p className="offer"><span>🉐</span> Flat 30% OFF + 3 More Offers</p>
      <div className="input-row">
        <select><option>Today</option></select>
        <select><option>Guest</option></select>
      </div>
      <button className="btn-book">Book A Table</button>
    </div>

    <div className="direction-card">
      <h3>Direction</h3>
      <div className="map-placeholder">
         <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4485.922713763976!2d88.42612432320645!3d22.575206578757047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02750045121897%3A0x135eab1c888e8845!2sThe%20Garden%20Lounge!5e0!3m2!1sen!2sin!4v1768418447195!5m2!1sen!2sin"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
      </div>
      <p>187, Ward 10, Benaras Road, Salkia, Howrah</p>
      <div className="flex-btns">
        <button><FontAwesomeIcon icon={faCopy} /> Copy</button>
        <button><FontAwesomeIcon icon={faDirections} /> Direction</button>
      </div>
    </div>
  </aside>
);
}