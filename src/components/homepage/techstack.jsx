import Carousel from 'react-bootstrap/Carousel';


export default function TechStack() {

    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className='d-block w-100'
                src='../assets/Python.png'
                alt="python"/>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className='d-block w-100'
                src='../assets/react.png'
                alt="react"/>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className='d-block w-100'
                src='../assets/postgres.png'
                alt="postgres"/>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className='d-block w-100'
                src='../assets/flask.png'
                alt="flask"/>
            </Carousel.Item>
        </Carousel>


    )
}