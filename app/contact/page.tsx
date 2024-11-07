const Contact = () => {
    return (
        <div className="bg-gray-100 p-2 md:p-4 lg:p-10">
            <div className="max-w-7xl mx-auto p-2 lg:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className='bg-gray-200 p-2 lg:p-8 rounded-sm shadow-md'>
                        <h1 className="text-2xl font-semibold mb-6 text-[#FF6608]">Contact Us</h1>
                        <p className="mb-4">Leave your contact information here! We will contact you shortly once we receive your inquiry.</p>
                        <h2 className="text-lg font-semibold mb-4">Feel free to contact with us</h2>
                        <form>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name*:</label>
                                    <input
                                        type="text"
                                        id="first-name"
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                        placeholder=""
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone*:</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                        placeholder=""
                                    />
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name*:</label>
                                    <input
                                        type="text"
                                        id="last-name"
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                        placeholder=""
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email Address*:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                        placeholder=""
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject:</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                        placeholder=""
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message*:</label>
                                    <textarea
                                        id="message"
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                        rows={4}
                                        placeholder="Your message..."
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="mt-4 bg-[#223adb] text-white px-4 py-2 rounded-md"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className='p-2 lg:p-8 rounded-sm border shadow-sm'>
                        <h2 className="text-2xl font-semibold mb-4 text-[#FF6608]">Business Opportunity</h2>
                        <p>At BSI, we welcome any opportunity you may bring about becoming our customers or suppliers, and we will be happy to assist you. Please get in touch with us at:</p>

                        <h3 className="mt-4 font-semibold">Our Location</h3>
                        <p>Main Office: #178E0E1, Street 1972, Phnom Penh Thmey, Sen Sok 120801, Cambodia</p>

                        <h3 className="mt-4 font-semibold">Our Phone</h3>
                        <p>(+855) 23 902 088</p>

                        <h3 className="mt-4 font-semibold">Our Email</h3>
                        <a href="mailto:kbl@bsi.com.kh" className="text-[#223adb] underline">Email: kbl@bsi.com.kh</a>

                        <h3 className="mt-4 font-semibold">Business Hours</h3>
                        <p>Monday - Friday: 8 am to 5 pm</p>
                        <p>Saturday, Sunday: Closed</p>

                        <p className="mt-4">For more information visit:</p>
                        <a href="https://www.bsi.com.kh" className="text-[#223adb] underline">www.bsi.com.kh</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
