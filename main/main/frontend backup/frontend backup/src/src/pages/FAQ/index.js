import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import Header from '../../components/Header/Header'
import Menubar from '../../components/Menubar/Menubar'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../FAQ/index.css'

const faq = () => {


    return (
        <div className='container-xl'>


            <section id="questions" class="p-5">
                <div class="container">
                    <h2 class="text-center mb-4">Frequently Asked Questions</h2>
                    <div class="accordion accordion-flush" id="questions">

                        <br />
                        <h4>General</h4>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#question-one"
                                >
                                    How can I order
                                </button>
                            </h2>
                            <div
                                id="question-one"
                                class="accordion-collapse collapse"
                                data-bs-parent="#questions"
                            >
                                <div class="accordion-body">
                                    You can order easily using our online platform.
                                    When you find a product you need, you can add it
                                    to cart, login and go through the ordering process.
                                    After the order is ready, you will receive order summary
                                    to your email. Order summary will also be stored to your account.
                                    <br /><br />
                                    
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#question-two"
                                >
                                    Why should I buy online?
                                </button>
                            </h2>
                            <div
                                id="question-two"
                                class="accordion-collapse collapse"
                                data-bs-parent="#questions"
                            >
                                <div class="accordion-body">
                                    Speeding up the process. By ordering online you
                                    will you will get prices faster and you will be able
                                    to go through order confirmation and payment process
                                    much faster. This could save days of your time.
                                    <br /><br />
                                    Traceability: You will have easy access to all of your
                                    previous orders any time you want.
                                    <br /><br />
                                    Reordering:  you can make a re-order anytime based on
                                    your previous orders by only couple of clicks. This will
                                    save time and effort as you don’t need to go through all
                                    the documents and emails from the past.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#question-three"
                                >
                                    What information should I input when ordering?
                                </button>
                            </h2>
                            <div
                                id="question-three"
                                class="accordion-collapse collapse"
                                data-bs-parent="#questions"
                            >
                                <div class="accordion-body">
                                    our online ordering system will ask for all the important
                                    information you should submit.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#question-four"
                                >
                                    What payment methods can I use?
                                </button>
                            </h2>
                            <div
                                id="question-four"
                                class="accordion-collapse collapse"
                                data-bs-parent="#questions"
                            >
                                <div class="accordion-body">
                                    You can utilize all the Wallet Balance.
                                </div>
                            </div>
                        </div>

                        <br />
                        <h4>Your account</h4>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#question-five"
                                >
                                    How do create an account?
                                </button>
                            </h2>
                            <div
                                id="question-five"
                                class="accordion-collapse collapse"
                                data-bs-parent="#questions"
                            >
                                <div class="accordion-body">
                                    Go to this page <Link to="/signup" className='text-reset alert-link'>Sign Up</Link> and 
                                    you can see “Create account”, then just fill in all the needed
                                    information and click “create a new account”.  After submitting the form,
                                    your account will be confirmed and you will be notified.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#question-six"
                                >
                                    How do I change my personal details or email address?
                                </button>
                            </h2>
                            <div
                                id="question-six"
                                class="accordion-collapse collapse"
                                data-bs-parent="#questions"
                            >
                                <div class="accordion-body">
                                    You can easily change all your information on your account.
                                    Go to this page (<Link to="/signin" className='text-reset alert-link'>Sign In</Link>) and Sign in,
                                    then click “Profile” and “edit”. Here you can change all your
                                    contact information.
                                </div>
                            </div>
                        </div>

                        <br />
                        <h4>Order </h4>
                        {/* <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#question-seven"
                                >
                                    Can I track my order?
                                </button>
                            </h2>
                            <div
                                id="question-seven"
                                class="accordion-collapse collapse"
                                data-bs-parent="#questions"
                            >
                                <div class="accordion-body">
                                    We will send you the tracking code of the shipment when the
                                    parcel has been sent.
                                </div>
                            </div>
                        </div> */}

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#question-eight"
                                >
                                    Shipping cost?
                                </button>
                            </h2>
                            <div
                                id="question-eight"
                                class="accordion-collapse collapse"
                                data-bs-parent="#questions"
                            >
                                <div class="accordion-body">
                                    Shipping costs are dependent on your location and products
                                    on your order. Some products need to be shipped in dry ice.
                                    These dry ice shipments have a slightly higher shipping fee.
                                    Our online store shows the shipping fee and shipping cost
                                    automatically on the checkout.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#question-nine"
                                >
                                    What are the delivery charges?
                                </button>
                            </h2>
                            <div
                                id="question-nine"
                                class="accordion-collapse collapse"
                                data-bs-parent="#questions"
                            >
                                <div class="accordion-body">
                                    Delivery charges are dependent on the shipment requirements.
                                    If the products on your order are due to special requirements
                                    (for example dry ice) extra fee will be added to the shipment
                                    charges. You can see the shipping fees on the checkout process
                                    before the payment is made.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#question-ten"
                                >
                                    Can I cancel my order?
                                </button>
                            </h2>
                            <div
                                id="question-ten"
                                class="accordion-collapse collapse"
                                data-bs-parent="#questions"
                            >
                                <div class="accordion-body">
                                    If you want to cancel your order, please do so as soon as
                                    possible. If we have already processed your order, you need
                                    to contact us and return the product.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default faq;


