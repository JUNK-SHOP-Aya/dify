import React from 'react'
import Forms from './forms'
import Header from './_header'
import style from './page.module.css'
import classNames from 'classnames'

const SignIn = () => {

  return (
    <>
      <div className={classNames(
        style.background,
        'flex w-full min-h-screen',
        'sm:p-4 lg:p-8',
        'gap-x-20',
        'justify-center lg:justify-start'
      )}>
        <div className={
          classNames(
            'flex w-full flex-col bg-white shadow rounded-2xl shrink-0',
            'space-between'
          )
        }>
          <Header />
          <Forms />
        </div>

      </div>

    </>
  )
}

export default SignIn
