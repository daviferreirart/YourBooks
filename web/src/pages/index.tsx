import { LockClosedIcon } from '@heroicons/react/solid';
import { GetServerSideProps } from 'next';
import { getSession, signIn } from 'next-auth/react';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if (session) {
    return {
      redirect: {
        destination: '/app',
        permanent: false,
      }
    }
  }
  return {
    props: {}
  }
};

export default function Home() {

  function handleSignin() {
    signIn('google')
  }
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Livro.svg/800px-Livro.svg.png"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Your Books Login</h2>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleSignin}
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon className="h-5 w-5 text-indigo-350 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            Logue com o google.
          </button>
        </div>
      </div>
    </div>
  )
}
