import {scroller} from "react-scroll/modules";

const scrollToElement = (element) => {
    scroller.scrollTo(element, {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: 60
    });
};

export default scrollToElement;