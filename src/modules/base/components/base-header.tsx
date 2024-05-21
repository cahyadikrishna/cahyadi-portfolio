import { useEffect, useState } from 'react';
import { cnb } from 'cnbuilder';
import logo from '~/assets/images/logo-cahyadi.svg';
import BaseModalContact from './base-modal-contact';

export default function BaseHeader({ pathName }: { pathName: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function toggleModal() {
    setIsModalVisible(!isModalVisible);
  }

  useEffect(() => {
    // reset state when path change
    setIsOpen(false);

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setIsScroll(window.scrollY > 50));
    }
  }, [pathName]);

  useEffect(() => {
    // reset state when scrolled when menu opened
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0 && isOpen) {
        setIsOpen(false);
      }
    });
  }, [window.scrollY]);

  const MENU_LIST = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Project',
      path: '/project',
    },
    {
      name: 'About',
      path: '/about',
    },
  ];

  return (
    <>
      <BaseModalContact status={isModalVisible} toggleModal={toggleModal} />
      <header
        className={cnb(
          'max-w-[1200px] transition ease-in-out duration-300 px-[20px] fixed inset-x-0 mx-auto z-10',
          {
            'top-[30px] px-[30px] lg:px-[80px]': isScroll,
          }
        )}
      >
        <div
          className={cnb('bg-white transition ease-in-out duration-300', {
            'bg-gray-main rounded-[30px] drop-shadow-2xl': isScroll,
          })}
        >
          <div className="hidden md:block">
            <div
              className={cnb(
                'flex h-full items-center justify-between px-[20px] py-[14px] transition ease-in-out duration-300',
                {
                  'px-[16px] md:px-[30px]': isScroll,
                }
              )}
            >
              <a href="/" className="logo">
                <img
                  src={logo.src}
                  alt="Cahyadi Krishna"
                  className="h-[40px] w-[40px]"
                />
              </a>

              <nav className="hidden md:block">
                <ul className="flex items-center gap-[40px] font-semibold">
                  {MENU_LIST.map((menu) => (
                    <li
                      key={menu.name}
                      className={cnb('hover:text-secondary', {
                        'text-secondary': menu.path === pathName,
                      })}
                    >
                      <a href={menu.path}>{menu.name}</a>
                    </li>
                  ))}

                  <button
                    className="px-[20px] py-[2px] bg-gradient-to-r from-secondary to-primary rounded-[6px] text-white"
                    onClick={() => setIsModalVisible(true)}
                  >
                    Contact
                  </button>
                </ul>
              </nav>
            </div>
          </div>

          {/* Mobile Nav Menu */}
          <div className="block md:hidden">
            <div
              className={cnb(
                'flex h-full items-center justify-between px-[20px] transition ease-in-out duration-300',
                {
                  'px-[16px] md:px-[30px]': isScroll,
                }
              )}
            >
              <a href="/" className="logo">
                <img
                  src={logo.src}
                  alt="Cahyadi Krishna"
                  className="h-[40px] w-[40px]"
                />
              </a>

              <div
                className="px-[8px] py-[12px]"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <span className="text-[32px]">
                    <i className="ri-close-fill"></i>
                  </span>
                ) : (
                  <span className="text-[28px]">
                    <i className="ri-menu-3-fill"></i>
                  </span>
                )}
              </div>
            </div>

            <hr className={isOpen ? 'block' : 'hidden'}></hr>

            <nav className={isOpen ? 'block' : 'hidden'}>
              <ul className="flex flex-col items-center font-semibold py-[20px] px-[16px]">
                {MENU_LIST.map((menu) => (
                  <li
                    key={menu.name}
                    className={cnb('hover:text-secondary py-[10px]', {
                      'text-secondary': menu.path === pathName,
                    })}
                  >
                    <a href={menu.path}>{menu.name}</a>
                  </li>
                ))}

                <button
                  className="px-[20px] py-[2px] rounded-[6px] text-white w-full bg-gradient-to-r from-secondary to-primary"
                  onClick={() => setIsModalVisible(true)}
                >
                  Contact
                </button>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
