"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-blue-600">
                            BuildProof
                        </Link>
                    </div>
                    <nav className="flex space-x-4">
                        <Link
                            href="/"
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                pathname === '/'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                            }`}
                        >
                            Գլխավոր
                        </Link>
                        <Link
                            href="/editor"
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                pathname === '/editor'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                            }`}
                        >
                            Փաստաթղթի խմբագրիչ
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}