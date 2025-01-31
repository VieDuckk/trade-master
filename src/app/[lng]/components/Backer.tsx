'use client'
import Image from "next/image";
import { LearnButton } from "./Button";
import fonts from "@/configs/fonts";
import clsx from "clsx";

import { Trans } from 'react-i18next/TransWithoutContext'
import { languages, fallbackLng } from '../../i18n/settings'
import { useTranslation } from '../../i18n/client'


export default function Backer ({ params: { lng } }: {
  params: {
    lng: string;
  };
}) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = useTranslation(lng,'backer')
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col items-center">
          <div
            className={clsx(
              fonts.kanit.className,
              "text-center font-semibold text-4xl lg:text-[54px] lg:leading-[54px]"
            )}
          >
            <Trans t={t}  i18nKey="backer">
              TONSQUARE x TON BLOCKCHAIN
            </Trans>
          </div>
          <div className="text-center text-sm font-thin w-[40%] break-words  mt-4">
            <Trans t={t}  i18nKey="backer-description">
            TON Fusion leverages Tonsquare, a Layer 2 solution on the TONBlockchain, enhancing transaction throughput and significantly reducing fees. Handle millions of transactions per second seamlessly.
            </Trans>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between mt-8 gap-4 ">
          <div className="lg:w-2/3 w-full bg-form-background border border-blue-600 rounded-xl p-6 flex relative overflow-hidden">
            <div className="w-1/2 pr-4">
              <div className="mb-28">
                <h3 className="text-white max-w-[60%] font-bold text-[25px] mb-4">
                  <Trans t={t}  i18nKey="title-backer-1">
                    CROSS-CHAIN ASSET FLEXIBILITY
                  </Trans>
                </h3>
                <p className="text-white font-thin text-[16px] break-words w-[100%] mb-4">
                  <Trans t={t}  i18nKey="content-backer-1">
                  Easily transfer assets between TON and EVM-compatible chains. Our integrated system ensures you benefit from the best of both ecosystems, optimizing your trading and staking.
                  </Trans>
                </p>
              </div>
              <LearnButton className="absolute bg-transparent bottom-10 border border-solid border-white w-40 " />
            </div>
            <div className="absolute lg:top-7 lg:left-[52%] top-32 left-[52%] lg:w-[60%] lg:h-[105%] w-auto h-auto z-0 object-cover">
              <Image
                src="/images/backers/form1.png"
                alt="Background Image 1"
                fill
                style={{ objectFit: "cover" }}
                quality={100}
              />
            </div>
          </div>
          <div className="lg:w-1/3 w-full bg-form2-background border border-gray-600 rounded-xl p-6 relative overflow-hidden">
            <div className="mb-28 max-w-[70%] ">
              <h3 className="text-white font-bold text-[25px] mb-4">
                <Trans t={t}  i18nKey="title-backer-2">
                  DATA INTEGRITY AND TRANSPARENCY
                </Trans>
              </h3>
              <p className="text-white text-sm font-thin break-words w-[100%] mb-4">
                <Trans t={t}  i18nKey="content-backer-2">
                  Trust and transparency are fundamental to DeFi. TON Fusion leverages Celestias Data Availability solution to ensure the integrity and accessibility of all on-chain data.
                </Trans>
              </p>
            </div>
            <LearnButton className="absolute bg-transparent bottom-10 border border-solid border-white w-40" />
            <div className="absolute bottom-1 left-[52%] w-[82%] h-[50%] lg:w-[60%] z-0 object-cover">
              <Image
                src="/images/backers/form2.png"
                alt="Background Image 2"
                fill
                style={{ objectFit: "cover" }}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
