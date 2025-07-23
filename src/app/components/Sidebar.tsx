'use client'
import { Download } from 'lucide-react';
import { useState, useRef, useEffect } from 'react'

const sections = [
    { key: 'about', label: 'I. About' },
    { key: 'experience', label: 'II. Experience' },
    { key: 'projects', label: 'III. Projects' },
    { key: 'contact', label: 'IV. Contact' },
    {
        key: 'resume', label: (
            <span className="flex items-center gap-2">
                <Download size={16} /> Resume
            </span>
        )
    },
];

export default function Sidebar({
    open,
    setOpen,
}: {
    open: boolean
    setOpen: (value: boolean) => void
}) {
    const [active, setActive] = useState('')
    const sidebarRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const allSections = document.querySelectorAll('section[id]'); // tất cả section có id

        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    setActive(id);
                    break;
                }
            }
        }, {
            root: null,
            rootMargin: '0px 0px -60% 0px',
            threshold: 0.1,
        });

        allSections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);


    // Đóng sidebar khi click ra ngoài (chỉ mobile)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as Node) &&
                window.innerWidth < 640
            ) {
                setOpen(false)
            }
        }

        if (open) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [open, setOpen])

    const handleScroll = (id: string) => {
        const isHome = window.location.pathname === '/'

        if (isHome) {
            const el = document.getElementById(id.toLowerCase())
            el?.scrollIntoView({ behavior: 'smooth' })
            setActive(id)
            setOpen(false)
        } else {
            // Nếu đang ở detail page thì quay về homepage kèm hash
            window.location.href = `/#${id.toLowerCase()}`
        }
    }

    return (
        <>
            {/* Overlay on mobile */}
            {open && (
                <div className="fixed inset-0 bg-black bg-opacity-40 z-30 sm:hidden" style={{ opacity: open ? 0.8 : 1 }}></div>
            )}

            {/* Sidebar */}
            <aside
                ref={sidebarRef}
                className={`fixed top-0 left-0 z-40 h-screen bg-[#17202a] text-white p-4 transition-all duration-300
    ${open ? 'w-64 translate-x-0' : 'w-0 -translate-x-full'} 
    sm:w-16 sm:translate-x-0 sm:hover:w-64 sm:overflow-x-hidden group`}
                aria-label="Sidebar"
            >
                {/* Close button (mobile only) */}
                <button
                    onClick={() => setOpen(false)}
                    className="sm:hidden absolute top-2 right-2 p-2 text-gray-400 hover:text-white"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Sidebar content */}
                <div className="h-full mt-10 sm:mt-0">
                    <ul className="space-y-2 font-medium pt-4">
                        {sections.map((section) => (
                            <li key={section.key} className="hover:bg-gray-700 rounded">
                                {section.key === 'resume' ? (
                                    <a
                                        href="/files/CV_ChiVo_2025.pdf"
                                        download
                                        className={`w-full flex items-center gap-2 px-3 py-2 whitespace-nowrap
            ${active === section.key ? 'text-cyan-400' : ''}`}
                                    >
                                        <span
                                            className={`text-sm font-medium ${open ? 'inline' : 'hidden'} sm:group-hover:inline`}
                                        >
                                            {section.label}
                                        </span>
                                    </a>
                                ) : (
                                    <button
                                        type="button"
                                        className={`w-full flex items-center gap-2 px-3 py-2 whitespace-nowrap
            ${active === section.key ? 'text-cyan-400' : ''}
            group-hover:justify-start`}
                                        onClick={() => handleScroll(section.key)}
                                    >
                                        <span
                                            className={`text-sm font-medium ${open ? 'inline' : 'hidden'} sm:group-hover:inline`}
                                        >
                                            {section.label}
                                        </span>
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>

    )
}
