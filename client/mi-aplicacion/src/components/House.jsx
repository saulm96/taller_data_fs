import {houses} from './data/HouseData'
import './House.css'

function House() {
    return (
        <div className="house-container">
            {houses.map((house) => (
                <div key={house.id} className="house-card">
                    <h2>{house.title}</h2>
                    <p>Price:{house.price} €</p>
                    <p>Surface:{house.surface} m²</p>
                    <p>Bedrooms: {house.bedrooms}</p>
                    <p>Restrooms:{house.restrooms}</p>
                    <p>Description: {house.description}</p>
                    <p>Type:{house.rent ? "Alquiler" : "Venta"}</p>
                    <p>Location:{house.location_name} ({house.is_province ? "Provincia" : "Ciudad"})</p>
                </div>
            ))}
        </div>
    );
}

export default House;
