import { useEffect } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';

const array = [1,2,3,4,5]

const Testimonials = () => {
  useEffect(() => {
    const keenSlider = new KeenSlider('#keen-slider', {
      loop: true,
      slides: {
        origin: 'center',
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 1024px)': {
          slides: {
            origin: 'auto',
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    });

    const keenSliderPrevious = document.getElementById('keen-slider-previous');
    const keenSliderNext = document.getElementById('keen-slider-next');
    const keenSliderPreviousDesktop = document.getElementById('keen-slider-previous-desktop');
    const keenSliderNextDesktop = document.getElementById('keen-slider-next-desktop');

    keenSliderPrevious?.addEventListener('click', () => keenSlider.prev());
    keenSliderNext?.addEventListener('click', () => keenSlider.next());
    keenSliderPreviousDesktop?.addEventListener('click', () => keenSlider.prev());
    keenSliderNextDesktop?.addEventListener('click', () => keenSlider.next());
  }, []);

  return (
    <section className="bg-gray-50 py-10 dark:bg-black dark:text-white container mx-auto"> 
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Top Customer Feedback
            </h2>

            <p className="mt-4 text-black dark:text-white">
            Discover what our users are saying about their experience with EduCreate. Their success stories and testimonials reflect the impact our platform has on teaching and learning.
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous-desktop"
                className="rounded-full border border-newBlue p-3 text-newBlue transition hover:bg-newBlue hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next-desktop"
                className="rounded-full border border-newBlue p-3 text-newBlue transition hover:bg-newBlue hover:text-white"
              >
                <svg
                  className="size-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div id="keen-slider" className="keen-slider">
              {/* Slide 1 */}
              <div className="keen-slider__slide rounded-lg">
                <blockquote className="rounded-lg flex h-full flex-col justify-between bg-white dark:bg-black dark:border-newBlue dark:border p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 text-yellow-500">
                       {array.map((item) => {
                        return <svg
                        key={item}
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                       })}
                      {/* Repeat SVG stars as needed */}
                    </div>

                    <div className="mt-4">
                      <p className="text-2xl font-bold text-newBlue sm:text-3xl">Transformative Experience</p>

                      <p className="mt-4 leading-relaxed text-gray-700 dark:text-white">
                      EduCreate has revolutionized my teaching approach. The {`platform's`} intuitive design and extensive resources have allowed me to create engaging content that resonates with my students. {`I've`} seen a remarkable improvement in their enthusiasm for learning!
                      </p>
                    </div>
                  </div>

                  <footer className="mt-4 text-sm font-medium text-gray-700 dark:text-white sm:mt-6">
                    &mdash; Sarah Johnson, Educator
                  </footer>
                </blockquote>
              </div>

              {/* Slide 2 */}
              <div className="keen-slider__slide">
                <blockquote className="rounded-lg flex h-full flex-col justify-between dark:bg-black dark:border border-newBlue bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 text-yellow-500">
                    {array.map((item) => {
                        return <svg
                        key={item}
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                       })}
                      {/* Repeat SVG stars as needed */}
                    </div>

                    <div className="mt-4">
                      <p className="text-2xl font-bold text-newBlue sm:text-3xl">Empowering Educators</p>

                      <p className="mt-4 leading-relaxed text-gray-700 dark:text-white">
                      Since I started using EduCreate, my ability to connect with students has skyrocketed. The tools available have made lesson planning a breeze, and my students are more engaged than ever. {`It's`} a game changer for any educator!
                      </p>
                    </div>
                  </div>

                  <footer className="mt-4 text-sm font-medium text-gray-700 dark:text-white sm:mt-6">
                    &mdash; David Thompson, High School Teacher
                  </footer>
                </blockquote>
              </div>

              {/* Slide 3 */}
              <div className="keen-slider__slide">
                <blockquote className="rounded-lg flex h-full flex-col justify-between dark:bg-black dark:border border-newBlue bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 text-yellow-500">
                    {array.map((item) => {
                        return <svg
                        key={item}
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                       })}
                      {/* Repeat SVG stars as needed */}
                    </div>

                    <div className="mt-4">
                      <p className="text-2xl font-bold text-newBlue sm:text-3xl">Outstanding Support and Resources</p>

                      <p className="mt-4 leading-relaxed text-gray-700 dark:text-white">
                      EduCreate provides not just a platform, but a community of support. The resources available are top-notch, and the customer service team is always ready to help. I {`couldn't`} ask for a better partner in education!
                      </p>
                    </div>
                  </div>

                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6 dark:text-white">
                    &mdash; Jessica Lee, College Lecturer
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center lg:hidden">
          <button
            aria-label="Previous slide"
            id="keen-slider-previous"
            className="rounded-full border border-newBlue p-3 text-newBlue transition hover:bg-newBlue hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 rtl:rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            id="keen-slider-next"
            className="ml-4 rounded-full border border-newBlue p-3 text-newBlue transition hover:bg-newBlue hover:text-white"
          >
            <svg
              className="size-5 rtl:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
