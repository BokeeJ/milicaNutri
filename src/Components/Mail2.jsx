import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';

function Mail2() {
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100

        },
        animate: {
            opacity: 3,
            y: 0,
            transition: {
                delay: 0.5,
                duration: 3
            }
        }
    }
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_mu9h4di', 'template_2kpesyf', form.current, {
                publicKey: 'V-19CuRw6fsHeW7fW',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div className='p-10 flex justify-center items-center'>
            <motion.div
                variants={fadeInAnimationVariants}
                initial='initial'
                whileInView='animate'
                viewport={{
                    once: true,
                }}
                className='lg:w-[500px] h-full w-[80%] bg-green-600 rounded-2xl opacity-80 md:w-full'>
                <h1 className='text-white font-baskervville text-4xl text-center p-10'>Zakazite pregled</h1>
                <form className='flex flex-col gap-5  p-10' ref={form} onSubmit={sendEmail}>
                    <input className='text-xl h-10 p-4 rounded-xl' placeholder='Ime' type="text" name="user_name" />
                    <input className='text-xl h-10 p-4 rounded-xl' placeholder='E-mail' type="email" name="user_email" />
                    <input className='text-xl h-10 p-4 rounded-xl' placeholder='Telefon' type='tel' name="number" />
                    <textarea className='w-full h-[120px] text-xl p-4 rounded-xl' placeholder='Poruka...' name="message" />
                    <button className='text-2xl text-white border-white border-2 rounded-3xl p-3 font-bold font-baskervville' type="submit" value="Send">Send</button>
                </form>
            </motion.div>
        </div>
    )
}

export default Mail2