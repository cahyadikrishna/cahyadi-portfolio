import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { sanityClient } from '~/api/sanity-api';
import { type Portfolio } from '~/entities';

export default function HomePortfolio() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);

  async function getPortfolio() {
    const portfolios = await sanityClient.fetch<Portfolio[]>(
      '*[_type == "portfolio"]'
    );
    setPortfolios(portfolios);
  }

  useEffect(() => {
    getPortfolio();
  }, []);

  return (
    <section className="container mx-auto px-[20px] mt-[50px]">
      <TabGroup>
        <TabList className="bg-gray-main flex flex-col gap-[12px] py-[16px] px-[22px] rounded-[20px] mx-auto justify-center items-center w-full sm:w-fit sm:flex-row">
          {portfolios.map((portfolio, i) => (
            <Tab
              key={i}
              className="text-dark-secondary py-[6px] px-[44px] rounded-[8px] font-semibold focus:outline-none data-[selected]:bg-gradient-to-r data-[selected]:from-secondary data-[selected]:to-primary data-[selected]:text-white data-[hover]:bg-gray-secondary w-full sm:w-fit"
            >
              {portfolio.name}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {portfolios.map((portfolio, i) => (
            <TabPanel
              key={i}
              className="grid grid-cols-1 gap-[40px] mt-[60px] sm:grid-cols-2"
            >
              {portfolio.contents!.map((content, i) => (
                <div key={i}>
                  <div className="flex flex-col gap-[10px]">
                    <h2 className="font-semibold text-[24px]">
                      {content.title}
                    </h2>

                    <span className="text-[20px] text-medium text-dark-secondary">
                      {content.role} | {content.startDate} - {content.endDate}
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
