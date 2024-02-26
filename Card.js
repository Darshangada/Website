import React from 'react';

const Card = () => {
    return (
        <>
            <h1 className='center '>Classes</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, animi error dicta voluptates quod, veniam placeat ullam sed voluptate vero dolorem fugiat dolor optio!</p>
            <div className="container d-flex p-5 m-5">
            <div className="card m-5" style={{ width: '18rem' }}>
                <img src="logo192.png" className="card-img-top" alt="Add Image" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn">View</a>
                </div>
            </div>
            <div className="card d-flex m-5" style={{ width: '18rem' }}>
                <img src="logo192.png" className="card-img-top" alt="Add Image" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn">View</a>
                </div>
            </div>
            <div className="card m-5" style={{ width: '18rem' }}>
                <img src="logo192.png" className="card-img-top" alt="Add Image" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn">View</a>
                </div>
            </div>
            </div>
        </>
    );
}

export default Card;
