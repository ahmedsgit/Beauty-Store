import Image from 'next/image';
import cosmaticsTools from '../public/images/cosmetics-tools.png';

export default function Form() {
    return (
      <section className='flex laptop:flex-row flex-col w-11/12 laptop:ml-auto ml-2 mt-44'>
        <div className='bg-orange-200 laptop:w-2/5 w-full h-full laptop:p-24 p-10'>
          <div className='text-white w-64'>
            <h6 className='capitalize font-medium text-2xl tracking-widest'>
              special
            </h6>
            <h3 className='flex font-medium text-6xl border-b-4 border-white'>
              <h2 className='animate-spin'>O</h2>
              <h2>ffer</h2>
              <h2 className='animate-bounce'>!</h2>
            </h3>
            <div className='font-light py-4 '>
              <div className='flex'>
                <div>Subscribe to mail and get </div>
                <div className='font-bold pl-1 animate-pulse'>15%</div>
              </div>
              <p>off on first order</p>
            </div>
            <p className=''>
              <p></p>{' '}
            </p>
          </div>
          <div className='mt-16'>
            <form action=''>
              <div className='mb-5'>
                <input
                  className='bg-orange-300 text-white text-sm placeholder-orange-100 w-full p-4 outline-none rounded-md focus:bg-orange-400'
                  type='text'
                  placeholder='Name'
                />
              </div>
              <div className='mb-5'>
                <input
                  className='bg-orange-300 text-white text-sm placeholder-orange-100 w-full p-4 outline-none rounded-md focus:bg-orange-400'
                  type='email'
                  placeholder='Email'
                />
              </div>
              <div>
                <button
                  className='bg-black-400 text-white w-full p-4 uppercase text-sm tracking-widest hover:bg-blue-900 active:scale-90 rounded-lg focus:outline-none'
                  type='submit'
                >
                  Subscribe Now
                </button>
              </div>
              <div className='flex items-center mt-4'>
                <div className='block w-5 h-5'>
                  <input type='checkbox' id='check' chceked />
                  <label for='check' className='' />
                </div>
                <div className='ml-3 text-sm font-thin'>
                  By clicking subscribe, you agree to our terms and
                  <a className='ml-2 text-blue-900' href='#'>
                    privacy policy.
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='w-3/5'>
          <Image src={cosmaticsTools} alt='cosmatics Tools' objectFit />
        </div>
      </section>
    );
}
