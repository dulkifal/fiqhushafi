

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
            {/* <ImageSlider/> */}





            <Head>
                <title>Fatwas</title>
            </Head>

            <div className="py-8 w-full" dir='rtl'>
               {
                 Array.from(Array(10).keys()).map(i => (
                    <div className="lg:flex items-center justify-center w-full m-1">
                    <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                        <div className="flex items-center border-b border-gray-200 pb-6">
                            <div className="flex items-start justify-between w-full">
                                <div className="pl-3 w-full">
                                    <p className="text-xl font-medium leading-5 text-gray-800">هل يستحب صيام شعبان كاملاً</p>
                                    <p className="text-sm leading-normal pt-2 text-gray-500">36 members</p>
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
                            <div className="flex">
                                <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#dogecoin</div>
                                <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#crypto</div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                        <div className="flex items-center border-b border-gray-200 pb-6">
                            <div className="w-12 h-12 bg-gray-300 rounded-full flex flex-shrink-0" />
                            <div className="flex items-start justify-between w-full">
                                <div className="pl-3 w-full">
                                    <p className="text-xl font-medium leading-5 text-gray-800">هل يستحب صيام شعبان كاملاً</p>
                                    <p className="text-sm leading-normal pt-2 text-gray-500">36 members</p>
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
                            <div className="flex">
                                <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#Buy</div>
                                <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#Sell</div>
                                <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#Rent</div>
                            </div>
                        </div>
                    </div>
                </div>
                    ))
               }
               
                
                
            </div>

            <div className="flex flex-col items-center justify-center pt-6 pb-12">
                <div className="w-full max-w-md">
                    <div className="bg-white py-8 px-4 shadow-lg rounded-lg">

                    </div>
                </div>
            </div>


        </>
    )
}


