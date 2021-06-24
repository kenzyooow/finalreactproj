import React from 'react'
import './Home.css';
import Product from './Product' 

function Home(){
    return(
        <div className="home">
            <img className="home-img"
            src="https://offerdth.com/wp-content/uploads/2020/12/banner-facebook.jpg" alt=""/>

            <div className="home-row">
                <Product
                    id="12345"
                    title="0PP0 phone Rino6 Pro cellphone 6G + 128GB"
                    price={13.10}
                    rating={4}
                    image="https://gloimg.gbtcdn.com/storage/item/6571706490093670400/15750/f713c74fa80f.jpg"
                />
                <Product
                    id="12345"
                    title="OPPO Smartphones | OPPO Global"
                    price={14.2}
                    rating={4}
                    image="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/navigation/a-series/a92-a72/A92-A72-navigation-White-v2.png"
                />
                <Product
                    id="12345"
                    title="June, 2021 The top OPPO A5s"
                    price={16.20}
                    rating={4}
                    image="http://p.ipricegroup.com/uploaded_cb528999c398c5b93b287083761911d8.jpg"
                />
                <Product
                    id="12345"
                    title="VIVO X7 5.2 inch Cellphone 64GB Brand New Smartphone 13MP+16MP Mobile Phone"
                    price={15.40}
                    rating={4}
                    image="https://ph-test-11.slatic.net/p/e87703af4ebd06fa0cbe93cdf049e56e.jpg_720x720q80.jpg_.webp"
                />

            </div>
            <div className="home-row">
                <Product
                    id="12345"
                    title="SAMSUNG GALAXY S21 ULTRA 5G DUAL-SIM SM-G9980"
                    price={20.24}
                    rating={4}
                    image="https://i.expansys.net/img/p/330004/samsung-galaxy-s21-ultra-5g-dual-sim-sm-g9980.jpg"
                />
                <Product
                    id="12345"
                    title="SAMSUNG GALAXY A70 DUAL-SIM SM-A705GM/DS
                    6GB/128GB, WHITE"
                    price={24.50}
                    rating={4}
                    image="https://i.expansys.net/img/p/330357/samsung-galaxy-a70-dual-sim-sm-a705gm-ds.jpg"
                />
                <Product
                    id="12345"
                    title="SAMSUNG GALAXY S20 FE (FAN EDITION) 5G DUAL-SIM SM-G7810
                    8GB/128GB, CLOUD RED"
                    price={25.20}
                    rating={4}
                    image="https://i.expansys.net/img/p/329443/samsung-galaxy-s20-fe-fan-edition-5g-dual-sim-sm-g7810.jpg"
                />
                <Product
                    id="12345"
                    title="SAMSUNG GALAXY A42 5G DUAL-SIM SM-A4260
                    SD750G, 8GB/128GB, PRISM DOT BLACK"
                    price={24.9}
                    rating={4}
                    image="https://i.expansys.net/img/p/329069/samsung-galaxy-a42-5g-dual-sim-sm-a4260.jpg"
                />

            </div>
            <div className="home-row">
                <Product
                    id="12345"
                    title="Apple iPhone X 64G/256G 4G LTE Mobile phone 5.8'' 12.0MP 3G RAM 64G/256G ROM Face ID Cellphone"
                    price={31.20}
                    rating={4}
                    image="https://ph-test-11.slatic.net/p/ce11667c5def60e9258a36cdbdb640b0.jpg_720x720q80.jpg_.webp"
                />
                <Product
                    id="12345"
                    title="Apple iPhone 11 cellphone smart phone mobile phone"
                    price={23.89}
                    rating={4}
                    image="https://media.karousell.com/media/photos/products/2021/3/25/apple_iphone_11_1616634106_2ad9f115_progressive"
                />
                <Product
                    id="12345"
                    title="Unlocked For Apple iPhone 8 2G RAM 64GB/256GB ROM Fingerprint Cellphone 4G LTE 4.7''12.0 MP Camera"
                    price={20.54}
                    rating={4}
                    image="https://my-test-11.slatic.net/p/362dec9550b994cb3c4a4f0e1727db4e.jpg_720x720q80.jpg_.webp"
                />
                <Product
                    id="12345"
                    title="Smartphone In Iphone X Style. Phone Mockup. Stock Vector - Illustration of blank, smart: 128223711"
                    price={19.20}
                    rating={4}
                    image="https://thumbs.dreamstime.com/z/smartphone-iphone-style-phone-mockup-front-view-cellphone-128223711.jpg"
                />

            </div>
        </div>
    )
}

export default Home