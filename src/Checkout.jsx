import React from 'react'
import { useCheckout } from './components/Contexts/CheckoutContext';
import { useCart } from './components/Contexts/CartContext'


function Checkout() {
	const {
		step,
		customerInfo,
		setCustomerInfo,
		deliveryInfo,
		setDeliveryInfo,
		selectedCollectionPoint,
		setSelectedCollectionPoint,
		paymentMethod,
		setPaymentMethod,
		orderPlaced,
		placeOrder,
		nextStep,
		prevStep,
	} = useCheckout();


	const { cartProducts, removeFromCart } = useCart();
	console.log("Cart Products:", cartProducts);



	const citiesAndTowns = [
		'Nairobi',
		'Kisumu',
		'Kiambu',
		'Mombasa',
		'Homabay',
		'Isiolo',
		'Nakuru',
		'Naivasha',
		'Nyeri',
		// 'Murang'a',
		'Embu'
	];

	const handleCustomerInfoChange = (e) => {
		const { name, value } = e.target;
		setCustomerInfo((prevInfo) => ({
			...prevInfo,
			[name]: value,
		}));
	};

	const handleDeliveryInfoChange = (e) => {
		const { name, value } = e.target;
		setDeliveryInfo({ ...deliveryInfo, [name]: value });
	};

	const handlePlaceOrder = () => {
		// Call your place order function with the selectedCollectionPoint
		placeOrder(selectedCollectionPoint);
	};

	const handlePaymentMethodChange = (e) => {
		setPaymentMethod(e.target.value);
	};

	// const { cartProducts } = useContext(CartContext)
	// console.log(cartProducts);





	const renderStep = () => {
		switch (step) {
			case 1:
				return (
					<>
						<h2>Step 1: Customer Details</h2>
						<input
							type='text'
							name='name'
							placeholder='Name'
							value={customerInfo.name}
							onChange={handleCustomerInfoChange}
						/>


						<input
							type='tel'
							phonenumber='phonenumber'
							placeholder='Phone number'
							value={customerInfo.phonenumber}
							onChange={handleCustomerInfoChange}
						/>
						<input
							type='text'
							name='email'
							placeholder='Email'
							value={customerInfo.email}
							onChange={handleCustomerInfoChange}
						/>
						<button onClick={nextStep}>Next</button>
					</>
				);

			case 2:
				return (
					<>
						<h2>Step 2: Delivery Details</h2>
						<input
							type='text'
							name='name'
							placeholder='Name'
							value={deliveryInfo.name}
							onChange={handleDeliveryInfoChange}
						/>

						<input
							type="tel"
							name="phoneNumber"
							placeholder="Phone number (Optional)"
							value={deliveryInfo.phonenumber} 
							onChange={handleDeliveryInfoChange}
						/>

						<input
							type="text"
							name="streetAddress"
							placeholder="Street Address (Optional)"
							value={deliveryInfo.streetaddress}
							onChange={handleDeliveryInfoChange}
						/>

						<input
							type="text"
							name="apartment"
							placeholder="Apartment (Optional)"
							value={deliveryInfo.apartment}
							onChange={handleDeliveryInfoChange}
						/>

						<label>City/Town:</label>
						<select
							value={selectedCollectionPoint}
							onChange={(e) => setSelectedCollectionPoint(e.target.value)}
						>
							<option value="">Select a Collection Point</option>
							{citiesAndTowns.map((city, index) => (
								<option key={index} value={city}>
									{city}
								</option>
							))}
						</select>

						<button onClick={prevStep}>Previous</button>
						<button onClick={nextStep}>Next</button>

					</>
				);
			case 3:
				return (
					<>
						<h2>Step 3: Order Summary</h2>
						{/* Display order summary here */}
						<div className='order-summary'>
							<ul>
								{cartProducts.map((product) => (
									<li key={product.id}>
										{product.title} x {product.quantity} - Ksh {product.price * product.quantity}
										<button onClick={() => removeFromCart(product.id)}>Remove</button>
									</li>
								))}
							</ul>
							<div className='total-amount'>
								Total Amount: Ksh{''}
								{cartProducts.reduce((acc, product) => acc + product.price * product.quantity, 0)}
							</div>
						</div>
						<label>
							<input
								type="radio"
								name="paymentMethod"
								value="Mpesa"
								checked={paymentMethod === 'Mpesa'}
								onChange={handlePaymentMethodChange}
							/>
							Mpesa
						</label>

						<label>
							<input
								type="radio"
								name="paymentMethod"
								value="PayPal"
								checked={paymentMethod === 'PayPal'}
								onChange={handlePaymentMethodChange}
							/>
							PayPal
						</label>
						<label>
							<input
								type="radio"
								name="paymentMethod"
								value="iPay"
								checked={paymentMethod === 'iPay'}
								onChange={handlePaymentMethodChange}
							/>
							iPay
						</label>
						<button onClick={prevStep}>Previous</button>
						<button onClick={handlePlaceOrder}>Place Order</button>
					</>
				);
			default:
				return (
					<>
						<h2>Order Placed Successfully</h2>
						{/* Display order summary here */}
					</>
				);
		}
	};

	return (
		<div className="checkout">
			{renderStep()}
			{orderPlaced && (
				<div className="order-placed-message">
					<p>Order Placed Successfully!</p>
				</div>
			)}
		</div>
	);
}
export default Checkout