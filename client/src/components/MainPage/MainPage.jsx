
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCities } from '../../redux/actions/cityActions';
import Video from './Video';
import CardWithLike from './CardWithLike';
import Cards from './Cards';

function MainPage() {
    const { city } = useSelector((s) => s);
    console.log(city);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllCities());
    }, []);
    return (
        <>
            <Video />
            <div className="container" style={{ display: 'flex', justifyConetnt: 'center', backgroundColor: 'black' }}>

                <ul className="list-group">
                    {city && city?.map((el) => (
                        <Cards key={el.id} city={el} id={el.id} />
                    ))}
                </ul>
                <CardWithLike />
            </div>
        </>
    );
}

export default MainPage;