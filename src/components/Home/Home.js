import Head from 'next/head'

import { InputWithLabel } from './components/InputWithLabel';
import { SubmitButton } from './components/SubmitButton';

export const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white p-4">

      </header>

      <main className="bg-white p-4">
        <h1 className="text-4xl font-extrabold">
          <span className="block">Finally get</span>{' '}
          <span className="block text-blue-600">your stuff done</span>
        </h1>
      </main>

      <footer className="bg-gray-100 p-4">
        <div className="bg-white p-2">
            <form>
              <h3 className="text-center p-2 text-2xl font-extrabold">
                Want to know more?
              </h3>
              <InputWithLabel label='Name' placeholder='Name' />
              <InputWithLabel label='Contact Info' placeholder='Email or Phone' />
              <SubmitButton label="I'm in" />
            </form>
          </div>
      </footer>
    </div>

  );
}