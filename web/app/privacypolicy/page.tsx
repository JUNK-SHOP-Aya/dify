'use client'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation'
import style from './page.module.css'
import classNames from 'classnames'

const SelModel = () => {
  const { t } = useTranslation()
  const router = useRouter()

  useEffect(() => {
    document.title = `隐私协议 - Ava`;

  }, [])

  const handleToAll = () => {
    router.push('/')
  }
  return (
    <>
      <div className={style.privacy_policy}>
        <div className={style.logo}></div>
        <div className={style.acticle_container}>
          <div className={style.container}>
            <h1>隐私协议</h1>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(SelModel)
