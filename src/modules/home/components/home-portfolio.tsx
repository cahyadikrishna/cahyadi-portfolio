import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

export default function HomePortfolio() {
  const TAB_DATA = [
    {
      name: 'Academic',
      content: [
        {
          title: 'Primakara University',
          role: 'Student',
          year: '2020 - Present',
          description:
            'Seorang Mahasiswa Jurusan Sistem Informasi yang menyukai tentang User Interface Design. Saat ini bertempat tinggal di Bali - Gianyar. ',
        },
        {
          title: 'Primakara University',
          role: 'Student',
          year: '2020 - Present',
          description:
            'Seorang Mahasiswa Jurusan Sistem Informasi yang menyukai tentang User Interface Design. Saat ini bertempat tinggal di Bali - Gianyar. ',
        },
        {
          title: 'Primakara University',
          role: 'Student',
          year: '2020 - Present',
          description:
            'Seorang Mahasiswa Jurusan Sistem Informasi yang menyukai tentang User Interface Design. Saat ini bertempat tinggal di Bali - Gianyar. ',
        },
        {
          title: 'Primakara University',
          role: 'Student',
          year: '2020 - Present',
          description:
            'Seorang Mahasiswa Jurusan Sistem Informasi yang menyukai tentang User Interface Design. Saat ini bertempat tinggal di Bali - Gianyar. ',
        },
      ],
    },
    {
      name: 'Career',
      content: [
        {
          title: 'Primakara University',
          role: 'Student',
          year: '2020 - Present',
          description:
            'Seorang Mahasiswa Jurusan Sistem Informasi yang menyukai tentang User Interface Design. Saat ini bertempat tinggal di Bali - Gianyar. ',
        },
        {
          title: 'Primakara University',
          role: 'Student',
          year: '2020 - Present',
          description:
            'Seorang Mahasiswa Jurusan Sistem Informasi yang menyukai tentang User Interface Design. Saat ini bertempat tinggal di Bali - Gianyar. ',
        },
        {
          title: 'Primakara University',
          role: 'Student',
          year: '2020 - Present',
          description:
            'Seorang Mahasiswa Jurusan Sistem Informasi yang menyukai tentang User Interface Design. Saat ini bertempat tinggal di Bali - Gianyar. ',
        },
        {
          title: 'Primakara University',
          role: 'Student',
          year: '2020 - Present',
          description:
            'Seorang Mahasiswa Jurusan Sistem Informasi yang menyukai tentang User Interface Design. Saat ini bertempat tinggal di Bali - Gianyar. ',
        },
      ],
    },
    {
      name: 'Community',
      content: [
        {
          title: 'Primakara University',
          role: 'Student',
          year: '2020 - Present',
          description:
            'Seorang Mahasiswa Jurusan Sistem Informasi yang menyukai tentang User Interface Design. Saat ini bertempat tinggal di Bali - Gianyar. ',
        },
        {
          title: 'Primakara University',
          role: 'Student',
          year: '2020 - Present',
          description:
            'Seorang Mahasiswa Jurusan Sistem Informasi yang menyukai tentang User Interface Design. Saat ini bertempat tinggal di Bali - Gianyar. ',
        },
        {
          title: 'Primakara University',
          role: 'Student',
          year: '2020 - Present',
          description:
            'Seorang Mahasiswa Jurusan Sistem Informasi yang menyukai tentang User Interface Design. Saat ini bertempat tinggal di Bali - Gianyar. ',
        },
        {
          title: 'Primakara University',
          role: 'Student',
          year: '2020 - Present',
          description:
            'Seorang Mahasiswa Jurusan Sistem Informasi yang menyukai tentang User Interface Design. Saat ini bertempat tinggal di Bali - Gianyar. ',
        },
      ],
    },
  ];
  return (
    <section className="container mx-auto mt-[50px]">
      <TabGroup>
        <TabList className="bg-gray-main flex gap-[12px] py-[16px] px-[22px] rounded-[20px] mx-auto justify-center items-center w-fit">
          {TAB_DATA.map((tab, i) => (
            <Tab
              key={i}
              className="text-dark-secondary py-[6px] px-[44px] rounded-[8px] font-semibold focus:outline-none data-[selected]:bg-gradient-to-r data-[selected]:from-secondary data-[selected]:to-primary data-[selected]:text-white data-[hover]:bg-gray-secondary"
            >
              {tab.name}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {TAB_DATA.map((tab, i) => (
            <TabPanel key={i} className="grid grid-cols-2 gap-[40px] mt-[60px]">
              {tab.content.map((content, i) => (
                <div key={i}>
                  <div className="flex flex-col gap-[10px]">
                    <h2 className="font-semibold text-[24px]">
                      {content.title}
                    </h2>

                    <span className="text-[20px] text-medium text-dark-secondary">
                      {content.role} | {content.year}
                    </span>
                  </div>

                  <p className="text-[18px] text-dark-secondary">
                    {content.description}
                  </p>
                </div>
              ))}
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </section>
  );
}
