const Contact = () => {
    return (
        <>
            <section class="m-[100px] mb-0 pb-[100px]">
                <div class="p-[75px] bg-[#E4D3B8] flex flex-col gap-[16px]">
                    <h1 className="text-[32px] mx-auto">Contact</h1>
                    <h2 className="text-[48px] mx-auto">Talk with us to get advice</h2>
                    <form action="#" class="space-y-8 flex flex-col justify-center items-center">
                        <div className="flex justify-between space-x-[50px]">
                            <div className="w-[500px]">
                                <label for="email" class="block mb-2 text-sm font-medium text-black">First Name</label>
                                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                            </div>
                            <div className="w-[500px]">
                                <label for="email" class="block mb-2 text-sm font-medium text-black">Last Name</label>
                                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                            </div>
                        </div>
                        <div className="flex justify-between space-x-[50px]">
                            <div className="w-[500px]">
                                <label for="email" class="block mb-2 text-sm font-medium text-black">Email</label>
                                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                            </div>
                            <div className="w-[500px]">
                                <label for="email" class="block mb-2 text-sm font-medium text-black">Phone</label>
                                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                            </div>
                        </div>
                        <div class="w-[1050px]">
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