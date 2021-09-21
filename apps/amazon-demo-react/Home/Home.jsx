import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_row">
        <Product
          id={12345}
          title="Best seller"
          price={15.99}
          rating={3}
          image="https://annejanzer.com/wp-content/uploads/2017/05/TheNewbiesGuideToSellMoreBooksWithLessMarketing007.jpeg"
        />
        <Product
          id={12345}
          title="Wrist watch"
          price={98.08}
          rating={5}
          image="https://contestimg.wish.com/api/webimage/5d1b8e5e5e58a760acfcb34f-large.jpg?cache_buster=a5ea09bbe3de335b04ba9012a4516d12
          "
        />
      </div>
      <div className="home_row">
        <Product
          id={12345}
          title="
          Microsoft
          Computers"
          price={15.99}
          rating={5}
          image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4rC5i?ver=0e6c&q=90&m=6&h=405&w=720&b=%23FFFFFFFF&l=f&o=t&aim=true"
        />{" "}
        <Product
          id={561789}
          title="
          TechRadar
          Best Android smartwatch 2020 "
          price={100}
          rating={5}
          image="https://cdn.mos.cms.futurecdn.net/DxpaKaHPBL5yF8vBjh2MjX.jpg"
        />{" "}
        <Product
          id={55345}
          title="
          AliExpress
  Watch Men Clock Stainless Wrist Watch."
          price={10.99}
          rating={5}
          image="https://ae01.alicdn.com/kf/H3c038819cd86487490f5caa59b4b9801E/Simplicity-Modern-Quartz-Watch-Men-Clock-Stainless-Steel-Mesh-Strap-Casual-Wrist-Watch-For-Men-Fashion.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id={17099}
          title="Mac Desktop"
          price={18800}
          rating={5}
          image="https://imacplanet.com/wp-content/uploads/2018/06/apple-imac-5k-mainfull1-1500x1000-770x513.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
