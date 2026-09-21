const Contact = () => {
  return (
    <div className="contacts mt-32 sm:p-10 p-0" id="contacts">
      <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Contacts</h1>
      <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000"
        data-aos-delay="300" data-aos-once="true">
        You can contact me through here</p>
      <form action="https://formsubmit.co/kenmattxd@gmail.com" method="POST"
        className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off"
        data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Name</label>
            <input type="text" name="Name" placeholder="Enter your name..." className="border border-zinc-500 p-2 rounded-md" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Email</label>
            <input type="email" name="Email" placeholder="Enter your Email Address..." className="border border-zinc-500 p-2 rounded-md" required />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pesan" className="font-semibold">Subject & Message</label>
            <textarea name="pesan" id="Message" cols="45" rows="7" placeholder="Leave a message here..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-blue-400">Send</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
