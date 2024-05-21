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

  function getPortfolioYear(startDate: string, endDate: string | undefined) {
    const portfolioStartYear = new Date(startDate).getFullYear();

    if (endDate === undefined) {
      return `${portfolioStartYear} - Present`;
    }

    const portfolioEndYear = new Date(endDate).getFullYear();
    return `${portfolioStartYear} - ${portfolioEndYear}`;
  }

  return (
    <section className="max-w-[1200px] mx-auto px-[20px] mt-[50px]">
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
              className="grid grid-cols-1 gap-[30px] mt-[60px] sm:grid-cols-2"
            >
              {portfolio.contents!.map((content, i) => (
                <div key={i} className="bg-gray-main rounded-[30px] p-[30px]">
                  <div className="flex flex-col gap-[10px]">
                    <div className="flex flex-col gap-[8px] items-start justify-between lg:gap-[20px] lg:flex-row">
                      <h2 className="font-semibold text-[20px] max-w-[330px]">
                        {content.title}
                      </h2>

                      <div className="bg-primary text-white text-[12px] font-semibold px-[12px] py-[4px] rounded-[10px]">
                        <span>
                          {getPortfolioYear(
                            String(content.startDate),
                            content.endDate
                          )}
                        </span>
                      </div>
                    </div>

                    <span className="text-[12px] font-semibold text-primary lg:text-[16px]">
                      {content.role}
                    </span>

                    <hr className="border border-b-2 rounded-full" />

                    <p className="text-[14px] text-dark-secondary md:text-[16px]">
                      {content.description}
                    </p>
                  </div>
                </div>
              ))}
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </section>
  );
}
