import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/footer'
import Navbar from '../comps/navbar'

import Link from 'next/link'

import ImageSlider from '../comps/imageSlider'
//font sekkal majalla

export default function Home() {

    return (
        <>
            <dir className="2xl:container 2xl:mx-auto 2xl:px-0 py-0 px-10">

            <ImageSlider />
        </dir>

            <Head>
                <title>Fatwas</title>
            </Head>

            <div className="py-8 w-full" dir='rtl'>
                {
                    Array.from(Array(5).keys()).map(i => (
                        <div className="lg:flex items-center justify-center w-full m-3">
                            <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                                <div className="flex items-center border-b border-gray-200 pb-6">
                                    <div className="flex items-start justify-between w-full">
                                        <div className="pl-3 w-full">
                                            <p className="text-xl font-medium leading-5 text-gray-800">هل يستحب صيام شعبان كاملاً</p>
                                            <p className="text-sm leading-normal pt-2 text-gray-500">36  </p>
                                        </div>
                                        <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <p className="text-sm leading-5 py-4 text-gray-600">يستحب إكثار الصيام في شهر شعبان .

                                        وقد ورد أن النبي صلى الله عليه وسلم كان يصوم شعبان كله .

                                        روى أحمد (26022) , وأبو داود (2336) والنسائي (2175) وابن ماجه (1648) عَنْ أُمِّ سَلَمَةَ رضي الله عنها قَالَتْ : مَا رَأَيْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ صَامَ شَهْرَيْنِ مُتَتَابِعَيْنِ إِلا أَنَّهُ كَانَ يَصِلُ شَعْبَانَ بِرَمَضَانَ .

                                        ولفظ أبي داود : ( أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ لَمْ يَكُنْ يَصُومُ مِنْ السَّنَةِ شَهْرًا تَامًّا إِلا شَعْبَانَ يَصِلُهُ بِرَمَضَانَ ) . صححه الألباني في صحيح أبي داود (2048) .

                                        فظاهر هذا الحديث أن النبي صلى الله عليه وسلم كان يصوم شهر شعبان كله .</p>

                                </div>
                            </div>
                            <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                                <div className="flex items-center border-b border-gray-200 pb-6">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full flex flex-shrink-0" />
                                    <div className="flex items-start justify-between w-full">
                                        <div className="pl-3 w-full">
                                            <p className="text-xl font-medium leading-5 text-gray-800">هل يستحب صيام شعبان كاملاً</p>
                                        </div>
                                        <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <p className="text-sm leading-5 py-4 text-gray-600">يستحب إكثار الصيام في شهر شعبان .

                                        وقد ورد أن النبي صلى الله عليه وسلم كان يصوم شعبان كله .

                                        روى أحمد (26022) , وأبو داود (2336) والنسائي (2175) وابن ماجه (1648) عَنْ أُمِّ سَلَمَةَ رضي الله عنها قَالَتْ : مَا رَأَيْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ صَامَ شَهْرَيْنِ مُتَتَابِعَيْنِ إِلا أَنَّهُ كَانَ يَصِلُ شَعْبَانَ بِرَمَضَانَ .

                                        ولفظ أبي داود : ( أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ لَمْ يَكُنْ يَصُومُ مِنْ السَّنَةِ شَهْرًا تَامًّا إِلا شَعْبَانَ يَصِلُهُ بِرَمَضَانَ ) . صححه الألباني في صحيح أبي داود (2048) .

                                        فظاهر هذا الحديث أن النبي صلى الله عليه وسلم كان يصوم شهر شعبان كله .</p>

                                </div>
                            </div>
                        </div>
                    ))
                }



            </div>

            <div className="flex flex-col items-center justify-center pt-6 pb-12">
                <div className="w-full max-w-md">
                    <div className="bg-white py-8 px-4 shadow-lg rounded-lg">
                        <h1>follow us on social media</h1>
                        {/* socail media icons */}
                        <div className="flex flex-row justify-center">
                            <a href="https://www.facebook.com/">
                                <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/">
                                <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2a10 10 0 00-9.995 9h11.013A9 9 0 0012 2zm2.5 6a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-6.5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 17a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm0-2a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                                </svg>
                            </a>
                            <a href="https://www.twitter.com/">
                                <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="bg-white py-8 px-4 shadow-lg rounded-lg">
                        <h1>contact us</h1>
                        <p>
                            Apply to Us <br />
                            Darul Huda Islamic University<br />
                            Hidaya Nagar, Chemmad<br />
                            Tirurangadi PO, Malappuram Dist<br />
                            Pin: 676306, Kerala, India<br />
                            0494-2463155, 0494-2460575, 0494-2464502<br />

                        </p>
                    </div>


                </div>
            </div>


        </>
    )
}


