import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import ProviderInput from '../provider-input'
import type { ValidatedStatusState } from '../provider-input/useValidateToken'
import useValidateToken, { ValidatedStatus } from '../provider-input/useValidateToken'
import {
  ValidatedErrorIcon,
  ValidatedErrorOnOpenaiTip,
  ValidatedSuccessIcon,
  ValidatingTip,
} from '../provider-input/Validate'
import type { Provider } from '@/models/common'

type IOpenaiProviderProps = {
  provider: Provider
  onValidatedStatus: (status?: ValidatedStatusState) => void
  onTokenChange: (token: string) => void
}

const OpenaiProvider = ({
  provider,
  onValidatedStatus,
  onTokenChange,
}: IOpenaiProviderProps) => {
  const { t } = useTranslation()
  const [token, setToken] = useState(provider.token as string || '')
  const [validating, validatedStatus, setValidatedStatus, validate] = useValidateToken(provider.provider_name)
  const handleFocus = () => {
    if (token === provider.token) {
      setToken('')
      onTokenChange('')
      setValidatedStatus({})
    }
  }
  const handleChange = (v: string) => {
    setToken(v)
    onTokenChange(v)
    validate(v, {
      beforeValidating: () => {
        if (!v) {
          setValidatedStatus({})
          return false
        }
        return true
      },
    })
  }
  useEffect(() => {
    if (typeof onValidatedStatus === 'function')
      onValidatedStatus(validatedStatus)
  }, [validatedStatus])

  const getValidatedIcon = () => {
    if (validatedStatus?.status === ValidatedStatus.Error || validatedStatus.status === ValidatedStatus.Exceed)
      return <ValidatedErrorIcon />

    if (validatedStatus.status === ValidatedStatus.Success)
      return <ValidatedSuccessIcon />
  }
  const getValidatedTip = () => {
    if (validating)
      return <ValidatingTip />

    if (validatedStatus?.status === ValidatedStatus.Error)
      return <ValidatedErrorOnOpenaiTip errorMessage={validatedStatus.message ?? ''} />
  }

  return (
    <div className='px-4 pt-3 pb-4'>
      <ProviderInput
        value={token}
        name={t('common.provider.apiKey')}
        placeholder={t('common.provider.enterYourKey')}
        onChange={handleChange}
        onFocus={handleFocus}
        validatedIcon={getValidatedIcon()}
        validatedTip={getValidatedTip()}
      />
    </div>
  )
}

export default OpenaiProvider
