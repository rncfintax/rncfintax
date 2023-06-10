import Link from 'next/link'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { FiChevronDown } from 'react-icons/fi'
import { TbMenu2 } from 'react-icons/tb'
import { navlink } from './navlinks'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white/75 backdrop-blur-lg sticky top-0 z-40 select-none drop-shadow-lg">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-5 lg:py-4" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">RNC Fintax</span>
                        <Logo />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}>
                        <span className="sr-only">Open main menu</span>
                        <TbMenu2 fontSize={28} />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-6">
                    {navlink.map((item, i) => (
                        item.sublinks ?
                            <Popover key={i} className="relative">
                                <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-gray-900">
                                    {item.title}
                                    <FiChevronDown fontSize={16} />
                                </Popover.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterhref="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leavehref="opacity-0 translate-y-1">
                                    <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                                        <div className="p-4">
                                            {item.sublinks.map((e, i) => (
                                                <div
                                                    key={i}
                                                    className="group relative flex items-center gap-x-6 rounded-lg p-1 text-sm leading-6 hover:bg-gray-50">
                                                    <div className="flex h-6 w-6 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                        <e.icon fontSize={16} className="text-gray-600 group-hover:text-blue-600" aria-hidden="true" />
                                                    </div>
                                                    <div className="flex-auto">
                                                        <Popover.Button as={Link} href={'/services' + item.href + e.href} className="block font-semibold text-gray-900">
                                                            {e.name}
                                                            <span className="absolute inset-0" />
                                                        </Popover.Button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </Popover>
                            :
                            <Link key={i + 100} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                                {item.title}
                            </Link>
                    ))}
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="tel:9256317271" className="text-xs font-semibold bg-black hover:bg-blue-500 text-white py-2 px-3 rounded">
                        Book Appointment
                    </a>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">RNC Fintax</span>
                            <Logo />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}>
                            <span className="sr-only">Close menu</span>
                            <BsChevronDown className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        navlink.map((item, i) => (
                                            item.sublinks ?
                                                <div key={i}>
                                                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                                                        {item.title}
                                                        <BsChevronDown className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                            aria-hidden="true" />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="mt-2 space-y-2">
                                                        {item.sublinks.map((e, i) => (
                                                            <Disclosure.Button
                                                                key={i}
                                                                as={Link}
                                                                onClick={() => setMobileMenuOpen(false)}
                                                                href={'/services' + item.href + e.href}
                                                                className="block rounded-lg py-1 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                                {e.name}
                                                            </Disclosure.Button>
                                                        ))}
                                                    </Disclosure.Panel>
                                                </div>
                                                :
                                                <Link onClick={() => setMobileMenuOpen(false)} key={i} href={item.href} className="vflex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50 block">
                                                    {item.title}
                                                </Link>
                                        ))
                                    )}
                                </Disclosure>
                            </div>
                            <div className="py-6 text-center">
                                <a href="tel:9256317271"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-black hover:bg-blue-500">
                                    Book Appointment
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

function Logo() {
    return (
        <Image className='object-contain object-center' width={112} height={56} src="/logo.png" alt="RNC Fintax" priority />
    )
}