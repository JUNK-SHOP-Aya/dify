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
    document.title = `服务协议 - Ava`;

  }, [])

  const handleToAll = () => {
    router.push('/')
  }
  return (
    <>
      <div className={style.terms_of_service}>
        <div className={style.acticle_container}>
          <div className={style.container}>
            <h1>服务协议</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(SelModel)
