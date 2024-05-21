import { Dialog, DialogPanel } from '@headlessui/react';
import ImageHeroBg from '~/assets/images/hero-bg.png';

export default function BaseModalContact({
  status,
  toggleModal,
}: {
  status: boolean;
  toggleModal: () => void;
}) {
  return (
    <Dialog
      open={status}
      onClose={() => toggleModal()}
      className="relative z-50"
    >
      {status}
      <div className="fixed inset-0 flex w-screen items-center justify-center bg-white/80 px-[20px]">
        <DialogPanel className="relative bg-white rounded-[30px]">
          <img
            alt=""
            src={ImageHeroBg.src}
            className="absolute w-full h-full object-cover rounded-[30px]"
          />

          <div className="relative py-[32px] px-[24px] lg:p-[40px]">
            <div className="flex flex-col items-center gap-[14px]">
              <h1 className="text-[24px] font-bold text-center leading-tight lg:text-[44px]">
                <span className="bg-gradient-to-r from-secondary to-primary inline-block text-transparent bg-clip-text">
                  Contact Me
                </span>
                <br />
                All Time You Need
              </h1>

              <p className="text-center text-[12px] w-full leading-5 lg:leading-8 md:w-[400px] lg:w-[550px] lg:text-[16px]">
                Don't hesitate to tell me your thought, lets talk and build it
                together. Please contact me directly from this platform
              </p>
            </div>

            <div className="flex gap-[12px] text-[34px] lg:text-[46px] w-full justify-center mt-[40px]">
              <a
                href="https://www.linkedin.com/in/cahyadikrishna"
                target="_blank"
                className="transition-colors duration-300 ease-in-out hover:text-primary"
              >
                <i className="ri-linkedin-box-fill"></i>
              </a>

              <a
                href="https://instagram.com/cahyadikrishnaw"
                target="_blank"
                className="transition-colors duration-300 ease-in-out hover:text-pink-600"
              >
                <i className="ri-instagram-fill"></i>
              </a>

              <a
                href="https://wa.me/+6289606620616"
                target="_blank"
                className="transition-colors duration-300 ease-in-out hover:text-green-600"
              >
                <i className="ri-whatsapp-fill"></i>
              </a>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
