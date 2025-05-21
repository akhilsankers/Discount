import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';

function Body() {
    const [originalPrice, setOriginalPrice] = useState(0);
    const [discountPercentage, setDiscountPercentage] = useState(0);
    const [finalPrice, setFinalPrice] = useState(0);
    const [submitted, setSubmitted] = useState(true); // form visible first

    const Submit = () => {
        const discountAmount = (originalPrice * discountPercentage) / 100;
        const final = originalPrice - discountAmount;
        setFinalPrice(final);
        setSubmitted(false); // Show result
    };

    const reset = () => {
        setOriginalPrice(0);
        setDiscountPercentage(0);
        setFinalPrice(0);
        setSubmitted(true); // Show form again
    };

    const discountAmount = (originalPrice * discountPercentage) / 100;

    return (
        <div className='body'>
            <div className="container">
                <div className="row">
                        <h1 className='text-center'>Discount Calculator</h1>
                        {submitted ? (
                            <form className='form'>
                                <div className="mb-3">
                                    <label htmlFor="originalPrice" className="form-label">Original Price</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="originalPrice"
                                        value={originalPrice || ""}
                                        onChange={(e) => setOriginalPrice(Number(e.target.value))}
                                        placeholder='Enter Original Price'
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="discountPercentage" className="form-label">Discount Percentage</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="discountPercentage"
                                        value={discountPercentage || ""}
                                        onChange={(e) => setDiscountPercentage(Number(e.target.value))}
                                        placeholder='Enter Discount Percentage'
                                    />
                                </div>
                                <div className='Button d-flex gap-2'>
                                    <Button onClick={Submit} variant="success">Submit</Button>
                                    <Button onClick={reset} variant="warning">Reset</Button>
                                </div>
                            </form>
                        ) : (
                            <>
                                <div className='row'>
                                    <h3>Original Price: &#8377;{originalPrice}</h3>
                                </div>
                                <div className='row'>
                                    <div style={{ textAlign: 'center'}}>
                                        <h3>Discounted Amount: &#8377;{discountAmount}</h3>
                                    </div>
                                    <div style={{ textAlign: 'center'}}>
                                        <h3>Payable Amount: &#8377;{finalPrice}</h3>
                                    </div>
                                </div>

                                <div className='row'>
                                    <Button onClick={reset} variant="primary" className='mt-3 w-auto mx-auto'>
                                        Calculate Again
                                    </Button>
                                </div>
                            </>
                        )}
                </div>
            </div>
        </div>
    );
}

export default Body;
