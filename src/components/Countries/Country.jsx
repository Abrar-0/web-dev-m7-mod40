import './Country.css'
const Country = ({country}) => {
    const {name,flags, population,area} = country;
    return (
        <div className='country'>
            <h3>Name: {name.official}</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;
