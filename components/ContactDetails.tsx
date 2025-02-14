export default function ContactDetails() {
    return (
        <section className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Visit Our Location</h2>
                    <p className="mt-4 text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="mt-16 lg:mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.420496540115!2d36.82194661475951!3d-1.286881999060417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f186c2b5b38c3%3A0x9c495b0d198349cc!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1623823252027!5m2!1sen!2sus"
                                width="100%" height="480" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                        </div>
                        <div>
                            <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                                <div className="px-6 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                                    <p className="mt-1 text-gray-600">123 Main St, Nairobi, KE</p>
                                </div>
                                <div className="border-t border-gray-200 px-6 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                                    <p className="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
                                    <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                                    <p className="mt-1 text-gray-600">Sunday: Closed</p>
                                </div>
                                <div className="border-t border-gray-200 px-6 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                                    <p className="mt-1 text-gray-600">Email: info@example.com</p>
                                    <p className="mt-1 text-gray-600">Phone: +254 1135 46786</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
