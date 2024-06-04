const Contact = () => {
    return (
        <>
            <section class="md:m-[100px] mb-0 md:pb-[100px] sm:m-[25px] sm:pb-[25px]">
                <div class="md:p-[75px] md:bg-[#E4D3B8] flex flex-col gap-[16px] sm:p-[25px] sm:bg-transparent">
                    <h1 className="md:text-[32px] mx-auto sm:text-[20px]">Contact</h1>
                    <h2 className="md:text-[48px] mx-auto sm:text-[24px]">Talk with us to get advice</h2>
                    <form action="#" class="space-y-8 flex flex-col justify-center items-center">
                        <div className="flex md:flex-row justify-between md:space-x-[50px] sm:flex-col sm:space-x-0">
                            <div className="md:w-[500px] sm:w-[343px]">
                                <label for="email" class="block mb-2 text-sm font-medium text-black">First Name</label>
                                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="" required />
                            </div>
                            <div className="md:w-[500px] sm:w-[343px]">
                                <label for="email" class="block mb-2 text-sm font-medium text-black">Last Name</label>
                                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="" required />
                            </div>
                        </div>
                        <div className="flex md:flex-row justify-between md:space-x-[50px] sm:flex-col sm:space-x-0">
                            <div className="md:w-[500px] sm:w-[343px]">
                                <label for="email" class="block mb-2 text-sm font-medium text-black">Email</label>
                                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="" required />
                            </div>
                            <div className="md:w-[500px] sm:w-[343px]">
                                <label for="email" class="block mb-2 text-sm font-medium text-black">Phone</label>
                                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="" required />
                            </div>
                        </div>
                        <div class="md:w-[1050px] sm:w-[343px]">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                            <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" class="py-3 px-5 bg-black text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact;