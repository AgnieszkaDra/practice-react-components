import React from "react";
import {get} from './WeatherFetch'
class Weather extends React.Component {
    state = {
        data: null
    }

    componentDidMount(){
        get(this.props.lat, this.props.lon)
            .then((data) => {
                this.setState({data: data});
            })
    }
   
    render(){
        const {data} = this.state;
        console.log(data)
        if(data){
            const {name} = data.location
            const {temp_c, cloud} = data.current
            return (
                <>
                    <h1>Prognoza pogody dla miasta: {name}</h1>
                    <p>Opady {cloud}</p>
                    <p>Temperatura {temp_c} </p>
                </>
            )}
        return null
    }
   

}

export default Weather;