import Section from './Section'
import Button from './Button'
import { collabContent, collabText } from '../constants'
import { check } from '../assets'
import CollCircle from './CollCircle'

const Collaboration = () => {
    return (
        <Section crosses>
            <div className='container lg:flex'>
                <div className='max-w-[25rem]'>
                    <h2 className='h2 mb-4 md:mb-8'>AI chat app for Seamless collaboration</h2>
                    <ul className='max-w-[22rem] mb-10 lg:mb-14'>
                        {collabContent.map((item) => (
                            <li key={item.id} className='mb-3 py-3'>
                                <div className='flex items-center'>
                                    <img src={check} alt="" width={24} height={24} />
                                    <h6 className='body-2 ml-5'>{item.title}</h6>
                                </div>
                                {item.text && <p className='body-2 mt-3 text-n-4'>{item.text}</p>}
                            </li>
                        ))}
                    </ul>
                    <Button>Try it now</Button>
                </div>
                <div className='lg:ml-auto xl:w-[38rem} mt-4'>
                    <p className='body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto'>{collabText}</p>
                    <CollCircle />
                </div>
            </div>
        </Section>
    )
}

export default Collaboration