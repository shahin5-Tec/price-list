import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Products', path: '/products' },
        { id: 5, name: 'Services', path: '/services' }
    ];

    return (
        <nav className='bg-purple-400'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>
                    {open === true ?
                        <Bars3Icon className="h-6 w-6 text-purple-500" /> :
                        <XMarkIcon className="h-6 w-6 text-red-500" />
                    }

                </span>

            </div>

            <ul className={`md:flex md:static absolute duration-150 px-5 py-3 pl-8 pb-4 bg-purple-400 ${open ? 'top-6':'-top-36'}`}>
                {
                    routes.map(route => <Link key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;