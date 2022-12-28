import React from 'react'

export default function footer() {
  return (
    <footer className='bg-dark text-white py-5 px-8 sm:px-5 flex flex-col sm:flex-row sm:justify-start sm:gap-20'>

    <h1 className='text-primary' >contacto</h1>

    <div className='flex flex-col  sm:flex-row sm:justify-around gap-5  '>
        <div>

        <p className='text-white'>14776, Branderburg, Alemania</p>
        <p className='text-white'>+49 157 36666390</p>
        <a href="mailto:sergio@loick.com">sergio@loick.com</a>
        </div>

        <div className='flex flex-col gap-1 sm:justify-center'>
            <a href="">www.wolfgg.live</a>
            <a href="">www.kingcord.xyz</a>
            <a href="">www.loick.team</a>
        </div>
    </div>

    <div className='flex items-center gap-4'>

        <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill='white' d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
        </a>

        <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill='white' d="M10.224 17.806l1.776-1.776h3.343l2.09-2.09v-6.686h-10.03v8.776h2.821v1.776zm3.866-8.149h1.254v3.653h-1.254v-3.653zm-3.344 0h1.254v3.653h-1.254v-3.653zm1.254-9.657c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.687 14.567l-3.657 3.657h-2.716l-1.777 1.776h-1.88v-1.776h-3.344v-9.821l.941-2.403h12.433v8.567z" /></svg>
        </a>

        {/* discord */}
        <a href="" className='-ml-3'>
            <svg xmlns="http://www.w3.org/2000/svg" height="80" width="120" version="1.1" id="Layer_1" viewBox="-108.84 -49.575 943.28 297.45">

                <path fill='white' d="M105.9 83.2c-5.7 0-10.2 4.9-10.2 11s4.6 11 10.2 11c5.7 0 10.2-4.9 10.2-11s-4.6-11-10.2-11zm-36.5 0c-5.7 0-10.2 4.9-10.2 11s4.6 11 10.2 11c5.7 0 10.2-4.9 10.2-11 .1-6.1-4.5-11-10.2-11z" class="st0" />
                <path fill='white' d="M154.5 0h-134C9.2 0 0 9.2 0 20.5v134C0 165.8 9.2 175 20.5 175h113.4l-5.3-18.3 12.8 11.8 12.1 11.1 21.6 18.7V20.5C175 9.2 165.8 0 154.5 0zm-38.6 129.5s-3.6-4.3-6.6-8c13.1-3.7 18.1-11.8 18.1-11.8-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.4-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.6-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.2-1.8-1-2.8-1.7-2.8-1.7s4.8 7.9 17.5 11.7c-3 3.8-6.7 8.2-6.7 8.2-22.1-.7-30.5-15.1-30.5-15.1 0-31.9 14.4-57.8 14.4-57.8 14.4-10.7 28-10.4 28-10.4l1 1.2c-18 5.1-26.2 13-26.2 13s2.2-1.2 5.9-2.8C63.5 53 72 51.8 75.5 51.4c.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.5 0 0-7.9-7.5-24.9-12.6l1.4-1.6s13.7-.3 28 10.4c0 0 14.4 25.9 14.4 57.8 0-.1-8.4 14.3-30.5 15zm151-86.7h-33.2v37.3l22.1 19.9V63.8h11.8c7.5 0 11.2 3.6 11.2 9.4v27.7c0 5.8-3.5 9.7-11.2 9.7h-34v21.1h33.2c17.8.1 34.5-8.8 34.5-29.2V72.7c.1-20.8-16.6-29.9-34.4-29.9zm174 59.7V71.9c0-11 19.8-13.5 25.8-2.5L485 62c-7.2-15.8-20.3-20.4-31.2-20.4-17.8 0-35.4 10.3-35.4 30.3v30.6c0 20.2 17.6 30.3 35 30.3 11.2 0 24.6-5.5 32-19.9l-19.6-9c-4.8 12.3-24.9 9.3-24.9-1.4zm-60.5-26.4c-6.9-1.5-11.5-4-11.8-8.3.4-10.3 16.3-10.7 25.6-.8l14.7-11.3c-9.2-11.2-19.6-14.2-30.3-14.2-16.3 0-32.1 9.2-32.1 26.6 0 16.9 13 26 27.3 28.2 7.3 1 15.4 3.9 15.2 8.9-.6 9.5-20.2 9-29.1-1.8l-14.2 13.3c8.3 10.7 19.6 16.1 30.2 16.1 16.3 0 34.4-9.4 35.1-26.6 1-21.7-14.8-27.2-30.6-30.1zm-67 55.5h22.4V42.8h-22.4zm377.7-88.8h-33.2v37.3L680 100V63.8h11.8c7.5 0 11.2 3.6 11.2 9.4v27.7c0 5.8-3.5 9.7-11.2 9.7h-34v21.1h33.3c17.8.1 34.5-8.8 34.5-29.2V72.7c0-20.8-16.7-29.9-34.5-29.9zm-162.9-1.2c-18.4 0-36.7 10-36.7 30.5v30.3c0 20.3 18.4 30.5 36.9 30.5 18.4 0 36.7-10.2 36.7-30.5V72.1c0-20.4-18.5-30.5-36.9-30.5zm14.4 60.8c0 6.4-7.2 9.7-14.3 9.7-7.2 0-14.4-3.1-14.4-9.7V72.1c0-6.5 7-10 14-10 7.3 0 14.7 3.1 14.7 10zm102.9-30.3c-.5-20.8-14.7-29.2-33-29.2H577v88.8h22.7v-28.2h4l20.6 28.2h28l-24.2-30.5c10.7-3.4 17.4-12.7 17.4-29.1zm-32.6 12h-13.2V63.8h13.2c14.1 0 14.1 20.3 0 20.3z" class="st0" />
            </svg>
        </a>
    </div>
</footer>
  )
}
