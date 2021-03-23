import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'PIKA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x38232dCDF2d42e201Cef3d3825674418273564D1',
    },
    tokenSymbol: 'PIKA',
    tokenAddresses: {
      97: '',
      56: '0x50d370cc853217099bef3815faabfc563139ec2a',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 4,
    risk: 5,
    lpSymbol: 'PIKA-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xBbe05d94FcC4f3b2eD578d21B0087ed38EF2d5f1',
    },
    tokenSymbol: 'PIKA',
    tokenAddresses: {
      97: '',
      56: '0x50d370cc853217099bef3815faabfc563139ec2a',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 1,
    lpSymbol: 'CANDY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xe2F3Cc81695E07EE1500E32E342ad6bbc96f5C6a',
    },
    tokenSymbol: 'CANDY',
    tokenAddresses: {
      97: '',
      56: '0x1963E04a845213d005cDf0e22a39F85BD5941390',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 0,
    risk: 1,
    lpSymbol: 'CANDY-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x2b3E5A511e8D2d3060B413A78c2FBCc88497d3a0',
    },
    tokenSymbol: 'CANDY',
    tokenAddresses: {
      97: '',
      56: '0x1963E04a845213d005cDf0e22a39F85BD5941390',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
