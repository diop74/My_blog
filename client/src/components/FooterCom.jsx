import { Footer } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsDribbble, BsGithub, BsTwitter } from 'react-icons/bs';

const FooterCom = () => {
    return (
        <Footer container className='border-t-8 border-teal-500'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='mt-5'>
                    <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                        <span className='px-2 py-1 bg-gradient-to-r from-green-700 via-tail-700 to-lime-00 rounded-lg text-white'>Chitary</span>
                            Blog
                    </Link>
                    </div>
                
                <div className='grid grid-clos-2 mt-4 gap-8 sm:grid-cols-3 sm:gap-6'>
                    <div>
                        <Footer.Title title='About '/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='#' target='_blank' rel='noopener noreferrer' >
                                Logique Execellence
                            </Footer.Link>
                            <Footer.Link href='/About' target='_blank' rel='noopener noreferrer' >
                                Every bits counts
                            </Footer.Link>
                            
                        </Footer.LinkGroup>

                    </div>
                    <div>
                        <Footer.Title title='Fallow Me '/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='https://github.com/diop74' target='_blank' rel='noopener noreferrer' >
                                Github
                            </Footer.Link>
                            <Footer.Link href='/#' target='_blank' rel='noopener noreferrer' >
                                Discord
                            </Footer.Link>
                            
                        </Footer.LinkGroup>

                    </div>
                    <div>
                        <Footer.Title title='Legal'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='#' target='_blank' rel='noopener noreferrer' >
                                Privasy Policy
                            </Footer.Link>
                            <Footer.Link href='/#' target='_blank' rel='noopener noreferrer' >
                                Terms of Service
                            </Footer.Link>
                            
                        </Footer.LinkGroup>

                    </div>
                </div>
             </div>
             <Footer.Divider/>
             <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <Footer.Copyright href='#' by="The Darknight"  year={new Date().getFullYear()}/>
                <div className='flex gap-6 sm:mt-4 sm:justify-center'>
                <Footer.Icon href='#' icon={BsFacebook} />
                <Footer.Icon href='#' icon={BsInstagram} />
                <Footer.Icon href='#' icon={BsDribbble} />
                <Footer.Icon href='#' icon={BsGithub} />
                <Footer.Icon href='#' icon={BsTwitter} />
                </div>
             </div>
            </div>
        </Footer>
    );
}

export default FooterCom;
