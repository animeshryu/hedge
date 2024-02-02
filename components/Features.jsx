import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Portfolio building.',
    description:
      'Portfolio building with free airdrops, coin presales, coins which pump 2x, and 1 coin per month which pumps 30x+, best sources to invest for daily passive income',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'On demand coin analysis.',
    description: 'On demand coin analysis includes coins which are requested by the people, insider info on those coins',
    icon: LockClosedIcon,
  },
  {
    name: 'Free insights.',
    description: 'We offer a lot of value for free which will uplift your expectations and portfolio',
    icon: ServerIcon,
  },
]

export default function Features() {
  return (
    <div className="overflow-hidden bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-white">Grow Faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">At your service</p>
              <p className="mt-6 text-lg leading-8 text-white">
                
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-white" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://media.discordapp.net/attachments/1194344948405899425/1198921084683157584/image.png?ex=65c0a945&is=65ae3445&hm=62ba5be944a89a30934f30fa4d29e065c744afa88f868e6378e21df568f24089&=&format=webp&quality=lossless&width=1068&height=662"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
