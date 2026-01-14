import "../../../styles/resturantPage/resDetailGallery/resDetailGallery.css"
export default function ResDetailGallery(){
  return(
  <section className="res-gallery">
    <div className="main-img">
      <img src="/images/resturants/momo.png" alt="Dining area" />
    </div>
    <div className="side-imgs">
      <img src="/images/resturants/burger.png" alt="Burger" />
      <img src="/images/resturants/icecream.png" alt="Cake" />
    </div>
    <div className="large-side-img">
      <img src="/images/resturants/pizza.png" alt="Salad" />
    </div>
  </section>
);
}