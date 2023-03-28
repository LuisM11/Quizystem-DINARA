import React, { useState } from 'react'
import Quizystem from '../../../assets/QLogoWhite.png'
import femavatar from '../../../assets/femAvatar.png'
import { useGlobalContext } from '../../context/GlobalContext'
import { UilApps, UilUsersAlt, UilCommentAltQuestion, UilCog, UilQuestionCircle } from '@iconscout/react-unicons'
import { DownCircleOutlined } from '@ant-design/icons';


export const Aside = () => {
    const [studentsOpen, setstudentsOpen] = useState(false)
    const { setloggedUser } = useGlobalContext();
    return (
        <>
            <aside className='fixed flex flex-col justify-between h-screen min-w-[230px] w-[20%] bg-primary overflow-y-auto'>
                <img src={Quizystem} alt="LogoQuizystem" className='w-1/2 ml-3 mt-2' />

                <div className='my-8 flex flex-col  items-center'>
                    <figure className='my-2 w-16 h-16 bg-white rounded-full overflow-hidden'>
                        <img className='w-[90%] mx-auto object-cover' src={femavatar} alt="" />
                    </figure>
                    {/* <i style={{backgroundImage: `url('${femavatar}')` }} className= {`rounded-full h-16 w-16 bg-white bg-cover ]`} ></i> */}
                    <h2 className='text-lg font-semibold text-white'>Marianita Arias</h2>
                    <h3 className='text-lg font-medium text-tertiary'>Admin</h3>
                    <hr className='w-[80%] my-2' />
                </div>


                <nav className='mt-4 mb-2 flex flex-col justify-between min-h-[200px] h-[60%]'>
                    <ul className='flex flex-col gap-2 list-none  text-white'>
                        <li className='border-l-[6px] border-l-tertiary pl-5 flex items-center text-tertiary'>
                            <UilApps className='w-5 mr-2 h-full' />
                            <span className=''>Dashboard</span>
                        </li>
                        <li onClick={() => setstudentsOpen(p => !p)} className='border-l-[6px] border-l-primary pl-5 '>
                            <div className='w-full flex items-center justify-between'>
                                <div className='flex'>
                                    <UilUsersAlt className='w-5 mr-2 h-full' />
                                    <span className=''>Students</span>
                                </div>
                                <DownCircleOutlined />
                            </div>
                            <div className={studentsOpen ? "transition-all ease-linear duration-300 h-12 " : " transition-all duration-300 ease-linear text-[2px] h-0 invisible "}>
                                <p className=''>f</p>
                                <p>f</p>
                            </div>
                        </li>
                        <li className='border-l-[6px] border-l-primary pl-5 flex items-center'>
                            <UilCommentAltQuestion className='w-5 mr-2 h-full' />
                            <span className=''> Questions & Answers</span>
                        </li>
                    </ul>

                    <ul className='flex flex-col gap-2 list-none  text-white mt-4'>
                        <li className='border-l-[6px] border-l-primary pl-5 flex items-center'>

                            <UilCog className='w-5 mr-2 h-full' />
                            <span>Settings</span>

                        </li>
                        <li className='border-l-[6px] border-l-primary pl-5 flex items-center'>
                            <UilQuestionCircle className='w-5 mr-2 h-full' />
                            <span>Help</span>
                        </li>
                    </ul>


                </nav>
                {/* <hr className='mx-auto w-[80%]' />
        <span className='h-16 mx-4 text-white font-light my-auto'>Medellin, Colombia 2023</span> */}

            </aside>
            <div className='min-w-[230px] w-[20%]'></div> {/*fake aside -> div with Aside dimensions */}
        </>
    )
}