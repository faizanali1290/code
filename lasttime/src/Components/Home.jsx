import Topcurve from "./Topcurve";
import "../styles/Home.css";
import Bottomcurve from "./BottomCurve";

const Home = ({ SaladsPage, DrinkPage }) => {
  return (
    <>

      <div className="margin-top">
        <Topcurve name={"SALADS"} />

        <div className="side-border">
          <div onClick={() => SaladsPage()}>
            <div className="home-images">
              <img src="./assest/images/salt/satl1.png" alt="SALADS images" />
              <img src="./assest/images/salt/satl2.svg" alt="SALADS images" />
              <img src="./assest/images/salt/satl3.png" alt="SALADS images" />
            </div>
            <div className="home-images">
              <img src="./assest/images/salt/satl4.svg" alt="SALADS images" />
              <img src="./assest/images/salt/satl5.png" alt="SALADS images" />
              <img src="./assest/images/salt/satl6.svg" alt="SALADS images" />
            </div>
            {/* burgrs */}
            <h2 className="home-cookie-heading">BURGERS</h2>
            <div className="home-images">
              <img src="./assest/images/burgers/burger1.png" alt="BURGERS " />
              <img src="./assest/images/burgers/burger2.png" alt="BURGERS " />
              <img src="./assest/images/burgers/burger3.png" alt="BURGERS " />
            </div>
            <div className="home-images">
              <img src="./assest/images/burgers/burger4.png" alt="BURGERS " />
              <img src="./assest/images/burgers/burger5.png" alt="BURGERS " />
              <img src="./assest/images/burgers/burger6.png" alt="BURGERS " />
            </div>
            {/*  COCKTAILS*/}
            <div onClick={() => DrinkPage()}>
              <h2 className="home-cookie-heading">COCKTAILS</h2>
              <div className="home-images">
                <img
                  src="./assest/images/cooktails/cooktails1.png"
                  alt="COCKTAILS "
                />
                <img
                  src="./assest/images/cooktails/cooktails2.png"
                  alt="COCKTAILS "
                />
                <img
                  src="./assest/images/cooktails/cooktails3.png"
                  alt="COCKTAILS "
                />
              </div>
              <div className="home-images">
                <img
                  src="./assest/images/cooktails/cooktails4.png"
                  alt="COCKTAILS "
                />
                <img
                  src="./assest/images/cooktails/cooktails5.png"
                  alt="COCKTAILS "
                />
                <img
                  src="./assest/images/cooktails/cooktails6.png"
                  alt="COCKTAILS "
                />
              </div>
            </div>
          </div>
          {/*  */}
          <h2 className="home-cookie-heading">SOFTDRINKS</h2>
          <div onClick={() => DrinkPage()}>
            <div className="home-images">
              <img
                src="./assest/images/softdrink/softdrink1.png"
                alt="SOFTDRINKS "
              />
              <img
                src="./assest/images/softdrink/softdrink2.png"
                alt="SOFTDRINKS "
              />
              <img
                src="./assest/images/softdrink/softdrink3.png"
                alt="SOFTDRINKS "
              />
            </div>
            <div className="home-images">
              <img
                src="./assest/images/softdrink/softdrink4.png"
                alt="SOFTDRINKS "
              />
              <img
                src="./assest/images/softdrink/softdrink5.png"
                alt="SOFTDRINKS "
              />
              <img
                src="./assest/images/softdrink/softdrink6.png"
                alt="SOFTDRINKS "
              />
            </div>
          </div>
        </div>
        <Bottomcurve />
      </div>
    </>
  );
};

export default Home;
