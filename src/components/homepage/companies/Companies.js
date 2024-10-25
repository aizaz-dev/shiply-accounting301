import Image from 'next/image'

const companies = [
  { name: 'Alphagraphics', logo: '/homepage/companies/alpha.jpg' },
  { name: 'PIP Marketing', logo: '/homepage/companies/pip.jpg' },
  { name: 'Sir Speedy', logo: '/homepage/companies/sirspeedy.png' },
  { name: 'Allegra', logo: '/homepage/companies/allegra.png' },
]

export default function Companies() {
  return (
    <section className="py-[80px] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex max-md:flex-col items-center justify-between gap-4 sm:gap-8">
          <p className="text-gray-600 font-[600] font-lato whitespace-nowrap text-[18px] text-center">
            Companies that rely <br  className='max-md:hidden'/> on ShipLeap:
          </p>
          {companies.map((company) => (
            <div key={company.name} className="flex max-md:mt-5 items-center justify-center">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={200}
                height={60}
                className="w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}