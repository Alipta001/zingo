import "../../../styles/resturantPage/resDetailTabs/resDetailTabs.css"
export default function ResDetailTabs(){
  return(
  <nav className="res-tabs">
    {['Overview', 'Order Online', 'Reviews', 'Menu', 'Book A Table'].map((tab, i) => (
      <button key={tab} className={`tab ${i === 0 ? 'active' : ''}`}>{tab}</button>
    ))}
  </nav>
);
}