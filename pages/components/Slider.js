import { Carousel } from "react-responsive-carousel";

export default function Slider() {
        return (
            <Carousel showArrows={true} onChange={Carousel.onChange} onClickItem={Carousel.onClickItem} onClickThumb={Carousel.onClickThumb}>
                <div>
                <img src="/slider/cadcliente.png" />
                <img src="/slider/cadmercadoria.png" />
                <img src="/slider/emissaoboleto.png" />
                <img src="/slider/notafiscal.png" />
                </div>
            </Carousel>
        );
    }