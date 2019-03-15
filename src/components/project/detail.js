import React, {Component} from 'react';
import Header from '../layout/header';
import Footer from '../layout/footer';
import axios from 'axios';


class Detail extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        if (id > 700 && id < 800) {
            var country = "us";
        } else {
            var country = "jp";
        }

        axios.get('https://newsapi.org/v2/top-headlines?country=' + country + '&apiKey=c8b54d349c2749dcac11a015fb05eee1')
            .then((response) => {
                console.log(response.data);
            });

    }

    render() {
        return (
            <div>
                <Header/>
                <Footer/>
            </div>
        )
    }
}


export default Detail;