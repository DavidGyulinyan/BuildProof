import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-128px)] bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Բարի գալուստ BuildProof
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Շինարարական փաստաթղթերի պրոֆեսիոնալ կառավարման համակարգ շինարարական ընդունման փաստաթղթերի ստեղծման և կառավարման համար
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
            {/* Document Template Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Փաստաթղթի օրինակ
              </h2>
              <p className="text-gray-600 mb-6">
                Դիտեք փաստաթղթի օրինակը՝ հասկանալու համար ինչպես պետք է լրացնել
              </p>
              <Link
                href="/template"
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                Դիտել օրինակը
              </Link>
            </div>

            {/* View Document Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Դիտել փաստաթուղթը
              </h2>
              <p className="text-gray-600 mb-6">
                Դիտեք ընթացիկ շինարարական ընդունման փաստաթուղթը բոլոր մանրամասներով և տեղեկատվությամբ
              </p>
              <Link
                href="/view"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Դիտել փաստաթուղթը
              </Link>
            </div>

            {/* Edit Document Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Խմբագրել փաստաթուղթը
              </h2>
              <p className="text-gray-600 mb-6">
                Խմբագրեք և հարմարեցրեք փաստաթղթի բոլոր դաշտերը փոփոխությունների իրական ժամանակի նախադիտմամբ
              </p>
              <Link
                href="/editor"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Խմբագրել փաստաթուղթը
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Հնարավորություններ</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-blue-600 mb-3">
                  <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lg mb-2">Իրական ժամանակի թարմացումներ</h4>
                <p className="text-gray-600 text-sm">Տեսեք փոփոխությունները անմիջապես, երբ խմբագրում եք փաստաթղթի դաշտերը</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-blue-600 mb-3">
                  <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lg mb-2">Տվյալների պահպանում</h4>
                <p className="text-gray-600 text-sm">Ձեր տվյալները ավտոմատ կերպով պահպանվում են բոլոր էջերում</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-blue-600 mb-3">
                  <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lg mb-2">Պրոֆեսիոնալ ձևաչափ</h4>
                <p className="text-gray-600 text-sm">Շինարարական փաստաթղթերի ստանդարտ ձևաչափ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
