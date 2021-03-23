import React from 'react'
import { Card, CardBody, Heading, Text } from 'pikachus-uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { Tweet } from 'react-twitter-widgets'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'

const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const TwitterCard = () => {
  const TranslateString = useI18n()

  return (
    <StyledTwitterCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(10003, 'Announcements')}
        </Heading>
        <Tweet tweetId="1372982071682027528"/>
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
