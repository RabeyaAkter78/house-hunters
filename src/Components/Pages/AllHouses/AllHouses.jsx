import React, { useEffect, useState } from 'react';

const AllHouses = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch('homeImages.json')
            .then(res => res.json())
            .then(data => {
                setImages(data);
                console.log(data);
            })

    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 py-5 gap-12">
            {images.map(image => <div key={image.id}>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={image.url} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">{image.title}</div>
                        </h2>
                   
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>

            </div>)}

        </div>
    );
};

export default AllHouses;